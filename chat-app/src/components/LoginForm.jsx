import { useState } from 'react';
import axios from ' axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        const authObject = { "Project-ID": "cb3f0dee-0d92-43eb-baad-f7af7a9ce23c", "User-Name": username, "User-Secret": password };
        
        try {
            // username / password => chatengine -> will give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            
            // if it works out -> then user will be logged in
                // set the username and password -> using localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
        } catch (error) {
            // otherwise, if there's an error -> user should try with a new username...

        }

    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}