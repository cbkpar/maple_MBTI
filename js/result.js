function init() {
  var cnt = getParameterByName('res');
  if(cnt >= 0 && cnt <= 15){
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
  }else{
    location.href="index.html";
  }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function restart() {
    location.href="index.html";
}
