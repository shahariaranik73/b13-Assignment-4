## Answers to Questions


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Ans :getElementById We use To get an element from DOM source by its ID name.

-- getElementsByClassName We use To get an element from DOM source by its Class Name.
-- querySelector We use query selectors to fetch elements by tag, ID or class name. Which gives only one result.

2. How do you create and insert a new element into the DOM?

## Ans:To create-> let div = document.createElement('div');
    if we put Text inside it
        div.innerHTML = " Hey Developers "
        textSection.appendChild(div);


3. What is Event Bubbling? And how does it work?

## Ans: Event Bubbling is a process where when an event occurs in a child element, that event rises to the parent elements above it.



4. What is Event Delegation in JavaScript? Why is it useful?

## Ans:Event Delegation-> Instead of having event listeners on multiple child elements, an event listener can be attached to a parent element.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

## Ans:preventDefault() ; Which naturally stops working 
stopPropagation() ;This does not allow the event to go above (to the parent element).
