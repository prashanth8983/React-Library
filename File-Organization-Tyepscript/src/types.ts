// File: src/types.ts
export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  fileType?: string; // e.g., 'pdf', 'docx', 'jpg'
  size?: number;
  modifiedAt: Date;
  parentFolder: string;
  starred?: boolean;
  sharedWith?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}