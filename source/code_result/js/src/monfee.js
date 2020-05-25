// monfee.js

(function($){
  // start
  var win = $(window);
  var winH = win.height();

  var wrap = $('#wrap');
  wrap.height(winH);
  // ---------------------------------------
  var headBox = $('#headBox');
  headBox.wrap('<div class="headBox_wrap"></div>');

  var headBoxWrap = headBox.parent('div');
  var headBoxH = headBox.css('height');
  var headBoxBg = headBox.css('backgroundColor');

  headBoxWrap.css({width:'100%',height:headBoxH,backgroundColor:headBoxBg,position:'fixed',top:0,left:0,zIndex:1000,boxShadow: '0.2rem 0.2rem 0.2rem rgba(55, 55, 55, 0.7)'});
  headBox.css({maxWidth:'940px',margin:'auto',backgroundColor:'transparent'});


  // ---------------------------------------
  var bestNewsBox = $('#bestNewsBox');
  bestNewsBox.wrap('<div class="bestNewsBox_wrap"></div>')

  var bestNewsBoxWrap = $('.bestNewsBox_wrap');
  var bestNewsBoxBg = bestNewsBox.css('backgroundColor');
  bestNewsBoxWrap.css({width:'100%',backgroundColor:bestNewsBoxBg});
  bestNewsBox.css({width:'940px',backgroundColor:'transparent'});

  // ---------------------------------------
  var gnbArr = [
    {title : 'story', // gnbArr[0].title
    subList : [       // gnbArr[0].subList
    // gnbArr[0].subList[0].linkName, gnbArr[0].subList[0].link
    {linkName : '몽피이야기', link : 'storyMonfee.html'},
    // gnbArr[0].subList[1].linkName, gnbArr[0].subList[1].link
    {linkName : '회사소개', link : 'aboutCompany.html'},
    {linkName : '후원업체', link : 'sponCompany.html'}
  ]},
  {title : 'menu',  // gnbArr[1].title
  subList : [
    // gnbArr[1].subList[0].linkName, gnbArr[1].subList[0].link
      {linkName : '커피류', link : 'storyMonfee.html'},
      {linkName : '기타음료', link : 'aboutCompany.html'},
      {linkName : '음식 및 디저트', link : 'sponCompany.html'},
      {linkName : '상품', link : 'sponCompany.html'},
      {linkName : '기타', link : 'sponCompany.html'}
    ]},
    {title : 'store', // gnbArr[2].title
    subList : [
      {linkName : '신규매장', link : 'storyMonfee.html'},
      {linkName : '매장찾기', link : 'aboutCompany.html'},
      {linkName : '가맹문의', link : 'sponCompany.html'},
      {linkName : '창업설명회', link : 'sponCompany.html'},
      {linkName : '창업스토리', link : 'sponCompany.html'}
    ]},
    {title : 'news',  // gnbArr[3].title
    subList : [
      {linkName : '이벤트', link : 'storyMonfee.html'},
      {linkName : '공지사항', link : 'aboutCompany.html'},
      {linkName : '프로모션', link : 'sponCompany.html'},
      {linkName : '미디어광고', link : 'sponCompany.html'}
    ]}
  ];
  // -------------------------------------------
  var gnbBox = $('#gnbBox');

  gnbBox.append('<ul class="gnb_area clearfix"></ul>');
  // console.log(gnbArr.length);
  var gnbArea = gnbBox.children('.gnb_area');

  var i = 0 ;
  var gnbDt, gnbTitle, gnbSub, gnbSubText, gnbSubLink;
  for(;i<gnbArr.length;i++){
    gnbArea.append('<li> <dl> <dt></dt> <dd></dd> </dl> </li>');

    gnbDt = gnbArea.children('li').eq(i).find('dt');
    gnbDt.attr({tabIndex:0});

    gnbTitle = gnbArr[i].title;
    gnbDt.text(gnbTitle);

    gnbArea.find('dd').eq(i).append('<ul class="gnb_sub"></ul>');
    gnbSub = gnbArea.find('.gnb_sub');
    
    gnbSubLength = gnbArr[i].subList.length;
    for(var j=0;j<gnbSubLength;j++){
      gnbSub.eq(i).append('<li><a></a></li>');
      gnbSubLink = gnbSub.eq(i).find('li').eq(j).find('a');

      var gnbSubText=gnbArr[i].subList[j].linkName;
      gnbSubLink.text(gnbSubText);
      var gnbSubHref= gnbArr[i].subList[j].link;
      gnbSubLink.attr({'href':gnbSubHref});
    }
  }
  
  gnbDd = gnbArea.find('dd');
  gnbDd.hide();
  gnbArea.on('mouseenter',function(){
    gnbDd.stop().slideDown();
  });
  headBox.on('mouseleave',function(){
    gnbDd.stop().slideUp();
  });

  var gnbList = gnbArea.children('li');
  var gnbListLength = gnbList.length;
  gnbList.css({width: 100 / gnbListLength + '%'});



  // end
})(jQuery);