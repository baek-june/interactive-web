const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");

wrap.addEventListener("click", e=>{
  let isOn = wrap.classList.contains("on");
  console.log(isOn);
  if(isOn) {
    wrap.classList.remove("on");
  } else {
    wrap.classList.add("on");
  }
});
