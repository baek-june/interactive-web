const ver = navigator.userAgent;
const isIE = /trident/i.test(ver);

if(isIE) {
  alert("이 페이지는 익스플로어 브라우저를 지원하지 않습니다. 다른 브라우저를 이용해주세요.");
}