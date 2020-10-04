const fs = require('fs');

const actionType = ['encode', 'decode'];

const validation = params => {
    const { action, shift, input, output } = params;

    if (!action) {
        console.log('Error: -action is required');
        process.exit(1);
    }
    if (action && !actionType.includes(action)) {
        console.log('Error: please enter valid -action (encode / decode)')
        process.exit(1);
    }
    if (!shift) {
        console.log('Error: -shift is required');
        process.exit(1);
    }
    if (shift && (isNaN(shift) || shift < 0)) {
        console.log('Error: -shift value must be a positive numeric');
        process.exit(1);
    }
    if (input && !fs.existsSync(input)) {
        console.log(`Error: File ${input} doesn't exist`);
        process.exit(1);
    }
    if (output && !fs.existsSync(output)) {
        console.log(`Error: File ${output} doesn't exist`);
        process.exit(1);
    }
    return false;
}
module.exports = {
    validation
}