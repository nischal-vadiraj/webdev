//why async - do this, and get back to me when you’re done, but in the meantime continue doing some other work

//callbacks - function passed as argument to another function and is executed after some event has occured

//example

function doHomework(subject, callback) {
    console.log(`doing homework ${subject}...`);
    setTimeout(() => {
        console.log(`finished homework ${subject}!`);
        callback();
    }, 3000); //  3-second delay 
}

function playGames() {
    console.log("play some games!");
}

doHomework("Math", playGames);

// syntax - real world use case

document.querySelector('#button').addEventListener('click', () => {
        //this function is executed when the mouse is clicked
    });
    // second argument to addEventListener is arrow function:
    
    () => {
        //this function is executed when the mouse is clicked
    };
    