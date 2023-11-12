const axios = require("axios");

function sendMessage() {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();

  //This check is here to make sure it only runs during business hours.
  if (dayOfWeek === 0 || dayOfWeek === 6 || hour < 9 || hour >= 17) {
    return;
  }

  const message = {
    content: "Check Your Posture"
  };
  axios.post(" Put your discord Webhook Url Here", message)
  .then(response => {
    console.log(`Message sent at ${date.toLocaleString()}`);
  })
  .catch(error => {
    console.error(`Error sending message at ${date.toLocaleString()}: ${error.message}`);
  });
}

// Set the interval to every 3 hours
setInterval(sendMessage, 3 * 60 * 60 * 1000);
