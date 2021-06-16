

//Create a P element with a link inside.

//Then, write a JavaScript function to get the HREF attribute of the link.


function getHREF() {


    // Get the a ' Elements from the document DOM(Document Object Model)
  
    const aTagElements = document.getElementsByTagName("a");

    //then get the 'href' attribute using "getAttribute" method
    const href = firstATag.getAttribute("href");

    // Return statement to return the href attribute value from the function
    return href;
}
// Here we made a call to the function and get the link
const link = getHREF();

// Show alert message with the href value
alert(link);

// Show the link in developer console
console.log(link);