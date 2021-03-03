const elements = $('input');
const gameParent = $('#game1');
const spans = $('#game1').children();
const subBtn = $('#submit-btn');
const reset = $('#reset-btn');

// creates the event handler for a click on the submit button
subBtn.on('click', function(e) {

    // prevents default (to keep #submit-btn from refreshing the page) and then starts an empty error check array that is utilized in the process of determining if all input fields are filled out
    e.preventDefault();
    let errorCheck = [];

    // since the value of the placeholder attribute of the input fields is utilized to check and see if all the inputs are filled in, we want to make sure to reset the placeholder to nothing at the start of each click so that the next few for loops can assign their values properly (essentially it creates a blank slate for the rest of the for loops to run). this bit makes more sense once you've read through the entirety of the code
    for (var i = 0; i < elements.length; i++) {
        elements[i].placeholder = '';
    }
    
    // loops through the input elements and checks their value. if their value is an empty string, it sets their placeholder attribute to 'NO INPUT' to signify to the user to fill out that input. Otherwise, it sets the innerHTML of the corresponding span to that input element's value. because of this, there must be an equal amount of inputs to spans
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].value == '') {
            elements[i].placeholder = 'NO INPUT';
        } else {
            spans[i].innerHTML = elements[i].value;
        }
    }

    // this for loop now pushes the value of the placeholder attribute to an empty array called errorCheck. If all fields are filled out, this array stays empty, if 1 or more fields are not filled out, this array will contain some indexes
    // console.log(errorCheck); <- used for testing
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].placeholder == 'NO INPUT') {
            errorCheck.push(elements[i].placeholder);
        }
    }

    // if statement checks and sees if the errorCheck array is empty. if it is, it shows the game on the screen. if not, it sends an alert to fill in all boxes and empties out the errorCheck array. This emptying of the errorCheck array is extraneous since this is already done at the start of this button click every time but, I'm scared of breaking something heheh :'D
    // console.log(errorCheck); <- used for testing
    if (errorCheck.length === 0) {
        gameParent.css('visibility', 'visible')
    } else {
        alert(`Please fill out all boxes!`)
        errorCheck = [];
    }

    // console.log(errorCheck); <- used for testing
})

// creates the reset button that removes all values and placeholders from inputs and then sets the game to hidden.
reset.on('click', function(e) {
    e.preventDefault();
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = '';
        elements[i].placeholder = '';
    }
    gameParent.css('visibility', 'hidden')
})