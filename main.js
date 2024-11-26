
  // open & close nav menu
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const menu = document.querySelector("nav .container ul");


// open sidebar
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
})


// change active class to clicked nav item
const navItems = document.querySelectorAll('nav ul li');


// remove active class from other items
const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

// add active class to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active');
  })
})

// show/hide faqs
const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // change icon
    const icon = faq.querySelector('.icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  })
})


// change navbar style on scroll
window.addEventListener("scroll", () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// // SEARCH BUTTOn
// function search() {
//   // Get the search term from the input box
//   var searchTerm = document.getElementById("searchBox").value;

//   // Use the DOM to find all elements on the page
//   var elements = document.getElementsByTagName("*");

//   // Loop through each element and search for the term
//   var searchResults = "";
//   for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     var elementText = element.innerHTML;

//     // If the element contains the search term, add it to the search results
//     if (elementText.indexOf(searchTerm) > -1) {
//       searchResults += "<p>" + elementText + "</p>";
//     }
//   }

//   // If no results were found, display a message
//   if (searchResults == "") {
//     searchResults = "No results found.";
//   }

//   // Display the search results
//   document.getElementById("searchResults").innerHTML = searchResults;
// }


