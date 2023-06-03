import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage =(props) =>  {
  return (
    <div style={{ height: '100vh' }}>
    <PrettyChatWindow
      projectId="ef3b86d4-fad0-4a74-bd56-067b303eae2a"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height:'100%' }}
    />
    </div>
  );
}

export default ChatsPage