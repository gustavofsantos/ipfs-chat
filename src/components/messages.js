import React, { useContext } from 'react';
import { AppStateContext } from '../state/app-context';
import Message from './message';

export default function Messages() {
  const { messages } = useContext(AppStateContext);

  return (
    <React.Fragment>
      <ul className="messages">
        {messages.map(message => <Message message={message} />)}
      </ul>
    </React.Fragment>
  );
}
