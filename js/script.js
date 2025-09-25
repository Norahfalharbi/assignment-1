// Get the current date and time
const now = new Date();
let greeting;

// Check the current hour and decide which greeting to use
if (now.getHours() < 12) {
  greeting = "Good Morning";
} else if (now.getHours() < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

// Show a popup alert with the greeting + current time
alert(
  greeting + " Welcome to My Website" + 
  " and Time is " + now.getHours() + ":" + now.getMinutes()
);
