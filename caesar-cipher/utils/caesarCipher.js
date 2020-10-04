const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const length = arr_en.length - 1;

const cipher = (data, shift, operation) => {
    const stringData = data.toString().split('');
    const result = [];
    const offset = shift % length;
    stringData.forEach(letter => {
        let targetArr;
        if (arr_en.includes(letter)) {
            targetArr = arr_en;
        } else if (arr_EN.includes(letter)) {
            targetArr = arr_EN;
        }
        if (targetArr) {
            const index = targetArr.indexOf(letter);
            let newIndex;
            if (operation === 'encode') {
                newIndex = index + offset > length ? (index + offset) % 26 : index + offset;
            } else {
                newIndex = index - offset < 0 ? length + (index - offset) + 1 : index - offset;
            }
            result.push(targetArr[newIndex]);
        } else {
            result.push(letter)
        }
    })
    return result.join('');
}

module.exports = { cipher }

