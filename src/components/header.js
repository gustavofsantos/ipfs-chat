import React, { useContext } from 'react';
import { AppStateContext } from '../state/app-context';

export default function Header() {
  const { user, topic } = useContext(AppStateContext);

  return (
    <header className="header">
      <p>
        {user}
        {' '}
@
        {' '}
        {topic}
      </p>
    </header>
  );
}
