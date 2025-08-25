import { useState } from "react";
import {
  LMClientOverlayProvider,
  LMChannel,
  initiateLMClient,
  LMChatTheme,
} from "@likeminds.community/likeminds-chat-reactjs";
import "./App.css"; // Ensure this import is present for custom styles

// Initialize the LikeMinds Chat Client outside the component to avoid re-initialization
const lmChatClient = initiateLMClient();

function ChatApp() {
  // Replace with your actual API Key, UUID, and Username
  // For production, consider fetching these securely from your backend
  const [userDetails] = useState<{
    apiKey?: string;
    uuid?: string;
    username?: string;
  }>(
    {
      apiKey: "aca40392-f386-4c58-b9dd-7f59a50de207", // <<< IMPORTANT: Replace with your actual API Key
      uuid: "16d8bc72-6b1a-4773-9832-3237e1ca5597", // <<< IMPORTANT: Replace with your actual User UUID
      username: "TestUser", // <<< IMPORTANT: Replace with your actual Username
    }
  );

  return (
    <div className="lm-chat-container">
      <LMClientOverlayProvider
        client={lmChatClient}
        userDetails={userDetails}
        lmChatTheme={LMChatTheme.COMMUNITY_HYBRID_CHAT} // Using hybrid theme for both group and DMs
      >
        <LMChannel />
      </LMClientOverlayProvider>
    </div>
  );
}

export default ChatApp;
