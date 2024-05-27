import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const findAction = () => {
    const message = createChatBotMessage('Please tell me your name to start');
    updateState(message, "find")
  }

  const afterNameMessage = () => {
    const message = createChatBotMessage("Let me know your age so I can suggest product for you.")
    updateState(message, "preference")
  }

  const afterAgeMessage = () => {
    const message = createChatBotMessage("Which type of category do you want", {
        
    })
    updateState(message)
}

  const greetingAction = () => {
    const message = createChatBotMessage('Hi, What can i help you');
    updateState(message)
  }

  const paymentAction = () => {
    const message = createChatBotMessage('We have 3 payment method : COD, Paypal and VNPay');
    updateState(message)
  }

  const infoAction = () => {
    const message = createChatBotMessage('We are student of HCMUTE');
    updateState(message)
  }

  const updateState = (message, checker) => {
    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
        checker,
    }))
}

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            findAction,
            paymentAction,
            infoAction,
            greetingAction,
            afterNameMessage,
            afterAgeMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;