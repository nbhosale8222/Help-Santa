import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MapMainView from '../components/MapMainView';
import SQLChatbot from '../components/SQLChatbot';
import UserProfile from '../components/UserProfile';
import LogoutButton from '../components/auth/LogoutButton';

function MapScreen() {
  const { currentLevel } = useSelector((state) => state.game);

  return (
    <>
      {/* User Profile Header - positioned below MusicControl */}
      <div className="fixed top-24 left-8 z-50 flex items-center space-x-3">
        <UserProfile />
        <LogoutButton />
      </div>
      
      <MapMainView />
      {currentLevel >= 4 && <SQLChatbot />}
    </>
  );
}

export default MapScreen;
