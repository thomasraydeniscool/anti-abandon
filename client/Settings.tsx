import * as React from 'react';
import Fetch from 'isomorphic-unfetch';
import { Card, FormLayout, TextField, Button, Form } from '@shopify/polaris';

declare const window: any;

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

  public handleSubmit(event) {
    // TODO: Find way to send data to react
    // https://medium.com/@diegocasmo/using-reacts-context-to-pass-variables-from-the-server-to-the-client-f2ce5f274172
    // console.log(`${window.origin}/shop/${window.shop}`);

    // Fetch(`${env.ORIGIN}/shop/${window.shop}`);
    event.preventDefault();
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
            <Button submit primary>
              Save
            </Button>
          </FormLayout>
        </Form>
      </Card>
    );
  }
}

export default Settings;
