import "../styles/Button.css"

export function Button(props) {
    return (
        <button type={props.type} onClick={props.onClick} className="button">{props.label}</button>
    );
}