const adjectives = ['crveni', 'zeleni', 'plavi'];
const nouns = ['leptir', 'kralj', 'auto'];

function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounsIndex = Math.floor(Math.random() * nouns.length);
    
    return `${adjectives[adjectiveIndex]} ${nouns[nounsIndex]}`;
}

export function RandomNameButton(props) {
    function handleClick(){
        props.onRandomName(getRandomName());
    }
    return (
        <button type="button" onClick={handleClick}>Generate username</button>
    );
}