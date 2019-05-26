import React, { useContext } from 'react';
import { shape, object } from 'prop-types';
import { AppStateContext } from '../state/app-context';

export default function Message(props) {
  const { message } = props;
  const { user } = useContext(AppStateContext);

  const msgId = message.seqno.toString();
  const rawMessage = message.data.toString();
  const dataMessage = JSON.parse(rawMessage);
  const className = `message ${dataMessage.fromUser === user ? 'my-message' : 'other-message'}`;

  return (
    <li key={msgId}>
      <div className={className}>
        <p className="message__author">{dataMessage.fromUser}</p>
        <p className="message__text">{dataMessage.message}</p>
      </div>
    </li>
  );
}

Message.propTypes = {
  message: shape({
    seqno: object.isRequired,
    data: object.isRequired,
  }).isRequired,
};
