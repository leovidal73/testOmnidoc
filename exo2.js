// 'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'

// '...'  -> ['eee', 'ie', 'ei', 's']

const mapABCMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'
}
const reverseMap = {}

Object.entries(mapABCMorse).map(e => {
    reverseMap[e[1]] = e[0]
})

function getAllWords(morse, res, finalRes) {
    if (morse === '') {
        return finalRes
    } else {
        for (var i=1; i<5; i++) {
            if (morse.size >= i) {
                if (reverseMap[morse.slice(0, i)]) {
                    res.push(reverseMap[morse.slice(0, i)])
                    getAllWords(morse.slice(i), res, finalRes)
                    console.log(res)
                    finalRes.push(res.join(''))
                }
            }
        }
    }
}

console.log(getAllWords('...', [], []))
