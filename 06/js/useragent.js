const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

if(isIE) {
  alert("익스플로러로 접속하셨습니다. 이 웹페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.");
}