import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const App = ({ signOut, user }) => (
  <>
    <h1>Hello {user.username}</h1>
    <button type="button" onClick={signOut}>
      Sign out
    </button>
  </>
);

export default withAuthenticator(App);
