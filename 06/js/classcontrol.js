const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");


// if 조건문
// wrap.addEventListener("click", ()=>{
//   let isOn = wrap.classList.contains("on");
//   console.log(isOn);
//   (isOn)? wrap.classList.remove("on"): wrap.classList.add("on");
//   if(isOn) {
//     wrap.classList.remove("on");
//   } else {
//     wrap.classList.add("on");
//   }
// });


toggle
wrap.addEventListener("click", ()=>{
  wrap.classList.toggle("on");
});