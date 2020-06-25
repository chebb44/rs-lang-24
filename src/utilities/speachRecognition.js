const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 3;

export default recognition;

export const startVoxRecognition = () => {
  recognition.start();
  recognition.onstart = () => console.log('Listening!');
  // TODO: Make and Activate microphone icon
  recognition.onend = () => {
    console.log('...continue listening...');
    recognition.start();
  };
};

export const stopVoxRecognition = () => {
  recognition.stop();
  recognition.onend = () => console.log('Stopped listening per click');
};
