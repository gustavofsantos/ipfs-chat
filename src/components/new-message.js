import React, { useCallback, useState, useContext } from 'react';
import { AppStateContext } from '../state/app-context';

export default function NewMessage() {
  const [message, setMessage] = useState('');
  const { ipfs, topic, user } = useContext(AppStateContext);

  const handleChange = useCallback((ev) => {
    setMessage(ev.target.value);
  }, []);

  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();

    ipfs.pubsub.publish(topic, Buffer.from(JSON.stringify({
      fromUser: user,
      message,
    })));

    setMessage('');
  }, [message, ipfs, topic, user]);

  return (
    <React.Fragment>
      <form className="new-message" onSubmit={handleSubmit}>
        <input className="new-message__input" value={message} onChange={handleChange} />
        <button className="new-message__button" type="submit">send</button>
      </form>
    </React.Fragment>
  );
}
