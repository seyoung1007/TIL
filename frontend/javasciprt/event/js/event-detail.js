window.addEventListener("load", () => {
  // console.log("hi");
  const open = document.querySelector("#open");
  const detail = document.querySelector("#detail");
  const close = document.querySelector("#close");
  open.addEventListener("click", () => {
    detail.style.display = "block";
    open.style.display = "none";
  });
  close.addEventListener("click", () => {
    detail.style.display = "none";
    open.style.display = "block";
  });
});
