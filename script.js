let intervalId = null; // To track the interval ID

document.getElementById('nameInput').addEventListener('input', function () {
  const name = this.value.trim().toLowerCase(); // Convert name to lowercase for case-insensitive comparison
  const message = document.getElementById('message');

  // Clear existing emojis and message if input is empty
  if (name === "") {
    message.textContent = "";
    clearKisses();
    return;
  }

  if (name === "manoj") {
    message.textContent = "Hi Manoj! Here come your 100 kisses!";
    clearInterval(intervalId); // Clear any existing interval
    startPoppingKisses();
  } else {
    message.textContent = "Sorry, this is only for Manoj!";
    clearKisses(); // Clear any existing emojis
    clearInterval(intervalId); // Clear any existing interval
  }
});

function startPoppingKisses() {
  let count = 0;
  const totalKisses = 100;

  intervalId = setInterval(() => {
    if (count < totalKisses) {
      createKiss();
      count++;
    } else {
      clearInterval(intervalId); // Stop after 100 kisses
    }
  }, 100); // Time between each kiss pop
}

function createKiss() {
  const kiss = document.createElement('span');
  kiss.textContent = "😘";
  kiss.className = 'kiss';

  // Set random position
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  kiss.style.left = `${x}px`;
  kiss.style.top = `${y}px`;

  // Add to body
  document.body.appendChild(kiss);

  // Remove kiss after animation
  setTimeout(() => {
    kiss.remove();
  }, 9000); // Adjust time to match animation duration

}

// function clearKisses() {
//   // Remove all existing emojis
//   const kisses = document.querySelectorAll('.kiss');
//   kisses.forEach(kiss => kiss.remove());
// }
