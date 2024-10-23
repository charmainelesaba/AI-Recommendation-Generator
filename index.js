function displayBookRecommendations(event) {
    event.preventDefault();
    
    let bookList = document.querySelector("#book-list");
    let bookRecommendationElement = document.querySelector("#book-recommendation");
    

    bookList.innerHTML = "";
    bookRecommendationElement.innerHTML = "";

    let typewriter = new Typewriter(bookRecommendationElement, {
        autoStart: true,
        delay: 50,
        cursor: null
    });

    
    let books = ["Game of Thrones", "Throne of Glass", "Twilight"];

    
    books.forEach((book) => {
        typewriter
            .typeString(book + '<br>')  
            .pauseFor(350)              
            .callFunction(() => {
                
                let listItem = document.createElement('li');
                listItem.textContent = book;
                bookList.appendChild(listItem);
            })
            .pauseFor(350)              
            .start();
    });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", displayBookRecommendations);
