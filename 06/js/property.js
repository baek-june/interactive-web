const link = document.querySelector("a");
const link_href = link.getAttribute("href");
// getAttribute()는 링크 주소 속성을 가져온다.
console.log(link_href);  // https://www.naver.com 출력

const new_href = "https://www.nate.com";
link.setAttribute("href", new_href);
// setAttribute()를 이용하여 기존 href 속성에 새로운 링크주소를 변경한다.