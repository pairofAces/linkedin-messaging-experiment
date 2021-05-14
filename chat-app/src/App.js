import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

 const App = () => {

    // render the  ChatEngine, if the user is logged in, 
    // IF NOT, render a registration form
    if (!localStorage.getItem('username')) {
        return <LoginForm />
    }

    return (
        <ChatEngine 
            height="100vh"
            projectID="cb3f0dee-0d92-43eb-baad-f7af7a9ce23c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />

        // testing the other user
        // <ChatEngine 
        //     height="100vh"
        //     projectID="cb3f0dee-0d92-43eb-baad-f7af7a9ce23c"
        //     userName="zackzimmer"
        //     userSecret="123123"
        //     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        // />
    )
 };

 export default App;