const frame = document.querySelector("#wrap");
console.log(frame);
const box1 = document.querySelector("#wrap .box1");
console.log(box1);
const items = document.querySelectorAll("#wrap article");
// for(let item of items) {
//   console.log(item);
// }
for (let i=0; i<items.length; i++) {
  console.log(items[i]);
}