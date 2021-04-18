 import { ChatEngine } from 'react-chat-engine';
 import './App.css';
 import ChatFeed from './components/ChatFeed';

 const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="cb3f0dee-0d92-43eb-baad-f7af7a9ce23c"
            userName="chatTest"
            userSecret="123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
 };

 export default App;