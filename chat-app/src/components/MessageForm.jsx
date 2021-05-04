import { useState } from 'react';

const MessageForm = () => {

    submitHandler = () => {
        // need to work on this 
    }

    changeHandler = () => {
        // need to create this
    }

    return (
        <form className="message-form" onSubmit={submitHandler}>
            <input 
                className="message-input"
                placeholder="Send a message ..."
                value={value}
                onChange={changeHandler}
            />
        </form>
    )
}

export default MessageForm;