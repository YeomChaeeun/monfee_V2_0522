// monfee_main_adBanner.js

(function($){
  //start
  var adBannerBox = $('#adBannerBox');
  var adBannerBtn = adBannerBox.find('.adBanner_btn');
  var adBtn = adBannerBtn.find('button');
  var adBannerIndicator = adBannerBox.find('adBanner_indicaotr');
  var indiCatorLi = adBannerIndicator.find('li');
  var adBannerImg = adBannerBox.find('.adBanner_img');
  var adBannerImgWrap = adBannerImg.children('ul');
  var adBannerLi = adBannerImgWrap.find('li');
  
  //common
  var liLast = adBannerLi.eq(-1).clone(true);
  adBannerImgWrap.prepend(liLast);
  adBannerLi = adBannerImgWrap.find('li');
  var adBannerLiLen = adBannerLi.length;
  var liWidth = 100/adBannerLiLen;
  adBannerImgWrap.css({width:adBannerLiLen*100+'%',transform:'translateX(-' + liWidth + '%)'});
  adBannerLi.css({width:liWidth+'%'});

  var n=0;
  var btnOk = true;


  //button
  adBtn.on('click',function(e){
    e.preventDefault();
    var clickIt = $(this)[0];
    if(clickIt == $('.next')[0]){
      // 다음 버튼 클릭
      btnOk = false;
      n+=1;
      adBannerImgWrap.stop().animate({marginLeft: n*-100 + '%'}, function(){
        if(n>=adBannerLiLen-2){
          n = -1;
          adBannerImgWrap.css({marginLeft: n*-100 + '%'});
        }
        btnOk = true;
      });
    }else if(btnOk){
      // 이전 버튼 클릭
      btnOk = false;
      n-=1;
      adBannerImgWrap.stop().animate({marginLeft: n*-100 + '%'}, function(){
        if(n<0){
          n=adBannerLiLen-2;
          adBannerImgWrap.css({marginLeft: n*-100 + '%'});
        }
        btnOk = true;
      }); 
    }
  });



  //indicator







  //end
})(jQuery);