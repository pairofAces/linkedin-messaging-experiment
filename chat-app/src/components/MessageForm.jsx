import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
    const [value, setValue] = useState('');

    const { chatId, creds } = props;

    submitHandler = () => {
        // need to work on this 
    }

    changeHandler = (e) => {
        // need to create this
        setValue(e.target.value);

        isTyping(props, chatId);



    }

    return (
        <form className="message-form" onSubmit={submitHandler}>
            <input 
                className="message-input"
                placeholder="Send a message ..."
                value={value}
                onChange={changeHandler}
                onSubmit={submitHandler}
            />
        </form>
    )
}

export default MessageForm;