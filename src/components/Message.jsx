import { avatarImages } from "../library/avatar";

export function Message(props) {
    return (
        <div className="message">
            <img src={avatarImages[props.avatarIndex]} alt={props.author} width={50} height={50}/>
            <div className="message-author">{props.author}</div>
            <div className="message-text">{props.text}</div>
        </div>
    );
}