import * as React from 'react';
import { AppProvider, Page } from '@shopify/polaris';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <AppProvider>
        <Page title="Email Gatherer">
          <header>
            <h1>Welcome to React</h1>
          </header>
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
