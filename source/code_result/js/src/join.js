// join.js

(function($){
  // strat
  var mobileArea = $('#mobileArea');
  var contry = [
    '가나 +123',
    '가봉 +241',
    '가이아나 +592',
    '대한민국 +82',
    '영국 +345',
    '미국 +90',
    '염채은 +95',
    '수원 +031'
  ];
  var contryText = '<option value=""></option>';
  var valueResult;

  var koreaSelect = contry.indexOf('대한민국 +82');
  
  // console.log(contry[0].split('+')[1]);

  for(var i=0; i<contry.length; i++){
    mobileArea.append(contryText);
    mobileArea.find('option').eq(i).text(contry[i]);
    valueResult = contry[i].split('+')[1];
    // console.log(valueResult);
    mobileArea.find('option').eq(i).attr({'value':valueResult});
  }
  mobileArea.find('option').eq(koreaSelect).attr({selected:'selected'});
    
  // var userId = $('#userId');
  // userId.on('keyup',function(e){
  //   e.preventDefault();

  //   var val = $(this).val();
  //   console.log(val);

  // });
/**
 * .val()은 양식(form)의 값을 가져오거나 값을 설정하는 메소드
 * 정규표현식은 특별한 규칙을 가진 문자열의 집합
 * ^x(시작값), x$(끝값) 표현식 / x+, x? ... 
 *  
 */
  /*
  var date = new Date();
  console.log(date);
  var yy = date.getFullYear();
  var mm = date.getMonth()+1;
  var dd = date.getDate();
  // console.log(yy);
  // console.log(mm);
  // console.log(dd);

  // var obj = {};
  var obj = new Object();
  obj.one = 'apple';
  obj.two = 'grape';
  // console.log(obj);
  
  // var arr = new Array();
  var arr = [];
  arr[0] = 'apple';
  arr[1] = 'banana';
  arr[2] = 'melon';
  // console.log(arr);

  // var exp = new RegExp("^abc");
  var exp = /^abc/;
  // console.log(exp);

  var myRe = /d(b+)d/g;
  var myArray = myRe.exec("cdbbdsbz");
  // console.log(myArray); // 어렵다
  */

  // 아이디 ----------------------------------------------------------------------
  var userId = $('#userId');
  userId.on('blur',function(e){
    e.preventDefault();

    var rel = $(this).val();
    // var ck = /^[A-Za-z0-9]{6,12}$/;
    // 영문(대/소), 숫자, 특수문자(-_) 글자 5~20글자
    // var RegExp = /^.*([A-Za-z0-9]|[-_$*&!@]){5,20}$/;
    var ck = /^.*([a-z0-9]|[-_]){5,20}$/i;
    var relTest = ck.test(rel);
    var conDl = $(this).parents('dl');
    var conT = $(this).parents('dd').eq(0).next('.confirm_text');
    
    // console.log(relTest);
    if(rel==""){
      conDl.addClass('error');
      conDl.removeClass('success');
      conT.text('id는 반드시 입력해야 합니다.');

    }else if(relTest == false){
      conDl.addClass('error');
      conDl.removeClass('success');
      conT.text('5~20자의 영문 소문자, 숫자와 특수기호(-),(-)만 사용 가능합니다.');

    }else{
      conDl.addClass('success');
      conDl.removeClass('error');
      conT.text('좋은 id입니다. 사용하셔도 좋습니다.');
    }
  });

  // 비밀번호 -----------------------------------------------------------------
  var userPw = $('#userPw');
  var pwResult;
  userPw.on('blur',function(e){
    e.preventDefault();

    var rel = $(this).val();
    pwResult = rel;
    var ck = /^.*([a-z0-9]|[*!@#$^+=-_]){5,20}$/i;  // 특수문자 \/ 사용금지
    var relTest = ck.test(pwResult);
    var conDl = $(this).parents('dl');
    var conT = $(this).parents('dd').eq(0).next('.confirm_text');
    
    if(pwResult==""){
      conDl.addClass('error');
      conDl.removeClass('success');
      conT.text('비밀번호는 반드시 입력해야 합니다.');

    }else if(relTest == false){
      conDl.addClass('error');
      conDl.removeClass('success');
      conT.text('5~20자의 영문 소문자, 숫자와 특수기호만 사용 가능합니다.');

    }else{
      conDl.addClass('success');
      conDl.removeClass('error');
      conT.text('좋은 비밀번호입니다. 사용하셔도 좋습니다.');
    }

  });

  var userPw2 = $('#userPw2');
  userPw2.on('blur',function(e){
    e.preventDefault();
    var conDl = $(this).parents('dl');
    var conT = $(this).parents('dd').eq(0).next('.confirm_text');

    var rel = $(this).val();
    if(rel !== pwResult){      
      conDl.addClass('error');
      conDl.removeClass('success');
      conT.text('비밀번호 내용이 동일하지 않습니다. 올바르게 작성해주세요.');
    }else{      
      conDl.addClass('success');
      conDl.removeClass('error');
      conT.text('비밀번호가 확인되었습니다');
    }

  });

  //마우스 올렸을때 패스워드 text로 변경
  var pwIcon = userPw.parents('dl').find('i');
  pwIcon.css({cursor:'pointer'});
  pwIcon.on('mouseenter',function(){
    $(this).removeClass('fa-lock');
    $(this).addClass('fa-eye');
  });
  pwIcon.on('mouseleave',function(){
    $(this).removeClass('fa-eye');
    $(this).addClass('fa-lock');
  });
  pwIcon.on('mousedown',function(e){
    e.preventDefault();
    // console.log(e.button);
    // 마우스 왼버튼 확인
    if(e.button==0){
      userPw.attr({type:'text'});
    }
  });
  pwIcon.on('mouseup',function(e){
    e.preventDefault();
    userPw.attr({type:'password'});
  });

  // 인증 휴대폰 번호 입력
  var mobileResult;
  var mobileCerti = $('#mobileCerti');

  $('#mobileNumber').on('blur',function(){
    // var ck = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
    var rel = $(this).val();
    mobileResult = rel;
    var ck = /^01.{1}\d{3,4}\d{4}$/;
    var thisNum = ck.test(rel);
    console.log(thisNum);

    if(thisNum == true){
      mobileCerti.css({display:'block',position:'absolute',width:'100%',height:'100%',top:0,left:0});
      mobileCerti.attr({'placeholder':'전송된 인증번호를 입력하세요'});
    }
  });
  
  /* //마우스 올렸을때 패스워드 text로 변경
  var PwTxt = userPw.parents('dl').find('.end_icon');
  PwTxt.find('i').on('click',function(e){
    var thisInput = $(this).parent('.end_icon').prev('div').children('input'); //userPw
    // console.log($(this));
    // console.log(thisInput);
    thisInput.attr({'type':'text'});
  });
  */

  /* // chaeeun version
  $('#userId').on('blur',function(){
    var confirmText = $(this).parents('dl').children('.confirm_text');
    // 영문자로 시작하는 6~20자 영문자 또는 숫자
    var ck = /^[a-zA-Z0-9]{4,12}$/;

    var thisNum = ck.test($(this).val());
    console.log(thisNum);
    if( !thisNum ) {
        // alert("아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
        confirmText.show();
        confirmText.empty();
        confirmText.append('<span>아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.</span>');
    }else{
      confirmText.hide();
    }
  });

  $('#userPw').on('blur',function(){
    var confirmText = $(this).parents('dl').children('.confirm_text');
    // 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
    var ck = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    // 숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식
    // var ck = /^[A-Za-z0-9]{6,12}$/;

    var thisNum = ck.test($(this).val());
    console.log(thisNum);

    if( !thisNum ) {
      confirmText.show();
      confirmText.empty();
      confirmText.append('<span>비밀번호는 특수문자 / 문자 / 숫자 포함 형태의 8~15자리여야 합니다.</span>');
    }else{
      confirmText.hide();
    }
  });
  $('#userPw2').on('blur',function(){
    var confirmText = $(this).parents('dl').children('.confirm_text');
    // 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식
    var ck = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    // 숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식
    // var ck = /^[A-Za-z0-9]{6,12}$/;

    var thisNum = ck.test($(this).val());
    console.log(thisNum);

    // if($())
    if( !thisNum ) {
      confirmText.show();
      confirmText.empty();
      confirmText.append('<span>비밀번호는 특수문자 / 문자 / 숫자 포함 형태의 8~15자리여야 합니다.</span>');
    }else{
      confirmText.hide();
    }
  });

  $('#userOtherMail').on('blur',function(){
    var confirmText = $(this).parents('dl').children('.confirm_text');
    // email 체크 정규식
    var ck = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    var thisNum = ck.test($(this).val());
    console.log(thisNum);
    if( !thisNum ) {
      // alert("아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.");
      confirmText.show();
      confirmText.empty();
      confirmText.append('<span>이메일 형식이 잘못됐습니다.</span>');
    }else{
      confirmText.hide();
    }
  });
  */



  // end
})(jQuery);