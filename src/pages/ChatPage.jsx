import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitFormField";




export function ChatPage(props) {
    const [formState, setFormState ] = useState('');
    const [messages, setMessages] = useState([]);

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setMessages([...messages, {
            
                id: Date.now(),
                author: {
                    username: props.username,
                    avatarIndex: props.avatarIndex,
                },
                text: formState,
            
        }]);
        setFormState('');
    }


    const messageComponents = [];

/* OVO RADI ISTU STVAR KAO I COMPONENTS2

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];

        messageComponents.push(<Message key={message.id} avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />);
    }
*/

    const messageComponents2 = messages.map((message) => {
        return <Message key={message.id} avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />;
    });

    return (
        <div>
                Chat page
            <div className="message-list">
                {messageComponents}
                {messageComponents2}
            </div>
            <form onSubmit={handleSubmit}>
                <InputFormField label="message" type="text" value={formState} onChange={handleChange} />
                <SubmitFormField  label="Send"/>
            </form>
        </div>
    );
};