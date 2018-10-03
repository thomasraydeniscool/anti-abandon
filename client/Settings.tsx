import * as React from 'react';
import { Card, FormLayout, TextField, Button, Form } from '@shopify/polaris';

class Settings extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Pick a card',
      subHeader: '',
      button: 'Subscribe'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(value, id) {
    this.setState(prevState => ({ ...prevState, [id]: value }));
  }

  public render() {
    return (
      <Card title="Settings" sectioned>
        <Form onSubmit={null}>
          <FormLayout>
            <TextField
              id="header"
              label="Header text"
              value={this.state.header}
              onChange={this.handleChange}
            />
            <TextField
              id="subHeader"
              label="Sub header text"
              value={this.state.subHeader}
              onChange={this.handleChange}
            />
            <TextField
              id="button"
              label="Button text"
              value={this.state.button}
              onChange={this.handleChange}
            />
            <Button primary>Save</Button>
          </FormLayout>
        </Form>
      </Card>
    );
  }
}

export default Settings;
