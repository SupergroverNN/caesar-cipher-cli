const fs = require('fs');

const actionType = ['encode', 'decode'];

const validation = params => {
    const { action, shift, input, output } = params;

    if (!action) {
        process.stderr.write('Error: -action is required');
        process.exit(1);
    }
    if (action && !actionType.includes(action)) {
        process.stderr.write('Error: please enter valid -action (encode / decode)')
        process.exit(1);
    }
    if (!shift) {
        process.stderr.write('Error: -shift is required');
        process.exit(1);
    }
    if (shift && (isNaN(shift) || shift < 0)) {
        process.stderr.write('Error: -shift value must be a positive numeric');
        process.exit(1);
    }
    if (input && !fs.existsSync(input)) {
        process.stderr.write(`Error: file '${input}' doesn't exist`);
        process.exit(1);
    }
    if (output && !fs.existsSync(output)) {
        process.stderr.write(`Error: file '${output}' doesn't exist`);
        process.exit(1);
    }
    return false;
}
module.exports = {
    validation
}