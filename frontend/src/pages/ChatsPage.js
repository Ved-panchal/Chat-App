import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage =(props) =>  {
  return (
    <div style={{ height: '100vh' }}>
    <PrettyChatWindow
      projectId="b1d2f79e-30cc-43fa-a028-92eaf757a865"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height:'100%' }}
    />
    </div>
  );
}

export default ChatsPage
