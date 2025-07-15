// Get DOM elements
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuote');

// Initialize array of quotes
let quotes = [];

// Load saved quotes from localStorage... assuming there might be some in the localStorage
const savedQuotes = localStorage.getItem('quotes');
if (savedQuotes) {
  quotes = JSON.parse(savedQuotes);
}

// Show a random quote if the code above iss successful
function showRandomQuote() {
  if (quotes.length === 0) { //if there are no quotes
    quoteDisplay.innerHTML = 'No quotes available.';
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  //radomIndex is a constant variable 
  //math.random() = generates a random decimal value betweek 0(inclusive) and 1 (exclusive);
  //* quote.length = the decimal number generated is multiplied by the number of quotes.
  //Math.floor() = rounds off the decimal value from * quotes.length to the nearest whole number, giving us a valid array number.

  const quote = quotes[randomIndex]; 
  // we create a constant variable called quote which picks one random quote from the saved quotes inside of the quotes array.

  quoteDisplay.innerHTML = `
    <p>"${quote.text}"</p>
    <p><em>Category: ${quote.category}</em></p> 
  `;
} // this displays the quotes on the page



// Create the add quote form dynamically
function createAddQuoteForm() { 
  // Create elements
  const form = document.createElement('form'); //creates a form

  const quoteInput = document.createElement('input'); //creates an input element for the quote the user types in
  quoteInput.type = 'text'; //attribute of the input element
  quoteInput.placeholder = 'Enter quote'; //attribute of the input element
  quoteInput.required = true; //attribute of the input element

  const categoryInput = document.createElement('input'); //creates the input element for the user to type in a category for the quote
  categoryInput.type = 'text'; //attribute of the input element
  categoryInput.placeholder = 'Enter category'; //attribute of the input element
  categoryInput.required = true; //attribute of the input element

  //Creating a button
  const addButton = document.createElement('button'); 
  addButton.textContent = 'Add Quote';
  addButton.type = 'submit';

  // Add elements to form
  form.appendChild(quoteInput);
  form.appendChild(categoryInput);
  form.appendChild(addButton);

  // Add form to body (or another container if you like)
  document.body.insertBefore(form, quoteDisplay);

  // Handle form submission
  form.addEventListener('submit', function (e) {
    e.preventDefault();  //prevents the browser from reloading the page and sending the form data to a serveer, basically you are letting the browser let you handle submission using JS code instead

    alert("Form submitted!")

    const newQuote = {  //creating a variable that will store the users' inputs
      text: quoteInput.value.trim(), //the quote
      category: categoryInput.value.trim(), //the category
    };

    if (!newQuote.text || !newQuote.category) {
      alert('Please enter both quote and category.'); //this will be signalled when the user tries to submit wthout filling in the form
      return;
    }

    quotes.push(newQuote); //puts the user's input in the quotes array
    localStorage.setItem('quotes', JSON.stringify(quotes)); // then puts it in a JSON string in the local storage

    // Optionally, show the new quote
    showRandomQuote(); //this will display the new quote when the page loads

    // Clear form inputs
    quoteInput.value = ''; 
    categoryInput.value = '';
  });
}

// Attach event listener to "Show New Quote" button
newQuoteButton.addEventListener('click', showRandomQuote); //when the user click the button a new quote will be generated


// Call function to create the form on page load
createAddQuoteForm(); 


//INTERGRATE WEB STORAGE
// const exportButton = document.getElementById('export-button');

// exportButton.addEventListener('click', function() {
//     if (quotes.length === 0) {
//         alert('No quotes available to export.');
//         return;
//     }

    
// })