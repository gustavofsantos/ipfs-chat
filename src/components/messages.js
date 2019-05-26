import React, { useEffect, useContext } from 'react';
import { AppStateContext } from '../state/app-context';

export default function Messages() {
  const { messages } = useContext(AppStateContext);

  useEffect(() => {
    console.log('new message! ', messages);
  }, [messages]);

  return (
    <React.Fragment>
      <ul className="messages">
        {messages.map((message) => {
          const msgId = message.seqno.toString();
          const rawMessage = message.data.toString();

          const dataMessage = JSON.parse(rawMessage);

          return (
            <li key={msgId}>
              <div className="message">
                <p className="message__author">{dataMessage.fromUser}</p>
                <p className="message__text">{dataMessage.message}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
