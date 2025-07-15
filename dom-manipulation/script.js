const quoteDisplay = document.getElementById('quote-display');
        const addQuoteButton = document.getElementById('add-quote');

        addQuoteButton.addEventListener('click', function() {
            showRandomQuote();
        });

        let quotes = [];
        
        
        function showRandomQuote() {
            if (quotes.length === 0) {
                quoteDisplay.innerHTML = "No quotes yet!";
                return;
            }

            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];

            quoteDisplay.innerHTML = `${quote.text} <br> ~ ${quote.category} `;
        }


        function createAddForm() {
            const form = document.createElement('form');

            const quoteInput = document.createElement('input');
            quoteInput.id = "quote-input";
            quoteInput.placeholder = "Enter quote";
            
            const categoryInput = document.createElement('input');
            categoryInput.placeholder = 'Enter Category';
            categoryInput.id = "category-input";
            
            const submitButton = document.createElement('button');
            submitButton.textContent = "Submit";
            submitButton.id = "submit-button";

            submitButton.addEventListener('click', function(event) {
                event.preventDefault();

                const userQuote = quoteInput.value.trim();
                const userCategory = categoryInput.value.trim();

                newQuote = {
                    text: userQuote,
                    category: userCategory
                };

                quotes.push(newQuote);

                showRandomQuote();

                const quotesArrayStr = JSON.stringify(quotes);
                localStorage.setItem('quotes', quotesArrayStr);

                quoteInput.value = "";
                categoryInput.value = "";
            });


            form.appendChild(quoteInput);
            form.appendChild(categoryInput);
            form.appendChild(submitButton);
            document.body.appendChild(form);
        }

        createAddForm();

        