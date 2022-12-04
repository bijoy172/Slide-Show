// find all the element 
const slideshowElements = document.querySelectorAll(".slideshow-elements");

//show in console
//console.log(slideshowElement);


let countElements = 1 ;

//changing after one moment.... one by one...
setInterval(() => {
    const slideshowElements = document.querySelectorAll(".slideshow-element");

     //finding the current element.....
    countElements ++;
    let currentElement = document.querySelector(".current");

    //remove the current classs...
    currentElement.classList.remove("current");

    if(countElements > slideshowElements.length)
    {
        //if count is greater than total element than make 0 index as a current element...
        slideshowElements[0].classList.add("current");
        
        //making count = 1... and the loop is continue.....
        countElements = 1;

    }
    else
    {
        //find the next item..... and make it current class...
        currentElement.nextElementSibling.classList.add("current");
    }

    
}, 1000);

