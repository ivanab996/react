export function InputFormField(props) {
    function handleChange(event) {
        props.onChange(event.target.value);
    }
    return (
        <div className="input-form-filed">
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} type={props.type} onChange={handleChange} />
    </div>
    );
};