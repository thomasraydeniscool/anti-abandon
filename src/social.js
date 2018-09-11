import React from "react";

export class Social extends React.Component {
  componentDidMount() {
    this.initFB();
  }

  initFB() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: "458134064692844",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.1"
      });
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    return (
      <div>
        <div
          className="fb-like"
          data-href="https://www.facebook.com/incendre"
          data-layout="box_count"
          data-action="like"
          data-size="large"
          data-show-faces="true"
          data-share="false"
        />
      </div>
    );
  }
}
