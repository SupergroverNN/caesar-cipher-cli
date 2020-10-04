const fs = require('fs');
const stream = require('stream');
const { cipher } = require('./caesarCipher');

const streamInput = input => {
    if (input) {
        return fs.createReadStream(input);
    }
    console.log('enter text');
    return process.stdin;
}

const streamOutput = output => {
    if (output) {
        return fs.createWriteStream(output, { flags: 'a' })
    }
    return process.stdout;
}

const transformText = params => {
    class CaesarTransformer extends stream.Transform {
        constructor() {
            super();
            this.on('finish', () => {
                if (fs.existsSync(params.output)) {
                    fs.appendFileSync(params.output, `\n`)
                }
            });
        }
        _transform(data, encoding, callback) {
            const chunk = cipher(data, Number(params.shift), params.action);
            this.push(chunk);
            callback();
        }
    }

    return new CaesarTransformer();
};

module.exports = {
    streamInput,
    streamOutput,
    transformText
}