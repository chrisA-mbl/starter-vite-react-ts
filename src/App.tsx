import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

const App = ({ signOut, user }) => (
  <>
    <h1>Hello {user.username}</h1>
    <button onClick={signOut}>Sign out</button>
  </>
);

export default withAuthenticator(App);
