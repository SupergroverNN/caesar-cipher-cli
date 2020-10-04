const { program } = require('commander');
const { validation } = require('./utils/checkParams');
const { pipeline } = require('stream');
const { streamInput, streamOutput, transformText } = require('./utils/streams');

program
    .storeOptionsAsProperties(false)
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <string>', 'an input file')
    .option('-o, --output <string>', 'an output file')
    .option('-a, --action <string>', 'an action encode/decode')
try {

    program.parse(process.argv);
    const params = program.opts();

    validation(params);

    const { input, output } = params;

    pipeline(
        streamInput(input),
        transformText(params),
        streamOutput(output),
        (err) => {
            if (err) {
                console.error('Operation aborted', err);
            } else {
                console.log('Operation successful');
            }
        }
    )

} catch (err) {
    console.log(err);
    process.exit(1)
}