const wrap = document.querySelector("#wrap");
const box = wrap.querySelector("article");


// if 조건문
wrap.addEventListener("click", ()=> { // wrap을 클릭했을 때
  let isOn = wrap.classList.contains("on");
  // wrap에 클래스 on인지 여부 확인을 한다. on이면 true, on이 없으면 false를 반환한다.
  console.log(isOn);

  if(isOn) {
    wrap.classList.remove("on");    // true라면 on을 제거
  } else {
    wrap.classList.add("on");    // false라면 on을 추가한다.
  }

  // 삼항 조건문으로 작성한다면
  // (isOn)? wrap.classList.remove("on"): wrap.classList.add("on");
});

// toggle로도 제어할 수 있음
// wrap.addEventListener("click", ()=>{
//   wrap.classList.toggle("on");
// });