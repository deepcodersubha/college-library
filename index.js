console.log('This is index.js');


class Book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}

class Display {


    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');

        // console.log(localStorage.setItem('Name', book.name));
        // console.log(localStorage.setItem('Author', book.author));
        // console.log(localStorage.setItem('Genre', book.genre));
      

        // let book1 = localStorage.getItem(book.name);
        // let author1 = localStorage.getItem(book.author);
        // let genre1 = localStorage.getItem(book.genre);


        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.genre}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length > 2 || book.author > 2) {
            return true;
        }

        else { return false };
    }

    show(type, displayAlert) {

        let alert = document.getElementById('alert');
        let state;

        if (type === 'success') {
            state = 'Success!'
        }
        else {
            state = 'Error!'
        }


        alert.innerHTML = ` <div class="fixed-top alert alert-${type} alert-dismissible fade show" role="alert">
                                        <strong>${state} </strong>${displayAlert}
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                </div>`



    }
}


let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();

    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let genre;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        genre = fiction.value;
    }
    else if (programming.checked) {
        genre = programming.value;
    }
    else if (cooking.checked)
        genre = cooking.value;


    let book = new Book(name, author, genre);
    console.log(book);


    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been added successfully')
    }
    else {
        display.show('danger', "This book can't be added!")
    }

}



