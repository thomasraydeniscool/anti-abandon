import * as React from 'react';
import { AppProvider, Layout, Page } from '@shopify/polaris';
import Settings from './Settings';
import Preview from './Preview';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <AppProvider>
        <Page title="Email Gatherer">
          <Layout>
            <Layout.Section>
              <Preview />
            </Layout.Section>
            <Layout.Section>
              <Settings />
            </Layout.Section>
          </Layout>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
