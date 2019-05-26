import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { shape, func } from 'prop-types';
import JoinForm from '../components/join-form';
import { AppDispatchContext, AppStateContext } from '../state/app-context';
import { actionPushMessage, actionSetIpfsNode } from '../state/state-actions';

export function JoinPage(props) {
  const state = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);
  const { history } = props;

  useEffect(() => {
    if (state.user && state.topic) {
      console.log('should init ipfs');

      try {
        const ipfs = new window.Ipfs({
          EXPERIMENTAL: {
            pubsub: true,
          },
          repo: `ipfs-${Math.random()}`,
          config: {
            Addresses: {
              Swarm: ['/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star'],
            },
          },
        });

        ipfs.once('start', async () => {
          const id = await ipfs.id();

          if (id) {
            ipfs.pubsub.subscribe(state.topic, (msg) => {
              dispatch(actionPushMessage(msg));
            }, console.error);

            dispatch(actionSetIpfsNode(ipfs));

            history.push('/chat');
          }
        });
      } catch (e) {
        console.error(e);
      }
    }
  }, [state.user, state.topic, dispatch, history]);

  return (
    <div className="page__join">
      <div className="mg-bottom-32">
        <h1>Hellow</h1>
        <h4>Welcome to IPFS Chat!</h4>
      </div>

      <JoinForm />
    </div>
  );
}

JoinPage.propTypes = {
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default withRouter(JoinPage);
