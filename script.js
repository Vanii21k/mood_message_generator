function generateMessage() {
  const mood = document.getElementById("moodSelector").value;
  const messageOutput = document.getElementById("messageOutput");

  const messages = {
    happy: "Keep spreading those good vibes! ",
    sad: "It's okay to feel down. Better days are coming! ",
    stressed: "Take a deep breath. You’ve got this! ",
    excited: "Channel that excitement into something amazing! "
  };

  // Show message or warning
  if (mood && messages[mood]) {
    messageOutput.textContent = messages[mood];
  } else {
    messageOutput.textContent = "Please select a mood!";
  }
}
