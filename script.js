const displayed = document.querySelectorAll(".not-collapsed");
const triggerDisplay = document.querySelectorAll(".collapsed");
const dropDownIdArray = Array.from(triggerDisplay).map((element) => element.id);
const dropDownArray = Array.from(displayed);

console.log(dropDownIdArray);

dropDownArray.forEach((element) => {
  const expanded = element.parentElement.querySelector(".collapsed");
  const closedSymbol = element.parentElement.querySelector(".icon-plus");
  const openedSymbol = element.parentElement.querySelector(".icon-minus");

  element.onclick = () => {
    closedSymbol.classList.toggle("not-show");
    openedSymbol.classList.toggle("show");
    expanded.classList.toggle("show");
    
    
  };
});
