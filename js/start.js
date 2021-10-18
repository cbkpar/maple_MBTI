const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = qnaList.length;
const select = [];
var mbti = [0,0,0,0];
var start = false;

function calculation() {
  for(let i = 0; i < endPoint; i++){
    for(let j = 0; j < 4; j++){
      mbti[j] += qnaList[i].a[select[i]].mbti[j];
    }
  }
}

function setResult(){
  calculation();
  var cnt = 0;
  for(let i = 0; i < 4 ; i++){
    cnt <<= 1;
    if(mbti[i]>0) cnt++;
  }


  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = resList[cnt].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = './img/image-' + cnt + '.png';
  resultImg.src = imgURL;
  resultImg.alt = cnt;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);
  const resulttext = document.querySelector('.resulttext');
  resulttext.innerHTML = resList[cnt].desc;
}


function goResult() {
  qna.style.webkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(()=>{
    result.style.webkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(()=>{
      qna.style.display = "none";
      result.style.display = "block";
      },450)
  },450);
  setResult();
}

function addAnswer(anstext, idx, choose) {
  var a = document.querySelector('.answerBox');
  var ans = document.createElement('button');
  ans.classList.add('ansList');
  ans.classList.add('py-3');
  ans.classList.add('my-3');
  ans.classList.add('mx-auto');
  ans.classList.add('fadeIn')
  a.appendChild(ans);
  ans.innerHTML = anstext;
  ans.addEventListener("click",function(){
    var children = document.querySelectorAll('.ansList');
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.webkitAnimation ="fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    select[idx] = choose;
    setTimeout(()=>{
      for(let i = 0; i < children.length; i++){
        children[i].style.display = "none";
      }
      goNext(++idx);
    },450)
  }, false);
}

function goNext(idx) {
  if(idx == endPoint){
    goResult();
    return;
  }
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[idx].q;
  for(let i  in qnaList[idx].a){
    addAnswer(qnaList[idx].a[i].answer, idx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (idx) + '%';
}

function begin() {
  if(start) return;
  start = true;
  main.style.webkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(()=>{
    qna.style.webkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(()=>{
      goNext(0);
      main.style.display = "none";
      qna.style.display = "block";
      },450)
  },450);
}

function restart() {
    location.href="index.html";
}
