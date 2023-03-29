const items = document.querySelectorAll(".item");

console.log("Number of categories:", items.length);

items.forEach( item => {
  const categoryName = item.firstElementChild.textContent;
  const numberOfElements = item.querySelectorAll("li");

  console.log("Category:", categoryName);
  console.log("Elements:", numberOfElements.length); 
});

