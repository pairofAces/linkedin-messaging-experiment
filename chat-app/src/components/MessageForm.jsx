import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setValue] = useState('');

    const { chatId, creds } = props;

    const submitHandler = (e) => {
        // need to work on this 
        e.preventDefault();

        const text = value.trim();

        if (text.length > 0) {
            sendMessage(creds, chatId, { text });
        }

        // after sending the message, reset the value in the message bar
        // back to an empty string
        setValue('')
    }

    const changeHandler = (e) => {
        // need to create this
        setValue(e.target.value);

        isTyping(props, chatId);
    }

    const uploadHandler = (e) => {
        sendMessage(creds, chatId, { files: e.target.files, text: '' });
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

            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>

            <input 
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={uploadHandler}
            />

            <button type="submit" className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    )
}

export default MessageForm;