const items = document.querySelectorAll(".item");

console.log("Number of categories:", items.length);

items.forEach( item => {
  const categoryName = item.firstElementChild.textContent;
  const numberOfElements = item.lastElementChild.children.length;

  console.log("Category:", categoryName);
  console.log("Elements:", numberOfElements); 
});

