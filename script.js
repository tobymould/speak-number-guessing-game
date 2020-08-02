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
  msgEl.innerHTML = `<div>you guessed: </div> <span class="box"> ${msg} </span`;
  return;
};

// generate random number
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const randomNum = getRandomNumber();
console.log('Number:', randomNum);

const checkNumber = msg => {
  if (Number.isNaN(msg)) {
    msgEl.innerHTML = `<div>Your guess was not a number. Please try again.</div>`;
  } else if (randomNum === msg) {
    msgEl.innerHTML = `<div>yaay, you guessed correctly =D</div>`;
  } else if (randomNum < msg) {
    msgEl.innerHTML = `<div>TOO HIGH</div>`;
  } else if (randomNum > msg) {
    msgEl.innerHTML = `<div>TOO LOW</div>`;
  }

  const toleranceValue = Math.abs(randomNum - msg);
  console.log(msg);
  console.log(toleranceValue);
  if (msg > 100 || msg < 1) {
    msgEl.innerHTML += `<div>You need to guess a number between 1 - 100 only</div>`;
  } else if (toleranceValue >= 60 && toleranceValue < 100) {
    msgEl.innerHTML += `<div>you are guessing on the complete opposite end of the range. Try again :)</div>`;
  } else if (toleranceValue >= 40 && toleranceValue < 60) {
    msgEl.innerHTML += `<div>You are frozen cold you're so far</div>`;
  } else if (toleranceValue >= 20 && toleranceValue < 40) {
    msgEl.innerHTML += `<div>You are cold</div>`;
  } else if (toleranceValue >= 10 && toleranceValue < 20) {
    msgEl.innerHTML += `<div>You are warm</div>`;
  } else if (toleranceValue >= 5 && toleranceValue < 10) {
    msgEl.innerHTML += `<div>You are hot!</div>`;
  } else if (toleranceValue >= 3 && toleranceValue < 5) {
    msgEl.innerHTML += `<div>You are boiling you're sooooo close!!</div>`;
  } else if (toleranceValue >= 1 && toleranceValue < 3) {
    msgEl.innerHTML += `<div>You couldn't be closer if you tried!</div>`;
  }
  return;
};

// speak result:
recognition.addEventListener('result', onSpeak);
start.addEventListener('click', startListening);
// stop.addEventListener('click', stopListening);
