import React from 'react';
import {  FaRegStar, FaStar, FaEllipsisH, FaList, FaTh } from 'react-icons/fa';
import { FileItem } from '../types';
import FileIcon from './FileIcon';


interface FileExplorerProps {
  currentFolder: string;
  searchQuery: string;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ 
  currentFolder, 
  searchQuery, 
  viewMode,
  setViewMode
}) => {
  // Mock data - in a real app this would come from an API
  const mockFiles: FileItem[] = [
    {
      id: '1',
      name: 'Project Plan',
      type: 'file',
      fileType: 'docx',
      size: 15000,
      modifiedAt: new Date('2025-02-15'),
      parentFolder: 'My Files',
      starred: true
    },
    {
      id: '2',
      name: 'Budget 2025',
      type: 'file',
      fileType: 'xlsx',
      size: 8500,
      modifiedAt: new Date('2025-03-01'),
      parentFolder: 'My Files'
    },
    {
      id: '3',
      name: 'Presentation',
      type: 'file',
      fileType: 'pptx',
      size: 22000,
      modifiedAt: new Date('2025-02-28'),
      parentFolder: 'My Files'
    },
    {
      id: '4',
      name: 'Photos',
      type: 'folder',
      modifiedAt: new Date('2025-01-10'),
      parentFolder: 'My Files'
    },
    {
      id: '5',
      name: 'Documents',
      type: 'folder',
      modifiedAt: new Date('2025-03-10'),
      parentFolder: 'My Files'
    }
  ];

  // Filter files based on current folder and search query
  const filteredFiles = mockFiles.filter(file => {
    const matchesFolder = file.parentFolder === currentFolder || 
                          (currentFolder === 'Starred' && file.starred) ||
                          (currentFolder === 'Photos' && file.type === 'folder' && file.name === 'Photos');
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatSize = (bytes?: number): string => {
    if (bytes === undefined) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex justify-end mb-4">
        <div className="flex">
          <button 
            className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100 text-onedrive-blue' : 'text-gray-500'} rounded`}
            onClick={() => setViewMode('grid')}
          >
            <FaTh />
          </button>
          <button 
            className={`p-2 ${viewMode === 'list' ? 'bg-gray-100 text-onedrive-blue' : 'text-gray-500'} rounded ml-1`}
            onClick={() => setViewMode('list')}
          >
            <FaList />
          </button>
        </div>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredFiles.map(file => (
            <div key={file.id} className="bg-white rounded-lg shadow p-4 relative cursor-pointer transition transform hover:-translate-y-1 hover:shadow-md">
              <div className="absolute top-3 right-3 text-gray-300 hover:text-gray-400">
                {file.starred ? <FaStar className="text-yellow-400" /> : <FaRegStar />}
              </div>
              <div className="flex justify-center text-4xl mb-4">
                <FileIcon fileType={file.type === 'folder' ? 'folder' : file.fileType || 'unknown'} />
              </div>
              <div className="text-center">
                <div className="font-medium mb-1 break-words">{file.name}</div>
                <div className="text-xs text-gray-500">
                  {formatDate(file.modifiedAt)}
                </div>
              </div>
              <button className="absolute bottom-3 right-3 text-gray-400 hover:text-gray-600 invisible group-hover:visible">
                <FaEllipsisH />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-4 text-left"></th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Name</th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Modified</th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Size</th>
                <th className="py-3 px-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {filteredFiles.map(file => (
                <tr key={file.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-300 hover:text-gray-400">
                    {file.starred ? <FaStar className="text-yellow-400" /> : <FaRegStar />}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-xl mr-3">
                        <FileIcon fileType={file.type === 'folder' ? 'folder' : file.fileType || 'unknown'} />
                      </span>
                      <span>{file.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600 text-sm">{formatDate(file.modifiedAt)}</td>
                  <td className="py-3 px-4 text-gray-600 text-sm">
                    {file.type === 'folder' ? '' : formatSize(file.size)}
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisH />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FileExplorer;