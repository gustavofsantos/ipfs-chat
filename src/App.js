import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JoinPage from './pages/join-page';
import ChatPage from './pages/chat-page';
import reducer, { INITIAL_STATE } from './state/app-reducer';
import { AppDispatchContext, AppStateContext } from './state/app-context';

/**
 * App main component
 * @returns {*}
 */
function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>
        <Router>
          <div className="page">
            <Route path="/" exact component={JoinPage} />
            <Route path="/chat" component={ChatPage} />
          </div>
        </Router>
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export default App;
