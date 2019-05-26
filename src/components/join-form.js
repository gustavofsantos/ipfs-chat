import React, { useState, useCallback, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppDispatchContext } from '../state/app-context';
import { actionSetTopic, actionSetUser } from '../state/state-actions';

export function JoinForm() {
  const [user, setUser] = useState('');
  const [topic, setTopic] = useState('');
  const dispatch = useContext(AppDispatchContext);

  const handleJoin = useCallback((ev) => {
    ev.preventDefault();

    dispatch(actionSetUser(user));
    dispatch(actionSetTopic(topic));
  }, [user, topic, dispatch]);

  return (
    <React.Fragment>
      <form onSubmit={handleJoin}>
        <input
          value={user}
          onChange={ev => setUser(ev.target.value)}
          placeholder="your user name"
        />
        <input
          className="mg-bottom-16"
          value={topic}
          onChange={ev => setTopic(ev.target.value)}
          placeholder="topic to subscribe"
        />
        <button type="submit">join!</button>
      </form>
    </React.Fragment>
  );
}

export default withRouter(JoinForm);
