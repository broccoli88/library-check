const bookList = {
    LordOfTheRings: {
        title: `Lord of the Rings`,
        year: 1974,
        author: `J.R.R. Tolkien`,
    },
};

const inputTitle = document.querySelector(`#title`);
const inputYear = document.querySelector(`#year`);
const inputAuthor = document.querySelector(`#author`);
const buttonSubmit = document.querySelector(`#submit`);

let title;
let releaseYear;
let author;

buttonSubmit.addEventListener(`click`, (e) => {
    e.preventDefault();
});
