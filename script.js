const button = document.getElementById("greet");
const message = document.getElementById("message");
const count = document.getElementById("count");

const greetings = [
  "Hello. The button works.",
  "Still here.",
  "Plain JavaScript, no framework.",
];

let clicks = 0;

button.addEventListener("click", () => {
  clicks += 1;
  const greeting = greetings[(clicks - 1) % greetings.length];
  message.textContent = greeting;
  count.textContent = "Clicks: " + clicks;
});
