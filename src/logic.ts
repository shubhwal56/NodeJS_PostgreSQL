// a -> create api using predefined function
export function splitString(text: string): string {
    return text.replace('_', ' ');
}

// b->  Get two parameters from path(route) and concatenate them into one
export function concatenateParams(param1: string, param2: string): string {
    return param1 + param2;
}

// c-> Leap Year
export function isLeapYear(year: number): string {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not Leap Year";
    }
}

// d-> Handshake
export function secretHandshake(number: number): string[] {
    const binaryString = number.toString(2);
    const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
    const handshake = [];
    for (let i = binaryString.length - 1; i >= 0; i--) {
        if (binaryString[i] === '1') {
            handshake.push(actions[binaryString.length - 1 - i]);
        }
    }
    if (binaryString.length === 5 && binaryString[0] === '1') {
        handshake.reverse();
    }
    return handshake;
}

