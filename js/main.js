const bookList = [
    {
        title: `Lord of the Rings`,
        year: 1974,
        author: `J.R.R. Tolkien`,
    },
    {
        title: `Deadly Education`,
        year: 2010,
        author: `Naomi Novik`,
    },
];

const buttonSubmit = document.querySelector(`#submit`);

window.addEventListener(`load`, displayBookList);

function displayBookList() {

    // ! FIND A WAY TO RESEST STACK AND DISPLAY LIST WITHOUT ITERATION

    bookList.forEach((book) => {
        const listOfBooks = document.querySelector(`.book-list`);
        const bookItem = document.createElement(`li`);
        const bookInfo = document.createElement(`div`);
        const buttons = document.createElement(`div`);
        const bookTitle = document.createElement(`h3`);
        const bookRelease = document.createElement(`p`);
        const bookAuthor = document.createElement(`p`);
        const button = document.createElement(`button`);

        bookItem.classList.add(`book__item`);
        bookInfo.classList.add(`book__info`);
        buttons.classList.add(`btns`);
        button.classList.add(`btn`, `btn--delete`);

        bookTitle.textContent = book.title;
        bookRelease.textContent = book.year;
        bookAuthor.textContent = book.author;
        button.textContent = `Delete`;

        bookInfo.appendChild(bookTitle);
        bookInfo.appendChild(bookRelease);
        bookInfo.appendChild(bookAuthor);
        bookItem.appendChild(bookInfo);
        bookItem.appendChild(buttons);
        listOfBooks.appendChild(bookItem);
        buttons.appendChild(button);
    });
}

buttonSubmit.addEventListener(`click`, (e) => {
    const inputTitle = document.querySelector(`#title`);
    const inputYear = document.querySelector(`#year`);
    const inputAuthor = document.querySelector(`#author`);

    e.preventDefault();

    if (inputTitle.value === ``) return;
    if (bookList.filter(book => ))

    // ! MAKE FILTER FUNCTION IF THE BOOK ALREADY EXIST  => RETURN


    let newBook = {
        title: inputTitle.value,
        year: inputYear.value,
        author: inputAuthor.value,
    };

    bookList.push(newBook);

    inputTitle.value = ``;
    inputYear.value = ``;
    inputAuthor.value = ``;

    displayBookList();
});
