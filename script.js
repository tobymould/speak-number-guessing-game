const msgEl = document.getElementById('msg');
const start = document.querySelector('#start-button');
// const stop = document.querySelector('#stop-button');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

const startListening = () => {
  recognition.start();
};

// const stopListening = () => {
//   recognition.stop();
// };

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
start.addEventListener('click', startListening);
// stop.addEventListener('click', stopListening);
