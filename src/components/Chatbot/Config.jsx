import { createChatBotMessage } from 'react-chatbot-kit';
import StarBtn from './components/StarBtn';
import data from './data';
import Avatar from './components/Avatar';
const Config = {
  initialMessages: [createChatBotMessage(`Welcome to Ecom Online Shop`, {
    
  })],
  botName: "Ecom AI",
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  state: {
    checker: null,
    data,
    userData: {
        name: "",
        age: 0,
        category: "",
        product: {
            name: "",
            link: "",
            imageUrl: ""
        }
    }
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StarBtn {...props} />,
    },
]
};

export default Config;