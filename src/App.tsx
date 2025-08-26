import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  LMClientOverlayProvider,
  LMChannel,
  initiateLMClient,
  LMChatTheme,
} from '@likeminds.community/likeminds-chat-reactjs';
import './App.css'; // Ensure App.css is imported for styling

function App() {
  // Initialize LM Chat Client
  const lmChatClient = initiateLMClient();

  // Placeholder user details - REPLACE WITH ACTUAL USER DATA
  const [userDetails] = useState<{
    apiKey?: string;
    uuid?: string;
    username?: string;
  }>({
    apiKey: "aca40392-f386-4c58-b9dd-7f59a50de207", // Replace with your actual API key
    uuid: "cb9a5516-ad4c-4ee6-be0a-e0b3b5d7f178",           // Replace with the current user's UUID
    username: "TestUser",        // Replace with the current user's username
  });

  return (
    <LMClientOverlayProvider
      client={lmChatClient}
      userDetails={userDetails}
      lmChatTheme={LMChatTheme.COMMUNITY_HYBRID_CHAT} // Use HYBRID_CHAT for WhatsApp-like experience
    >
      <Routes>
        {/* Default route to the chat application */}
        <Route path="/" element={<Navigate to="/chat" replace />} />
        {/* Main chat route */}
        <Route path="/chat" element={<LMChannel />} />
        {/* Route for specific chatrooms (optional, LMChannel handles internal navigation) */}
        <Route path="/chat/:id" element={<LMChannel />} />
        {/* Add other routes if necessary */}
      </Routes>
    </LMClientOverlayProvider>
  );
}

export default App;
