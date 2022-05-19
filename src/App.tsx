import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = ({ signOut, user }) => (
  <>
    <h1>Hello {user.username}</h1>
    <button onClick={signOut}>Sign out</button>
  </>
);

export default withAuthenticator(App);
