
//JavaScript for notificaiton dropdown
function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Change of icon when saved to favourites for Home and Product page
function changeImage(image) {
    image.src = '../images/logo/Fav2.png';
}

// PopUp to notify the user that he/she sucessfully bought a plant
function myFunction2() {
    alert("You Bought A Plant From Bonsai Blooms");
}

//JavaScript for read more button to view the hidden block of text
function myFunctionB1(){
    var points = document.getElementById("dots1")
    var showMoreText = document.getElementById("more1")
    var buttonText = document.getElementById("Bbtn1")
    
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Read More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }    
}


function myFunctionB2(){
    var points = document.getElementById("dots2")
    var showMoreText = document.getElementById("more2")
    var buttonText = document.getElementById("Bbtn2")
    
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Read More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }    
}

function myFunctionB3(){
    var points = document.getElementById("dots3")
    var showMoreText = document.getElementById("more3")
    var buttonText = document.getElementById("Bbtn3")
    
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Read More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }    
}