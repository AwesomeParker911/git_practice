function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
};

const fortuneteller = {
    sign: ['heart', 'treasure', 'crown', 'joker', 'flower'],
    fortune: ['good luck', 'no luck', 'bad luck'],
    action: ['go out to eat', 'stay home', 'watch a movie', 'go to a bar', 'chat with your family', 'doing nothing'],
};

let message = [];

const generateMessage = function() {
    for (let key in fortuneteller) {
        let keyvalueIndex = generateRandomNumber(fortuneteller[key].length);
        if (key === 'sign') {
            message.push(`Your sign for today is ${fortuneteller[key][keyvalueIndex]}`)
        } if (key === 'fortune') {
            message.push(`You are having ${fortuneteller[key][keyvalueIndex]}`)
        } if (key === 'action') {
            message.push(`You should ${fortuneteller[key][keyvalueIndex]}`)
        } 
    };
};

generateMessage();
console.log(message);
