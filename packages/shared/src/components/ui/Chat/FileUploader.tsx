import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

import { createId } from "@paralleldrive/cuid2";
import { useDropzone } from "react-dropzone";
import { FileKind, getFileKindFromObject } from "./file";
import { ConfigContext } from "@shared/components/context/ConfigContext";

interface FileUploaderContextValue {
  isDragActive: boolean;
  getRootProps: any;
  getInputProps: any;
  onFileInput: (files: File[]) => void;
  version: number;
  uploadQueue: Set<RawMedia>;
  cancelUpload: (id: string) => void;
  clearUplaodQueue: VoidFunction;
}

export const FileUploaderContext = createContext(
  {} as FileUploaderContextValue
);

interface FileUploaderProviderProps {
  children: ReactNode;
  pathPrefix: string;
}

export type RawMedia = {
  id: string;
  file: File;
  width: number;
  height: number;
  binaryStr: string | ArrayBuffer;
  uploaded: boolean;
  path: string;
  fileKind: FileKind;
};

export const FileUploaderProvider = (props: FileUploaderProviderProps) => {
  const { children, pathPrefix } = props;
  const uploadQueue = useRef<Set<RawMedia>>(new Set());
  const [version, setVersion] = useState(0);
  const executionStatus = useRef<Map<string, boolean>>(new Map());
  const currentExecution = useRef<null | string>(null);
  const controllerMap = useRef<Map<string, AbortController>>(new Map());
  const { assetsServiceUrl } = useContext(ConfigContext);

  const uploadFile = useCallback(
    async (file: RawMedia) => {
      const abortController = new AbortController();
      controllerMap.current.set(file.id, abortController);
      const requestOptions: RequestInit = {
        method: "PUT",
        body: file.file,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        mode: "cors",
        redirect: "follow",
        signal: abortController.signal,
      };
      const { path } = await fetch(
        `${assetsServiceUrl}/${pathPrefix}/${file.id}`,
        requestOptions
      ).then((res) => res.json());
      return path;
    },
    [assetsServiceUrl, pathPrefix]
  );

  const cancelUpload = (id: string) => {
    const abortController = controllerMap.current.get(id);
    abortController?.abort();

    for (const upload of uploadQueue.current) {
      if (upload.id === id) {
        uploadQueue.current.delete(upload);
        setVersion((v) => v + 1);
        break;
      }
    }
  };

  const executeQueue = useCallback(
    async (id: string) => {
      currentExecution.current = id;
      setVersion((v) => v + 1);
      for (const upload of uploadQueue.current) {
        if (executionStatus.current.get(id)) {
          break;
        }
        if (!upload.uploaded) {
          const path = await uploadFile(upload);
          upload.uploaded = true;
          upload.path = path;
          setVersion((v) => v + 1);
        }
      }
    },
    [uploadFile]
  );

  const onFileInput = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = async () => {
          const binaryStr = reader.result!;
          const fileKind = getFileKindFromObject(file);
          const add = (width: number, height: number) => {
            uploadQueue.current.add({
              file,
              id: createId(),
              binaryStr,
              uploaded: false,
              path: "",
              fileKind,
              height,
              width,
            });

            setVersion((v) => v + 1);

            if (index === acceptedFiles.length - 1) {
              if (currentExecution.current) {
                executionStatus.current.set(currentExecution.current, false);
              }
              const executionId = createId();
              executeQueue(executionId);
            }
          };
          let width = 0;
          let height = 0;
          if (fileKind === "image") {
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = () => {
              width = img.width;
              height = img.height;
              add(width, height);
            };
          } else {
            add(width, height);
          }
        };
        reader.readAsArrayBuffer(file);
      });
    },
    [executeQueue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onFileInput,
    noClick: true,
  });

  const clearUplaodQueue = () => {
    uploadQueue.current = new Set();
    setVersion((v) => v + 1);
  };

  const value = {
    isDragActive,
    getRootProps,
    getInputProps,
    onFileInput,
    version,
    cancelUpload,
    uploadQueue: uploadQueue.current,
    clearUplaodQueue,
  };

  return (
    <FileUploaderContext.Provider value={value}>
      {children}
    </FileUploaderContext.Provider>
  );
};
