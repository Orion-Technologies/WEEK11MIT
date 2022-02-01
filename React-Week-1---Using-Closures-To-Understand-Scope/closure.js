function defineClosure() {
    function BookObject(name = "The Count of Monte Cristo", currentPage = 873) {
        console.log(`\n\nCreating new Book Object with name: ${name} and currentPage: ${currentPage}`);
        var currentPageNumber = currentPage;
        var bookName = name;

        return {
            "getBookTitle": function () {
                return bookName;
            },
            "turnPage": function () {
                return currentPage++;
               
            },
            "getPage": function () {
                return currentPage;

            }
        };
    }

    var myBook = BookObject('Reckless', 28);
    console.log(`The book name is: ${myBook.getBookTitle()}`);
    console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
    console.log(`Initial Page Number is: ${myBook.getPage()}`);
    myBook.turnPage();
    console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

    myBook = BookObject();
    console.log(`The book name is: ${myBook.getBookTitle()}`);
    console.log(`Accessing myBook's bookName variable directly: ${myBook.bookName}`);
    console.log(`Initial Page Number is: ${myBook.getPage()}`);
    myBook.turnPage();
    console.log(`New Page Number after changing currentPageNumber with turnPage function: ${myBook.getPage()}`);

    return BookObject();
}

window.onload = () => {
    defineClosure();
};

if (typeof module !== 'undefined') {
    module.exports = { defineClosure };
}
