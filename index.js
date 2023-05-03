const fs = require("fs");

const input_file = fs.readFileSync("file.txt", "utf-8").trim().split(/\r?\n/);

const orderInput = (input) => {
    return input.sort((a,b) => {
    const [aFletter, aNumbers, aLletter]    =     [a[0], parseInt(a.substring(1, a.length - 1)), a[a.length - 1]];
    const [bFletter, bNumbers, bLletter]    =     [b[0], parseInt(b.substring(1, b.length - 1)), b[b.length - 1]];
        if (aFletter < bFletter ) {
            return -1;
        } else if (aFletter > bFletter ) {
            return 1 ;
        }
        if (aLletter < bLletter ) {
            return -1;
        } else if (aFletter > bFletter ) {
            return 1 ;
        }
        if (aNumbers < bNumbers) {
            return -1;
        }else if (aNumbers > bNumbers) {
            return 1 ;
        }else {
            return 0 ;
        }

    });
};
let result = orderInput(input_file).join("\n");

fs.writeFileSync("output_file.txt", result);

