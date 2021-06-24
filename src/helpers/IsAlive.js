
export const IsAlive = (status) => {
    const {born, died}=status;
 
    if(typeof died === 'undefined' || !died) return "Unknwon";

    if(typeof born === 'undefined' || !born) return "No";

    if(!born && died) return "Yes";

    if(born && died)
    {
        const bornInNumber = extractNumberFromString(born);
        const diedInNumber = extractNumberFromString(died);

        if(!bornInNumber || !diedInNumber)
        {
            return "Unknwon";
        }

        const aliveAge = getAliveAge(bornInNumber, diedInNumber);

        return `No, died at ${aliveAge} years old`;
    }
}


const extractNumberFromString = valueString => {

    const match = valueString.match(/\d+/);

    if(match && match.length > 0)
    {
        const valueNumber = parseInt(match[0]);
        return valueNumber;
    }

    return 0;
    
}

const getAliveAge = (bornInNumber, diedInNumber) => {
    const result = parseInt(diedInNumber - bornInNumber);


    return result;
}