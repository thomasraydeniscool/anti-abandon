import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { SubscribeForm } from './subscribe';

const Wrapper = styled.div`
  display: block;
  overflow-x: visible;
  overflow-y: auto;
  z-index: 999999999;
  opacity: 1;
  visibility: visible;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  display: -ms-flexbox;
  justify-content: center;
  align-items: center;
`;

const PopupBackground = styled.div`
  visibility: visible;
  background-color: #000;
  -ms-filter: 'alpha(opacity=70)';
  filter: alpha(opacity=70);
  -moz-opacity: 0.7;
  -khtml-opacity: 0.7;
  opacity: 0.7;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1980000;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Popup = styled.div`
  border: 1px solid;
  border-color: #aaaaaa;
  padding: 30px;
  width: 500px
  box-sizing: border-box;
  position: relative;
  z-index: 99999999;
  background: #ffffff;
  text-align: center;
`;

const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 15px;
  height: 15px;
  border: 0;
  padding: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  background: url(assets/x.svg);
  background-size: 15px;
  text-indent: -9999px;
`;

const Section = styled.div`
  padding: 0;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <Popup>
          <Close type="button" />
          <Title className="section-header__title section-header__title-spacing">
            Want a sweet discount?
          </Title>
          <Section>
            <p>Just subscribe to our email list</p>
            <SubscribeForm />
          </Section>
        </Popup>
      </Container>
      <PopupBackground />
    </Wrapper>
  );
}

const root = document.createElement('div');

root.setAttribute('id', 'root');

document.body.appendChild(root);

ReactDOM.render(<App />, document.getElementById('root'));
