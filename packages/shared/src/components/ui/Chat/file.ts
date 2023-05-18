type CommonFileExtension =
  | "jpg"
  | "jpeg"
  | "png"
  | "gif"
  | "bmp"
  | "webp"
  | "mp4"
  | "mov"
  | "avi"
  | "mkv"
  | "mp3"
  | "wav"
  | "aac"
  | "pdf"
  | "doc"
  | "docx"
  | "xls"
  | "xlsx"
  | "ppt"
  | "pptx"
  | "txt"
  | "zip"
  | "rar"
  | "7z";

function isCommonFileExtension(
  extension: string
): extension is CommonFileExtension {
  return [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "webp",
    "mp4",
    "mov",
    "avi",
    "mkv",
    "mp3",
    "wav",
    "aac",
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "txt",
    "zip",
    "rar",
    "7z",
  ].includes(extension);
}

function getFileExtension(filename: string): CommonFileExtension | null {
  const parts = filename.split(".");
  if (parts.length === 1) {
    return null; // no extension found
  }
  const extension = parts.pop()!.toLowerCase();
  if (isCommonFileExtension(extension)) {
    return extension;
  }
  return null;
}

export type FileKind =
  | "image"
  | "audio"
  | "video"
  | "document"
  | "archive"
  | "unknown";

export function getFileKind(fileName: string): FileKind {
  const extension = getFileExtension(fileName);
  switch (extension) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "bmp":
    case "webp":
      return "image";
    case "mp4":
    case "mov":
    case "avi":
    case "mkv":
      return "video";
    case "mp3":
    case "wav":
    case "aac":
      return "audio";
    case "pdf":
    case "doc":
    case "docx":
    case "xls":
    case "xlsx":
    case "ppt":
    case "pptx":
    case "txt":
      return "document";
    case "zip":
    case "rar":
    case "7z":
      return "archive";
    default:
      return "unknown";
  }
}

export function getFileKindFromObject(file: File): FileKind {
  const typeParts = file.type.split("/");
  const kind = typeParts[0];
  switch (kind) {
    case "image":
      return "image";
    case "video":
      return "video";
    case "audio":
      return "audio";
    case "application":
      const subtype = typeParts[1];
      switch (subtype) {
        case "pdf":
          return "document";
        case "vnd.openxmlformats-officedocument.wordprocessingml.document":
        case "msword":
          return "document";
        case "vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        case "vnd.ms-excel":
          return "document";
        case "vnd.openxmlformats-officedocument.presentationml.presentation":
        case "vnd.ms-powerpoint":
          return "document";
        case "zip":
          return "archive";
        default:
          return "unknown";
      }
    default:
      return "unknown";
  }
}
