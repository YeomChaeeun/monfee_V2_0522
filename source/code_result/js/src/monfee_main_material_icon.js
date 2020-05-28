// monfee_main_material_icon.js

(function($){
  // start

  var materialBtnArea = $('.material_btn');
  var materialBtn = materialBtnArea.children('button');

  var materialArea = $('.material_area');
  var meterialUl = materialArea.children('ul');
  var meterialLi = meterialUl.children('li');

  // materialLi.eq(-1).prependTo(meterialUl);
  var matLiLast = meterialLi.eq(-1);
  meterialUl.prepend(matLiLast);
  meterialLi = meterialUl.find('li');
  /*
  var matFirst_01 = parseInt(meterialLi.eq(0).css('width'));
  var matFirst_02 = parseInt(meterialLi.eq(0).css('marginLeft'));
  var matFirst_03 = parseInt(meterialLi.eq(0).css('paddingLeft'));
  var matFirst_04 = parseInt(meterialLi.eq(0).css('paddingRight'));
  var matFirstSize = matFirst_01 + matFirst_02 + matFirst_03 + matFirst_04;
  */
 
  var matFirstSize = meterialLi.eq(1).outerWidth(true);
  // meterialUl.css({marginLeft:-matFirstSize+'px'});
  meterialUl.css({position:'relative'});

  var n = 0;
  meterialUl.css({width:250+'%'});
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

  // end
})(jQuery);