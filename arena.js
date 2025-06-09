const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = (event) => {
  document.getElementById("userInput").value = event.results[0][0].transcript;
  handleUserInput();
};
