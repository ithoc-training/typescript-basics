const NUMBER_ITERATIONS: number = 1000000;

function concatenation() {

    const start: Date = new Date();

    let word: string = '.';
    let fullstop: string = '.';
    for(let i = 0; i < NUMBER_ITERATIONS; i++) {
        word += fullstop; // string concatenation
    }

    const end: Date = new Date();

    const durationInSeconds = (end.getTime() - start.getTime()) / 1000;
    console.log('TypeScript Concate Duration:', durationInSeconds, 's');
}

function substitution() {

    const start: Date = new Date();

    let word: string = '.';
    let fullstop: string = '.';
    for(let i = 0; i < NUMBER_ITERATIONS; i++) {
        word = `${word}${fullstop}`; // string substitution
    }

    const end: Date = new Date();

    const durationInSeconds = (end.getTime() - start.getTime()) / 1000;
    console.log('TypeScript Substitute Duration:', durationInSeconds, 's');
}

concatenation();
substitution();
