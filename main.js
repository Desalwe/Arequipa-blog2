const b2t = document.getElementById("b2t");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    b2t.style.display = "block";
  } else {
    b2t.style.display = "none";
  }
}

b2t.addEventListener("click", () => {
  topFunction()
})

function topFunction() {
  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  const intervalId = setInterval(function () {
    currentYOffset -= initYOffset * 0.04;
    document.body.scrollTop = currentYOffset;
    document.documentElement.scrollTop = currentYOffset;

    if (self.pageYOffset == 0) {
      clearInterval(intervalId);
    }
  }, 10);

}