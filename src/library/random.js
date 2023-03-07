const adjectives = ['crveni', 'zeleni', 'plavi'];
const nouns = ['leptir', 'kralj', 'auto'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounsIndex = Math.floor(Math.random() * nouns.length);
    
    return `${adjectives[adjectiveIndex]} ${nouns[nounsIndex]}`;
}