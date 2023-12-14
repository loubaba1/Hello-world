// JS INPUT & OUTPUT

/*
  Topics:
  - Getting user input from HTML input elements using the value command.
  - Clearing input fields using the value command.
  - How to use the innerHTML command to change web text
  - How to use innerHTML to add elements (images, lists, etc)
  - How to use innerHTML to access web for input
*/

// Event Listener
document.getElementById("btn").addEventListener("click", showGreeting);
document.getElementById("clear-btn").addEventListener("click", clearsite);

document.getElementById("light").addEventListener("click", LightTheme);
document.getElementById("Dark").addEventListener("click", DarkTheme);

//Event Function

function lightTheme() {
  console.log("chose Light theme");
  document.getElementById("theBody").style.color = "White";
  document.getElementById("theBody").style.background = "Black";
}

function Darktheme() {
  console.log("chose Dark theme");
  document.getElementById("theBody").style.color = "Black";
  document.getElementById("theBody").style.background = "White";
}
function clearsite() {
  // No input or processing required.

  // Output

  document.getElementById("name-in").value = "";
  document.getElementById("day-in").value = "";
  document.getElementById("greeting-out").innerHTML = "------------";
  // image alrady exist.use ,src to update the new image source.
  document.getElementById("bot-pic").src = "images/hello.png";
}

function showGreeting() {
  //INPUT
  // use . valuye command to acses input data. save to a variable.
  let name = document.getElementById("name-in").value;
  let timeOfDay = document.getElementById("day-in").value;

  //PROCESS
  let greeting = `Greetingings and good ${timeOfDay}. It's nice to see you again ${name}.`;
  console.log(greeting);

  //OUTPUT
  //.innerHTML command both acsess and replaces any HTML content
  //Only woks on elements with both open/close tags. E.g. <p> inner html</p>

  document.getElementById("greeting-out").innerHTML = greeting;

  // Add
  document.getElementById("bot-img").innerHTML =
    '<image width= "300px"  id="bot-pic" src="images/chatbot.png">';
}
/*
  Check Your Understanding:

  Part A:
  - Update the above code so it is a pizza order.
  - There are 3 inputs: one for the size, and two for toppings.
  - Output should be displayed on the website as "Your ______ pizza with _____ and ______ will be ready in 20 minutes!"

  Part B: Update the previous section so that 
  - the toppings appear as an unordered list like this:
  
      You have ordered a pizza with:
          - ham
          - pineapple
          
      Thank you for ordering from Pizza 73! You pizza will be ready in 20 minutes.
      
  - an image of a pizza appears under the order output

  - have the "Pizza 73" be a hyperlink that takes the user to Pizza 73's homepage.


  innerHTML can add text as well as tags
  -e.g.document.getElementById("thing").innerHTML = "<p>Hello <a href=?> World </a> </p>"
  
*/
