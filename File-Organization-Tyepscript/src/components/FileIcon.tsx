import React from 'react';
import { 
  FaFolder, 
  FaFilePdf, 
  FaFileWord, 
  FaFileExcel, 
  FaFilePowerpoint, 
  FaFileImage,
  FaFileAlt,
  FaFileVideo,
  FaFileAudio,
  FaFileCode,
  FaFileArchive
} from 'react-icons/fa';

interface FileIconProps {
  fileType: string;
}

const FileIcon: React.FC<FileIconProps> = ({ fileType }) => {
  const getIconClass = (): string => {
    switch(fileType) {
      case 'folder':
        return 'text-folder-yellow';
      case 'pdf':
        return 'text-pdf-red';
      case 'docx':
      case 'doc':
        return 'text-word-blue';
      case 'xlsx':
      case 'xls':
        return 'text-excel-green';
      case 'pptx':
      case 'ppt':
        return 'text-ppt-orange';
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'text-image-teal';
      case 'mp4':
      case 'mov':
      case 'avi':
        return 'text-video-purple';
      case 'mp3':
      case 'wav':
        return 'text-audio-blue';
      case 'js':
      case 'ts':
      case 'html':
      case 'css':
      case 'jsx':
      case 'tsx':
        return 'text-code-dark';
      case 'zip':
      case 'rar':
      case '7z':
        return 'text-archive-purple';
      default:
        return 'text-file-gray';
    }
  };

  const iconClass = getIconClass();

  switch(fileType) {
    case 'folder':
      return <FaFolder className={iconClass} />;
    case 'pdf':
      return <FaFilePdf className={iconClass} />;
    case 'docx':
    case 'doc':
      return <FaFileWord className={iconClass} />;
    case 'xlsx':
    case 'xls':
      return <FaFileExcel className={iconClass} />;
    case 'pptx':
    case 'ppt':
      return <FaFilePowerpoint className={iconClass} />;
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
      return <FaFileImage className={iconClass} />;
    case 'mp4':
    case 'mov':
    case 'avi':
      return <FaFileVideo className={iconClass} />;
    case 'mp3':
    case 'wav':
      return <FaFileAudio className={iconClass} />;
    case 'js':
    case 'ts':
    case 'html':
    case 'css':
    case 'jsx':
    case 'tsx':
      return <FaFileCode className={iconClass} />;
    case 'zip':
    case 'rar':
    case '7z':
      return <FaFileArchive className={iconClass} />;
    default:
      return <FaFileAlt className={iconClass} />;
  }
};

export default FileIcon;