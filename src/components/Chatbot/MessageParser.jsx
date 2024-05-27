import React from 'react';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;
  const parse = (message) => {
    if (checker != "" && checker === "find") {
      actions.afterNameMessage();
      children.props.state.userData.name = message;
      return;
    }
    if (checker === "preference" && Number(message)) {
      actions.afterAgeMessage();
      children.props.state.userData.age = message;
      if (message <= 10) {
          children.props.state.userData.category = "kid";
      } else if (message > 10 && message <= 20) {
          children.props.state.userData.category = "teenagers";
      } else {
          children.props.state.userData.category = "adults";
      }
      return;
    }
    if (message.includes('payment')) {
      actions.paymentAction();
      return;
    }
    else if (message.includes('about') || message.includes("info")){
      actions.infoAction();
      return;
    }
    else if (message.includes('hi') || message.includes("hello")){
      actions.greetingAction();
      return;
    }
    else if (message.includes('suggest') || message.includes("product") || message.includes('find') ){
      actions.findAction();
      return;
    }
    else{
      actions.greetingAction();
      return;
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;