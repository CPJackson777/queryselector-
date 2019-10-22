// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.




const sectionEl = document.querySelector('.article__header')
sectionEl.textContent = 'Welcome to the Charles Blog!'
// First, I created a var for the query selector. Next, I selected the class article__header. Last, I used textContent to change the text to wht I wanted it to say.

const arHeader = document.querySelectorAll('.article__header')
console.log (arHeader)

arHeader.forEach(article => {
    article.classList.add('important')
})


document.querySelector(".dashed").classList.remove("dashed")
document.querySelector(".article__footer").classList.add("goldenrod")

for(let i = 0; i < sectionEl.length; i++) {
    console.log(sectionEl[i]);
  }
// Need to ask why the above for loop doesn't work