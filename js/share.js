function setShare() {
  const url = "https://cbkpar-mbti.netlify.app/";
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = "메이플 MBTI 결과";
  const shareDes = resList[resultAlt].name;
  const shareImage = url + "img/image-" + resultAlt + ".png";
  const shareURL = url + "result.html?res=" + resultAlt;

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
        androidExecutionParams: 'test'
      },
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      },
    ]
  });
}
