import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID="1caf71ac-3c0e-42d3-8e35-3cf5bec733d7"
      userName="Admin"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
    />
  );
}

export default App;