const accordionHeaders = document.querySelectorAll(".not-collapsed");
const accordionContents = document.querySelectorAll(".collapsed");

accordionHeaders.forEach((header) =>
  header.addEventListener("click", () => {
    // Get the corresponding accordion content and symbols
    const accordionContent = header.nextElementSibling; // A more reliable selector
    const closedSymbol = header.querySelector(".icon-plus");
    const openedSymbol = header.querySelector(".icon-minus");

    // Toggle the show class for the clicked header's content
    accordionContent.classList.toggle("show");

    // Iterate through all contents and headers to reset them as needed
    accordionContents.forEach((content) => {
      const previousContentHeader = content.previousElementSibling; // Get the header corresponding to this content
      const otherClosedSymbol =
        previousContentHeader.querySelector(".icon-plus");
      const otherOpenedSymbol =
        previousContentHeader.querySelector(".icon-minus");

      // If the content is not the clicked one, this ensures it is hidden and its symbols reset
      if (content !== accordionContent) {
        content.classList.remove("show");
        otherClosedSymbol.style.display = "flex";
        otherOpenedSymbol.style.display = "none";
      }
    });

    // Update symbols for the clicked header based on its new state
    if (accordionContent.classList.contains("show")) {
      closedSymbol.style.display = "none";
      openedSymbol.style.display = "flex";
    } else {
      closedSymbol.style.display = "flex";
      openedSymbol.style.display = "none";
    }
  })
);
