import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>Hey {user.username}, welcome to my channel, with auth!</p>
          <button type="button" onClick={signOut}>
            Sign out
          </button>
        </div>
      )}
    </Authenticator>
  );
};

export default App;
