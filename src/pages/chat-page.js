import React, { useEffect, useContext } from 'react';
import { shape, func } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Header from '../components/header';
import Messages from '../components/messages';
import NewMessage from '../components/new-message';
import { AppStateContext } from '../state/app-context';

export function ChatPage(props) {
  const { ipfs } = useContext(AppStateContext);
  const { history } = props;

  useEffect(() => {
    if (!ipfs) {
      history.push('/');
    }
  }, [history, ipfs]);

  return (
    <div className="page__chat">
      <Header />
      <Messages />
      <NewMessage />
    </div>
  );
}

ChatPage.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default withRouter(ChatPage);
