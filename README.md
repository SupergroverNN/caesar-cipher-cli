## Caesar cipher CLI tool
---
#### How to use
1. Clone this repo
2. Select project folder, e.g. cd caesar-cipher-cli/caesar-cipher
3. Run ```npm install```

#### How to use it?
The utility has the following parameters to run:

1. **-s**, **--shift** < number >: number of characters to shift (**required***)
2. **-i**, **--input** < string >: path to the input file (**optional**. If the parameter is not used, the text is entered via the command line)
3. **-o**, **--output** < string >: an output file (**optional**. If the parameter is not used, the text is output via the command line)
4. **-a**, **--action** < string >: an action encode/decode (**required***. Type of operation. "encode" and "decode" available)

##### To run the program write:
```node index.js <options> ```

##### Usage example:
```node index.js -a encode -s 3 -i "./input.txt" -o "./output.txt"```
> input.txt 
> Hello! im test secret file!1234

> output.txt 
> Ebiil! fj qbpq pbzobq cfib!1234

```node index.js -a encode -s 5```
> abc!  *// input value*
> fgh!  *// output value*