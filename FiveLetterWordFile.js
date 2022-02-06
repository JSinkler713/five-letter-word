const fs = require('fs')

let words;

function getRandomFiveLetterWord () {
  fs.readFile("./words_dictionary.json", "utf8", (err, jsonString) => {
    words = JSON.parse(jsonString)
    words = Object.keys(words)
    let fiveLetterWords = words.filter(word => word.length === 5)
    // console.log(fiveLetterWords)
    let length = fiveLetterWords.length
    let randomFiveWord = fiveLetterWords[Math.floor(Math.random()*length)]
    return randomFiveWord
  })
}

module.exports = { getFiveLetterWord: getRandomFiveLetterWord }

