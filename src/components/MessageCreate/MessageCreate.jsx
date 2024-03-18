import { useState } from 'react';
import './MessageCreate.css'

const MessageCreate = ({ message, onClose }) => {
    const [text, setText] = useState('')

    const handletextAreaChange = (event) => {
        setText(event.target.value)
    }

    const handleCloseTextArea = () => {
        onClose()
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (!(text.length)) {
            alert('Enter a message')
            return;
        }
        message(text)
        setText('')
    }

    return (
        <div className='messageCreateMainDiv'>
            <div className="mainDivForm">
                <form onSubmit={handleFormSubmit}>
                    <textarea className="inputText" placeholder="Enter Your Message Here..." value={text} onChange={handletextAreaChange} />
                    <div className='closeSubmitButtonDiv'>
                        <button type='submit' className='submitButton'>Submit</button>
                        <button className='closeButton' onClick={handleCloseTextArea}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MessageCreate