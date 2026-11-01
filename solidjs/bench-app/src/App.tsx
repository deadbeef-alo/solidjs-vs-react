import { Title } from '@solidjs/meta';
import { Loading } from 'solid-js';
// Typed client env, validated and baked in at build time (see env.ts).
import { env } from 'virtual:solid-env/client';
import { Router } from './router';
import './App.css';
import Nav from './components/Nav';

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>{env.VITE_APP_NAME}</Title>
          <Nav />
          <Loading fallback={<main>Loading…</main>}>{props.children}</Loading>
        </>
      )}
    </Router>
  );
}
