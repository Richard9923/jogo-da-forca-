let wordsOptions = ["controle", "tv", "teclado", "refrigerante"];
let randomNumber = Math.floor(Math.random() * wordsOptions.length);
let randomWord = wordsOptions[randomNumber];
console.log(randomWord);

display = [];

for (item = 0; item < randomWord.length; item++) {
  display.push("_");
}

let letrasTentadas = [];
let vidas = 6;
let gameOn = true;

console.log(`Palavra secreta: ${display}`);
console.log(`Seu número de vidas: ${vidas}`);
while (gameOn == true) {
  playerChoice = prompt("Tente adivinhar uma letra da palavra secreta.");

  if (display.includes(playerChoice) || letrasTentadas.includes(playerChoice)) {
    console.log("Você já tentou essa letra.");
  }
  letrasTentadas.push(playerChoice);

  for (choice = 0; choice < randomWord.length; choice++) {
    let letter = randomWord[choice];
    if (playerChoice == letter) {
      display[choice] = letter;
    }
  }
  if (!display.includes(playerChoice)) {
    console.log("Você não acertou a letra.");
    vidas -= 1;
  }
  console.log(`Seu número de vidas: ${vidas}`);
  console.log(`Palavra secreta: ${display}`);

  if (!display.includes("_")) {
    console.log(`Parabéns! Você acertou a palavra secreta: ${randomWord}.`);
    gameOn = false;
  } else if (vidas == 0) {
    console.log(`Infelizmente você perdeu, você ficou sem vidas.`);
    console.log(`Palavra secreta: ${randomWord}.`);
    gameOn = false;
  }
}
