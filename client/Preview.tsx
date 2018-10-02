import * as React from 'react';
import { Card } from '@shopify/polaris';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Card title="Preview" sectioned>
        <p>View a summary of your online store’s performance.</p>
      </Card>
    );
  }
}

export default Preview;
