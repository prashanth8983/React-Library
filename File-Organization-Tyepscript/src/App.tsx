import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import FileExplorer from './components/FileExplore';


const App: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState<string>('My Files');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentFolder={currentFolder}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <div className="flex flex-1">
        <Sidebar 
          currentFolder={currentFolder}
          setCurrentFolder={setCurrentFolder}
          collapsed={sidebarCollapsed}
        />
        <FileExplorer 
          currentFolder={currentFolder}
          searchQuery={searchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>
    </div>
  );
}

export default App;