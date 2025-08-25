import { useState } from 'react';
import {
  LMClientOverlayProvider,
  LMChannel,
  initiateLMClient,
  LMChatTheme,
} from '@likeminds.community/likeminds-chat-reactjs';
import './App.css'; // Keep this import for component-specific styles
import { Routes, Route } from 'react-router-dom';

function App() {
  // IMPORTANT: Replace these placeholder values with your actual LikeMinds API Key, UUID, and Username.
  // You can obtain these from your LikeMinds dashboard.
  const [userDetails, setUserDetails] = useState<{
    apiKey?: string;
    uuid?: string;
    username?: string;
  }>({
    apiKey: 'aca40392-f386-4c58-b9dd-7f59a50de207', // e.g., "lm_1234567890abcdef"
    uuid: 'acfc57ff-5f52-4b0e-983a-7c692bedd6a9',   // e.g., "user_12345"
    username: 'TestUser', // e.g., "John Doe"
  });

  // Initialize the LikeMinds Chat Client
  const lmChatClient = initiateLMClient();

  return (
    <div className="lm-chat-app-container">
      <LMClientOverlayProvider
        client={lmChatClient}
        userDetails={userDetails}
        lmChatTheme={LMChatTheme.COMMUNITY_HYBRID_CHAT} // Using hybrid theme for both group and DMs
      >
        <Routes>
          {/* Set the LMChannel component as the default route */}
          <Route path="/" element={<LMChannel />} />
          {/* Add other application routes here if needed */}
        </Routes>
      </LMClientOverlayProvider>
    </div>
  );
}

export default App;
