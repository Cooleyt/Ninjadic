// telephoneWords(input, output, ... ?)
// input is a string of digits -> '83461'
// output is an array of all 'words' representable by those digits on a telephone
// keypad (following ITU E.161 standard, modified for the key 0)
// order of output does not matter
// '746024' -> ['PGM AG', 'RHO CH'...]
// all output strings should be the same length
// what does the output for '309' look like?
// ['D W', 'D X', 'D Y', 'D Z', 'E X', ...]
// 1: _,@
// 2: ABC
// 3: DEF
// 4: GHI
// 5: JKL
// 6: MNO
// 7: PQRS
// 8: TUV
// 9: WXYZ
// 0: ' ' (a space)

var phone = {
    1: '_,@',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    0: ' ',
}

function telephoneWords(input, output = [], position = 0, partial = '') {
    function telephoneWords(input, output = [], position = 0, partial = '') {
        if (position == input.length) {
            output.push(partial);
            
        }
        else {
            for(var i = 0; i < phone[input[position]].length; i++) {
    
                telephoneWords(input, output, position + 1, partial + phone[input[position]][i]);
            }
        }
    
        return output;
    }
}
    var x = telephoneWords('235')
    console.log(x)
