import { useState } from 'react';
import {
  LMClientOverlayProvider,
  LMChannel,
  initiateLMClient,
  LMChatTheme,
} from '@likeminds.community/likeminds-chat-reactjs';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [userDetails] = useState<{
    apiKey?: string;
    uuid?: string;
    username?: string;
  }>({
    apiKey: 'aca40392-f386-4c58-b9dd-7f59a50de207',
    uuid: '81f15acc-e32b-42a7-9f6c-6f1a21260f03',
    username: 'TestUser',
  });

  const lmChatClient = initiateLMClient();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LMClientOverlayProvider
            client={lmChatClient}
            userDetails={userDetails}
            lmChatTheme={LMChatTheme.COMMUNITY_HYBRID_CHAT}
          >
            <LMChannel />
          </LMClientOverlayProvider>
        }
      />
    </Routes>
  );
}

export default App;
