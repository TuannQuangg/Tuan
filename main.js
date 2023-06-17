
const myBtn = document.querySelector(".scroll-btn");

const handleScroll = () =>
  window.scrollY > 20
    ? (myBtn.style.display = "block")
    : (myBtn.style.display = "none");

// When the user clicks on the button, scroll to the top of the document
const handleClick = () => {
  document.body.scrollIntoView({ behavior: "smooth", block: "start" });
};

window.onscroll = () => handleScroll();
myBtn.onclick = () => handleClick();