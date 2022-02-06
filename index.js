const fs = require('fs')

async function getRandomFiveLetterWord () {
  let words = await fs.readFileSync("./words_dictionary.json", "utf8")
  words = JSON.parse(words)
  words = Object.keys(words)
  let fiveLetterWords = words.filter(word => word.length === 5)
  // console.log(fiveLetterWords)
  let length = fiveLetterWords.length
  let randomFiveWord = fiveLetterWords[Math.floor(Math.random()*length)]
  return randomFiveWord

}


module.exports = { getFiveLetterWord: getRandomFiveLetterWord }
