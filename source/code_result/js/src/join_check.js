// join_check.js

(function($){
  var ac = $('#allCheck');
  var ts = $('#termsService');
  var tp = $('#termsPrivacy');
  var tl = $('#termsLocation');
  var ta = $('#termsAlert');


  var tsTerms = $('#termsService').nextAll('.terms').eq(0);
  var tpTerms = $('#termsPrivacy').nextAll('.terms').eq(0);
  var tlTerms = $('#termsLocation').nextAll('.terms').eq(0);
  var taTerms = $('#termsAlert').nextAll('.terms').eq(0);
  
  /*
  var termsService;
  $.ajax({
    url:'../terms/termsService.html',
    dataType:'html',
    async:false,
    success:function(data){
      termsService = data;
      // console.log(data);
      return termsService;
    }
  });

  ts.append(termsService);
  */

  tsTerms.load('../terms/termsService.html');
  tpTerms.load('../terms/termsPrivacy.html');
  tlTerms.load('../terms/termsLocation.txt');
  // ======================================================
  var inputCh = $('input[type="checkbox"]');
  var inputCheckList = [ts,tp,tl,ta];


  ac.on('click',function(e){
    // e.preventDefault();
    var acAttr = ac.is(':checked');
    // console.log(acAttr);
    if(acAttr){
      inputCh.addClass('check');
      inputCh.attr({'checked':true});
    }else{
      inputCh.removeClass('check');
      inputCh.attr({'checked':false});
    }
  });

  var allState;
  var AllCk = function(state){
    if(state === true){
      ac.attr({'checked':true});
      ac.addClass('check');
    }else{
      ac.attr({'checked':false});
      ac.removeClass('check');
    }
  };

  inputCh.on('click',function(){
    var nowCk = $(this).is(':checked');
    console.log(nowCk);
    
    AllCk(nowCk);
    
    // if(!nowCk){}
    if(nowCk === false){
      $(this).attr({'checked':false});
      $(this).removeClass('check');
    }else{
      for(var i=0; i<inputCheckList.length;i++){
        if(inputCheckList[i]==false){
          ac.attr({'checked':false});
          ac.removeClass('check');
          break;
        }else{

        }
      }
    }

  });



})(jQuery);