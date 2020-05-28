// monfee_main_material_icon.js

(function($){
  // start
  
  var materialBtnArea = $('.material_btn');
  var materialBtn = materialBtnArea.children('button');

  var materialArea = $('.material_area');
  var meterialUl = materialArea.children('ul');
  var meterialLi = meterialUl.children('li');
  
  var mvLength = 2; 

  // materialLi.eq(-1).prependTo(meterialUl);
  // var matLiLast = meterialLi.eq(-1);
  var matLiLast = meterialLi.eq(-1*(mvLength+1)).nextAll('li');
  meterialUl.prepend(matLiLast);
  meterialLi = meterialUl.find('li');
  meterialUl.css({width:250+'%'});
  /*
  var matFirst_01 = parseInt(meterialLi.eq(0).css('width'));
  var matFirst_02 = parseInt(meterialLi.eq(0).css('marginLeft'));
  var matFirst_03 = parseInt(meterialLi.eq(0).css('paddingLeft'));
  var matFirst_04 = parseInt(meterialLi.eq(0).css('paddingRight'));
  var matFirstSize = matFirst_01 + matFirst_02 + matFirst_03 + matFirst_04;
  */
 
  var matFirstSize = meterialLi.eq(1).outerWidth(true)*mvLength;
  meterialUl.css({marginLeft:-matFirstSize+'px'});
  meterialUl.css({position:'relative'});

  /* // version 1

  var n = 0;
  var btnView = function(){
    if(n<=0){
      materialBtnArea.children('.prev').hide();
      materialBtnArea.children('.next').show();
    }else if(n>=5){
      materialBtnArea.children('.prev').show();
      materialBtnArea.children('.next').hide();
    }
    else{
      materialBtn.show();
    }
  };

  materialBtn.on('click',function(e){
    e.preventDefault();
    var thisIt = $(this)[0];
    var nextBtn = materialBtnArea.children('.next')[0];

    if(thisIt == nextBtn){
      materialBtn.hide();
      n+=1;
      meterialUl.animate({left:-n*matFirstSize+'px'}, function(){
        // materialBtn.show();
        btnView();
      });
    }else{
      materialBtn.hide();
      n-=1;
      meterialUl.animate({left:-n*matFirstSize+'px'}, function(){
        // materialBtn.show();
        btnView();
      });
    }
  });
  */

  // version 2 : 클릭시 양끝 마지막요소를 반대편끝으로 붙여서 무한으로 이동하게 만들기

  // meterialUl.css({marginLeft:-matFirstSize+'px'});
  var thisOk = true;
  materialBtn.on('click',function(e){
    e.preventDefault();
    var thisIt = $(this)[0];
    var nextBtn = materialBtnArea.children('.next')[0];

    if(thisIt == nextBtn && thisOk){
      thisOk = false;
      meterialUl.animate({left:-matFirstSize+'px'},function(){
        meterialLi.eq(mvLength).prevAll('li').appendTo(meterialUl);
        meterialUl.css({left:0});
        meterialLi = meterialUl.find('li');
        thisOk = true;
      });
    }else if(thisOk){
      thisOk = false;
      meterialUl.animate({left:matFirstSize+'px'},function(){
        meterialLi.eq(-1*(mvLength+1)).nextAll('li').prependTo(meterialUl);
        meterialUl.css({left:0});
        meterialLi = meterialUl.find('li');
        thisOk = true;
      });      
    }
  });

  // end
})(jQuery);