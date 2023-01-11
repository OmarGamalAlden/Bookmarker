var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteURL");

var books = [];
var myIndex ;

if (localStorage.getItem("BooksNames") != null) {
  books = JSON.parse( localStorage.getItem("BooksNames") )
  displayBookMark();
}

function AddBookMark() {

  if (document.getElementById('updateBtn').innerHTML == "Submit") {
   
    var bookDate = {
      bookMarkName: siteName.value,
      bookMarkURL: siteUrl.value,
    };
  
    books.push(bookDate);
  
    localStorage.setItem("BooksNames", JSON.stringify(books));
  
    clearAll();
    displayBookMark();
  }
  else{
  books[myIndex].bookMarkName = siteName.value;
  books[myIndex].bookMarkURL = siteUrl.value;

  displayBookMark();
  clearAll();
  
  localStorage.setItem("BooksNames", JSON.stringify(books));
  document.getElementById('updateBtn').innerHTML= "Submit";

  }

}

function displayBookMark() {

  var cartoona = "";

  for (var i = 0 ; i < books.length ; i++) {
   
    cartoona = cartoona +
      `<div class="col-4 mt-4">
      <div class="d-flex align-items-center">
          <div class="w-50">
              <p class="fs-4 fw-bold">${books[i].bookMarkName}</p>
          </div>
          <div class="d-flex flex-wrap w-50 buttons">
              <button class="bg-info text-center"><a class="text-decoration-none" target="_blank" href="${books[i].bookMarkURL}">Visit</a></button>
              <button  class="bg-warning text-center ms-2" onclick="updateElement( ${i} )">Update</button>
              <button class="bg-danger text-center w-100" onclick="deleteElement( ${i} )">Delete</button>
          </div>
      </div>
  </div>`;
  }
  document.getElementById("bookMarKContent").innerHTML = cartoona;

}

function clearAll() {
  siteName.value = "";
  siteUrl.value = "";
}

function deleteElement(index) {
  books.splice(index , 1);
  localStorage.setItem("BooksNames", JSON.stringify(books));
  displayBookMark();
}

function search( term ) {
  var cartoona ="";
   
  for( var i =0  ; i< books.length   ; i++  ){
   
    if (books[i].bookMarkName.toLowerCase().indexOf(term.toLowerCase()) == 0 ) {
      cartoona += `<div class="col-4 mt-4">
      <div class="d-flex align-items-center">
          <div class="w-50">
              <p class="fs-4 fw-bold">${books[i].bookMarkName}</p>
          </div>
          <div class="d-flex flex-wrap w-50 buttons">
              <button class="bg-info text-center"><a class="text-decoration-none" target="_blank" href="${books[i].bookMarkURL}">Visit</a></button>
              <button class="bg-warning text-center ms-2" onclick="updateElement( ${i} )">Update</button>
              <button class="bg-danger text-center w-100" onclick="deleteElement( ${i} )">Delete</button>
          </div>
      </div>
  </div>`
    }


  }
  document.getElementById('bookMarKContent').innerHTML= cartoona;
}

function updateElement(index) {

  myIndex = index;

  siteName.value = books[index].bookMarkName;
  siteUrl.value = books[index].bookMarkURL;

  document.getElementById('updateBtn').innerHTML= "UPDATE";

}