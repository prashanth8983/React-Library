import React from 'react';
import { FaSearch, FaUser, FaQuestionCircle, FaCog, FaBars } from 'react-icons/fa';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentFolder: string;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  currentFolder,
  sidebarCollapsed,
  setSidebarCollapsed
}) => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 h-16">
      <div className="flex items-center">
        <button 
          className="p-2 mr-4 text-gray-600 hover:text-onedrive-blue focus:outline-none"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        >
          <FaBars />
        </button>
        <h1 className="text-xl font-semibold text-onedrive-blue mr-8">OneDrive Clone</h1>
        <div className="text-sm text-gray-600">
          {currentFolder}
        </div>
      </div>
      
      <div className="flex items-center bg-gray-100 rounded py-2 px-4 w-2/5 max-w-md">
        <FaSearch className="text-gray-500 mr-2" />
        <input 
          type="text"
          placeholder="Search everything"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent border-none outline-none w-full text-sm"
        />
      </div>
      
      <div className="flex items-center">
        <button className="p-2 text-gray-600 hover:text-gray-800">
          <FaQuestionCircle />
        </button>
        <button className="p-2 ml-4 text-gray-600 hover:text-gray-800">
          <FaCog />
        </button>
        <button className="ml-4 w-8 h-8 bg-onedrive-blue text-white rounded-full flex items-center justify-center">
          <FaUser />
        </button>
      </div>
    </header>
  );
};

export default Header;