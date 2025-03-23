import React from 'react';
import { FaHome, FaRegStar, FaRegImages, FaShare, FaTrash, FaPlus } from 'react-icons/fa';

interface SidebarProps {
  currentFolder: string;
  setCurrentFolder: (folder: string) => void;
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ currentFolder, setCurrentFolder, collapsed }) => {
  const folders = [
    { name: 'My Files', icon: <FaHome /> },
    { name: 'Starred', icon: <FaRegStar /> },
    { name: 'Photos', icon: <FaRegImages /> },
    { name: 'Shared', icon: <FaShare /> },
    { name: 'Recycle Bin', icon: <FaTrash /> },
  ];

  return (
    <div 
      className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-pale-blue border-r border-sky-blue p-4 flex flex-col h-full transition-all duration-300 ease-in-out`}
    >
      <button className={`
        flex items-center bg-onedrive-blue text-white rounded py-2 
        ${collapsed ? 'px-3 justify-center' : 'px-6 justify-start'} 
        text-sm font-semibold mb-6 transition-all duration-300
      `}>
        <FaPlus className={collapsed ? '' : 'mr-2'} />
        {!collapsed && <span>New</span>}
      </button>
      
      <ul className="space-y-1">
        {folders.map((folder) => (
          <li 
            key={folder.name}
            className={`
              flex items-center py-3 
              ${collapsed ? 'px-0 justify-center' : 'px-2 justify-start'} 
              rounded cursor-pointer transition-all duration-200
              ${currentFolder === folder.name 
                ? 'bg-sky-blue text-onedrive-blue' 
                : 'text-gray-600 hover:bg-sky-blue hover:bg-opacity-50'}
            `}
            onClick={() => setCurrentFolder(folder.name)}
            title={collapsed ? folder.name : ''}
          >
            <span className={collapsed ? '' : 'mr-3'}>{folder.icon}</span>
            {!collapsed && <span>{folder.name}</span>}
          </li>
        ))}
      </ul>
      
      {!collapsed && (
        <div className="mt-auto pt-6">
          <div className="text-xs text-gray-500 mb-2">
            <span>10.5 GB of 15 GB used</span>
          </div>
          <div className="h-1 bg-white rounded-full overflow-hidden">
            <div className="h-full bg-onedrive-blue w-2/3"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;