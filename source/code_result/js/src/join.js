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
  
  var date = new Date();
  console.log(date);



  // end
})(jQuery);