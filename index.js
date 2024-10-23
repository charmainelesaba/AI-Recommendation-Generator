function displayBooks(response){
    let bookList = document.querySelector("#book-list");
    let bookRecommendationElement = document.querySelector("#book-recommendation");
    


    let typewriter = new Typewriter(bookRecommendationElement, {
        autoStart: true,
        delay: 50,
        cursor: null
    });

    
    let books = [response.data.answer];

    books.forEach((book) => {
        typewriter
            .typeString(book + '<br>')  
            .pauseFor(350)              
            .callFunction(() => {
                
                if (bookList) {
                    let listItem = document.createElement('li');
                    listItem.textContent = book;
                    bookList.appendChild(listItem);
                } else {
                    console.error("bookList element not found.");
                }
            })
            .pauseFor(350)              
            .start();
    });
}


function displayBookRecommendations(event) {
    event.preventDefault();

    let seachInputElement = document.querySelector("#user-input");
    let aiRecommendation = seachInputElement.value;
    let key = "7f8c32d332f4bf01b7d20t129od1ca44";
    let context = "You are a book recommendation expert. Your task is to generate 3 books in basic HTML based on the user's requested genre.. Make sure that wherever you're rendering the HTML, it's done without backticks so that the browser interprets it as HTML and not as plain text. Each title should be displayed in a consistent format: plain text, without any bolding or additional formatting. Ensure that the titles are presented as a simple list, each on a new line. Regardless of the genre or the number of times the user requests a recommendation, always adhere to this format without variation. If the book titles are initially returned in an inconsistent format, adjust them to match the specified format before providing the response. Your response should always be concise and focus solely on the book titles and author's name.";
    let prompt = `user's requested genre: please generate 3 ${aiRecommendation} book recommendation, simply list the three books only`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    axios.get(apiUrl).then(displayBooks);
    
    let hiddenElement = document.querySelector("#book-recommendation");
    hiddenElement.innerHTML = `<div class="blink">Generating book recommendations about ${aiRecommendation}</div>`;
    

}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", displayBookRecommendations);
