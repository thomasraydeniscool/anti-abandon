import React from "react";

export class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Your email"
            className="input-group-field"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn">
            Subscribe
          </button>
        </div>
      </form>
    );
  }
}
