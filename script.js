const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const words = document.getElementById("words");
const sentences = document.getElementById("sentences");
const paragraphs = document.getElementById("paragraphs");
const output = document.getElementById("output");

generateBtn.addEventListener("click", function () {
  let text = "";
  for (let i = 0; i < paragraphs.value; i++) {
    for (let j = 0; j < sentences.value; j++) {
      for (let k = 0; k < words.value; k++) {
        text += randomWord() + " ";
      }
      text = text.trim() + ". ";
    }
    text += "\n";
  }
  output.value = text;
});

copyBtn.addEventListener("click", function () {
  output.select();
  document.execCommand("copy");
});

function randomWord() {
  // Put your own list of words here
  const wordsList = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet,",
    "consectetur",
    "adipiscing",
    "elit,",
    "sed",
    "do",
  ];
  return wordsList[Math.floor(Math.random() * wordsList.length)];
}
