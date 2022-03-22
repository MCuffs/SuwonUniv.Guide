const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText,qIdx){
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('Button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function()
  { var children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; i++ ){
      children[i].disabled = true;
      children[i].style.display = 'none';
    }
    goNext(++qIdx);
    }, false);
}
function goNext(qIdx){
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx);
  }

}
function begin(){
  main.style.WebkitAnimation = "fadeout 1s";
  main.style.animaiton = "fadeout 1s ";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadein 1s ";
    qna.style.animation = "fadein 1s ";
    setTimeout(()=>{
      main.style.display = "none";
      qna.style.display = "block";
    },450)
    let qIdx = 0;
    goNext(qIdx);
  },450);
  //main.style.display = "none";
  //qna.style.display = "block";
}
