const fs = require("fs");
const path = require("path");

async function getRandomFiveLetterWord () {
  let words = fs.readFileSync(path.resolve(__dirname,  "words_dictionary.json"), "utf8")
  words = JSON.parse(words)
  words = Object.keys(words)
  let fiveLetterWords = words.filter(word => word.length === 5)
  // console.log(fiveLetterWords)
  let length = fiveLetterWords.length
  let randomFiveWord = fiveLetterWords[Math.floor(Math.random()*length)]
  return randomFiveWord
};

const asyncFunc = async()=> {
  const result = await getRandomFiveLetterWord()
  console.log(result)
}
asyncFunc()

module.exports = { getFiveLetterWord: getRandomFiveLetterWord }
