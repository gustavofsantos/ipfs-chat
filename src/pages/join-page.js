import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { shape, func } from "prop-types";
import JoinForm from "../components/join-form";
import { AppDispatchContext, AppStateContext } from "../state/app-context";
import { actionPushMessage, actionSetIpfsNode } from "../state/state-actions";

export function JoinPage(props) {
  const state = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);
  const { history } = props;

  useEffect(() => {
    if (state.user && state.topic) {
      window.Ipfs.create({
        EXPERIMENTAL: {
          pubsub: true,
        },
        repo: `ipfs-${Math.random()}`,
      })
        .then((ipfs) => {
          dispatch(actionSetIpfsNode(ipfs));
          return ipfs;
        })
        .then((ipfs) => {
          return ipfs.pubsub.subscribe(state.topic, (msg) => {
            dispatch(actionPushMessage(msg));
          });
        })
        .then(() => {
          history.push("/chat");
        });
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
