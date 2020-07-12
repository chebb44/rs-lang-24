const initSpeechRecognition = () => {
  let SpeechRecognition = window.SpeechRecognition;
  // window.speechRecognition || window.webkitSpeechRecognition;
  if (!window.SpeechRecognition) {
    if (!window.webkitSpeechRecognition) {
      return;
    }
    SpeechRecognition = window.webkitSpeechRecognition;
  }

  const recognition = new SpeechRecognition();

  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  return recognition;
};

const recognition = initSpeechRecognition();

export default recognition;

export const startVoxRecognition = () => {
  recognition.start();
  recognition.onend = () => {
    recognition.start();
  };
};

export const stopVoxRecognition = () => {
  recognition.stop();
};
