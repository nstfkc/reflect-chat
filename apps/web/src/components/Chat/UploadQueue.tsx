import { ReactNode, useContext } from "react";

import { FileUploaderContext, Media } from "./FileUploader";
import { CgClose, CgSpinner } from "react-icons/cg";
import { cx } from "class-variance-authority";
import { FileKind } from "./file";
import {
  HiOutlineArchiveBox,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineVideoCamera,
} from "react-icons/hi2";

interface PreviewWrapperProps {
  isLoading: boolean;
  cancel: VoidFunction;
  children: ReactNode;
}

const PreviewWrapper = (props: PreviewWrapperProps) => {
  const { isLoading, cancel, children } = props;
  return (
    <div className="relative group">
      <button
        className={cx(
          "absolute right-[-8px] top-[-8px] z-10 bg-gray-100 rounded-full p-1",
          isLoading ? "block" : "hidden group-hover:block"
        )}
        onClick={cancel}
      >
        {props.isLoading ? (
          <span>
            <CgSpinner className="animate-spin group-hover:hidden" />
            <CgClose className="hidden group-hover:block" />
          </span>
        ) : (
          <CgClose className="hidden group-hover:block" />
        )}
      </button>
      {children}
    </div>
  );
};

interface PreviewProps {
  media: Media;
  label: string;
}

const ImagePreview = (props: PreviewProps) => {
  return (
    <div className="w-16 h-16 relative border-2 border-gray-600 rounded-md overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="no-alt"
        className="object-contain"
        src={URL.createObjectURL(props.media.file)}
      />
    </div>
  );
};

const GenericPreview = (props: PreviewProps & { children: ReactNode }) => {
  return (
    <div className="flex gap-2 max-w-32 border-2 border-gray-600 rounded-lg p-1">
      {props.children}
      <div className="flex flex-col">
        <span>{props.media.file.name}</span>
        <span className="opacity-50">{props.label}</span>
      </div>
    </div>
  );
};

const DocumentPreview = (props: PreviewProps) => {
  return (
    <GenericPreview {...props}>
      <HiOutlineDocumentText className="text-3xl" />
    </GenericPreview>
  );
};

const AudioPreview = (props: PreviewProps) => {
  return (
    <GenericPreview {...props}>
      <HiOutlinePlay />
    </GenericPreview>
  );
};

const VideoPreview = (props: PreviewProps) => {
  return (
    <GenericPreview {...props}>
      <HiOutlineVideoCamera />
    </GenericPreview>
  );
};

const ArchivePreview = (props: PreviewProps) => {
  return (
    <GenericPreview {...props}>
      <HiOutlineArchiveBox />
    </GenericPreview>
  );
};

const previewLookup: Record<
  FileKind,
  { label: string; Component: (props: PreviewProps) => JSX.Element }
> = {
  image: {
    label: "Image",
    Component: ImagePreview,
  },
  document: {
    label: "Document",
    Component: DocumentPreview,
  },
  archive: {
    label: "Archive",
    Component: ArchivePreview,
  },
  audio: {
    label: "Audio",
    Component: AudioPreview,
  },
  video: {
    label: "Video",
    Component: VideoPreview,
  },
  unknown: {
    label: "Unknown File",
    Component: DocumentPreview,
  },
};

export const UploadQueue = () => {
  const { uploadQueue, cancelUpload } = useContext(FileUploaderContext);
  const files = Array.from(uploadQueue);

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-4">
      {files.map((media) => {
        const { Component, label } = previewLookup[media.fileKind];
        return (
          <PreviewWrapper
            key={media.id}
            cancel={() => cancelUpload(media.id)}
            isLoading={!media.uploaded}
          >
            <Component media={media} label={label} />
          </PreviewWrapper>
        );
      })}
    </div>
  );
};
