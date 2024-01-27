//select popup box popup overlay button
// var popupoverlay = document.querySelector(".popup-overlay")
// var popupbox = document.querySelector(".popup-box")
// var addpopupbutton = document.getElementById(".add-popup-button");

// addpopupbutton.addEventListener("click",function(){
//     popupoverlay.style.display="block"
//     popupbox.style.display="block"
    
//     }
// )


document.addEventListener("DOMContentLoaded", function() {
    // Select the "Add" button by its ID
    var addPopupButton = document.getElementById("add-popup-button");

    // Add an event listener to the "Add" button
    addPopupButton.addEventListener("click", function() {
        // Your code to display the popup overlay and box goes here
        var popupOverlay = document.querySelector(".popup-overlay");
        var popupBox = document.querySelector(".popup-box");
        popupOverlay.style.display = "block";
        popupBox.style.display = "block";
    });
});

//select cancel button
// var cancelPopup = document.getElementById("cancel-popup")
//     cancelPopup.addEventListener("click",function(event)
//     {
// event.preventDefault()

//     })

  
    document.addEventListener("DOMContentLoaded", function() {
        var cancelPopupButton = document.getElementById("cancel-popup");
        cancelPopupButton.addEventListener("click", function() {
            var popupOverlay = document.querySelector(".popup-overlay");
            var popupBox = document.querySelector(".popup-box");
            popupOverlay.style.display = "none";
            popupBox.style.display = "none";
        });
    });
    

    //select container, add-book,book-title-input,book-author-input,book-discription-input

    // var container=document.querySelector(".container")
    // var addbook = document.getElementById("add-book")
    // var booktitleinput = document.getElementById("book-title-input")
    // var bookauthorinput = document.getElementById("book-author-input")
    // var bookdiscriptioninput = document.getElementById("book-discription-input")


// addbook.addEventListener("click",function(){
//     event.preventDefault()
//     var div = document.createElement("div")
//     div.setAttribute("class","book-container")
//     div.innerHTML=``<h1>${booktitleinput.value}</h1>`
// container.append(div);

//     // Hide the popup overlay and box
//     var popupOverlay = document.querySelector(".popup-overlay");
//     var popupBox = document.querySelector(".popup-box");
//     popupOverlay.style.display = "none";
//     popupBox.style.display = "none";// })




document.addEventListener("DOMContentLoaded", function() {


    var container = document.querySelector(".container");
    var addbook = document.getElementById("add-book");
    var booktitleinput = document.getElementById("book-title-input");
    var bookauthorinput = document.getElementById("book-author-input");
    var bookdiscriptioninput = document.getElementById("book-discription-input");
    
    addbook.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission behavior
    
        // Create a new book container
        var div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `<h1>${booktitleinput.value}</h1>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdiscriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>`;
        container.append(div);
    
        // Hide the popup overlay and box
        var popupOverlay = document.querySelector(".popup-overlay");
        var popupBox = document.querySelector(".popup-box");
        popupOverlay.style.display = "none";
        popupBox.style.display = "none";
    });
    

});



//  document.addEventListener("DOMContentloaded", function (){


// // function deletebook(event){
// //     event.target.parentElement.remove()
// // }    

//  })