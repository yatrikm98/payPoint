import { useState } from "react";
import './MessageEdit.css'


const MessageEdit = ({ message,onSubmitEdit }) => {
    const [editMessage, setEditMessage] = useState(message.title)
    const handleEditChange = (event) => {
        setEditMessage(event.target.value)
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onSubmitEdit({id:message.id,title:editMessage})
    }

    return (
        <div className="editMainDiv">
            <form onSubmit={handleFormSubmit}>
                <textarea value={editMessage} onChange={handleEditChange} className="editTextArea" />
                <div className="updateButton"><button type="submit" >Update</button></div>
            </form>
        </div>
    )
}

export default MessageEdit;