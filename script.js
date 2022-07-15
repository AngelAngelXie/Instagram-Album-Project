
const button1 = document.querySelector("#button1");
let like = 0;
button1. addEventListener('click', e => {
  console.log("button 1 selected.");
  like = like + 1;
  likeCount.innerHTML = like + " Like"
})



console.log("javascript is ran");

let input = document.querySelector('#input');
let commentC = document.querySelector('#comment');

input.addEventListener('keyup', e=> {
  console.log("Commented!")
  if(e.key === "Enter" && input.value){
    commentC.innerHTML += `
      <div class='commentrow'>
        <p>${input.value}</p>
      </div>`
    ;
    input.value ='';
  }
});                        