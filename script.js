const msgEl = document.getElementById('msg');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

const onSpeak = e => {
  console.log(e);

  const msg = parseInt(event.results[0][0].transcript);
  writeMessage(msg);
  checkNumber(msg);
};

const writeMessage = msg => {
  console.log('you guessed: ', msg);
  return;
};

// generate random number
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const randomNum = getRandomNumber();
console.log('Number:', randomNum);

const checkNumber = msg => {
  if (randomNum === msg) {
    console.log('yaay', randomNum, msg);
  }
};

// speak result:
recognition.addEventListener('result', onSpeak);
