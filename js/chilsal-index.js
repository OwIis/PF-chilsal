window.onload = function () {
  //로고 버튼이동------------
  var logoBtn = document.querySelector("#title > img")
  logoBtn.onclick = function(){
    location.replace("https://jsj0832.cafe24.com/homework/portfolio/chilsal/chilsal-index.html")
  }

  //배너-------------------
    var bannerImg = [
        { url:"img/top_banner1.jpg",
          title: "banner1"},
        { url:"img/top_banner2.jpg",
        title: "banner2"},
        { url:"img/top_banner3.jpg",
          title: "banner3"},
        { url:"img/top_banner4.jpg",
        title: "banner4"},
        { url:"img/top_banner5.jpg",
          title: "banner5"},
    ]
    var mainPicDiv = document.querySelector(".main-pic");
    var i = 0;
    setInterval(function() { 
        //mainPicDiv.setAttribute("src", bannerImg[i].url)
        //위 식은 요소를바꿈(실제 주소를 바꿈.), 또한 div가 아닌 img를 바꿀때 쓰여야함.
        if (i === 5) {
            i = 0
        }

        mainPicDiv.style.backgroundImage = "url(" + bannerImg[i].url + ")";
        i++;
        //console.log(i);
    }, 2000);
        

  //슬라이더----------------------------
  const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      slidesPerGroup: 1,

      // Navigation arrows
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1900:{
          spaceBetween: 50,
          slidesPerView: 3,
        },
        1024:{
          spaceBetween: 40,
          slidesPerView: 2,
        },
        601:{
          spaceBetween: 40,
          slidesPerView: 2,
        },
        100:{
          spaceBetween: 10,
          slidesPerView: 1,
        }

      }
  });
 

  // sub nav--------------------
  console.log("----------------nav-------------------")
  //for문식(함수)는 addEventLsitener보다 작동속도가 훨씬 빠르기에 
  //event가 작동될때쯤 for는 이미 다음 i로 넘어가므로 즉시실행함수를 사용하여 작동시켜야한다
  var headerNav = document.querySelectorAll(".main-nav > div > div")
  var subNav = document.querySelectorAll(".catalog > div");

  for(var i = 0; i < headerNav.length; i++){
    (function (i) {
      headerNav[i].addEventListener('mouseover', function(){
        subNav[i].style.display = 'block';
        subNav[i].style.visibility = "visible";
        subNav[i].style.opacity = "1";
        subNav[i].style.transition = ".3s linear";
        subNav[i].style.transform = "translateY(0px)";
      });
      headerNav[i].addEventListener('mouseleave', function(e){
        if(e.relatedTarget.classList.contains("clearfix")){
          subNav[i].style.visibility = "hidden";
          subNav[i].style.opacity = "0";
          subNav[i].style.transition = ".3s linear";
          subNav[i].style.transform = "translateY(-300px)";  
        };
      });
      subNav[i].addEventListener('mouseleave', function(){
        subNav[i].style.visibility = "hidden";
        subNav[i].style.opacity = "0";
        subNav[i].style.transition = ".3s linear";
        subNav[i].style.transform = "translateY(-300px)"; 
      });
    }(i));
  }
  console.log("----------------------------------------------")
  

  //side catalog bugger--------------
  var sideCtlgBtnOn = document.querySelector("#sidectlg")
  var sideCtlgBtnOff = document.querySelector(".x")
  var sideCtlg = document.querySelector(".side-ctlg")
  
  sideCtlgBtnOn.addEventListener("click", function() {
    sideCtlg.style.opacity = "1";
    sideCtlg.style.visibility = "visible";
    sideCtlg.style.transform = "translate(0px)";
  });
  sideCtlgBtnOff.addEventListener("click", function() {
    sideCtlg.style.opacity = "0";
    sideCtlg.style.visibility = "hidden";
    sideCtlg.style.transform = "translate(999px)";
  });


  //섹션별 스크롤이벤트---------------------------
  $(window).scroll(function(){
    $("#main-conts, .nevaehconts2 ").each(function() {
      //아래 이벤트 해설: 타겟부위의 1/3.5 y값만큼 내려간것보다  화면에 보이는 위치값이 커질때 해당 이벤트 실행
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 9;
        //offset은 해당부위가 화면값(0,0)에서부터 얼마나 떨어져있는지. outerHeight는 해당요소의 가장 바깥쪽 길이(마진값제외)
      var buttom_of_window = $(window).scrollTop() + $(window).height();
        //scrollTop은 스크롤했을때 화면에서 y축의 값. height는 화면창의 길이
      
      if(buttom_of_window > bottom_of_element){
        $(this).animate({
          'opacity': "1",
          "top" : "0px"
        },1000)
      };
    });
  });


    $(window).scroll(function(){
      //세부내용 스크롤-moment img (800)
      $(".nevaehconts>div>img").each(function() {
       //아래 이벤트 해설: 타겟부위의 1/3.5 y값만큼 내려간것보다  화면에 보이는 위치값이 커질때 해당 이벤트 실행
       var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 4;
         //offset은 해당부위가 화면값(0,0)에서부터 얼마나 떨어져있는지. outerHeight는 해당요소의 가장 바깥쪽 길이(마진값제외)
       var buttom_of_window = $(window).scrollTop() + $(window).height();
         //scrollTop은 스크롤했을때 화면에서 y축의 값. height는 화면창의 길이
      
       if(buttom_of_window > bottom_of_element){
         console.log("fine!")
         $(this).animate({
           'opacity': "1",
           "top" : "0px"
         },800)
       };
     });
   });

    $(window).scroll(function(){
      //세부내용 스크롤-moment p (800)
      $(".nevaehconts>div>p").each(function() {
      //아래 이벤트 해설: 타겟부위의 1/3.5 y값만큼 내려간것보다  화면에 보이는 위치값이 커질때 해당 이벤트 실행
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        //offset은 해당부위가 화면값(0,0)에서부터 얼마나 떨어져있는지. outerHeight는 해당요소의 가장 바깥쪽 길이(마진값제외)
      var buttom_of_window = $(window).scrollTop() + $(window).height();
        //scrollTop은 스크롤했을때 화면에서 y축의 값. height는 화면창의 길이
      
      if(buttom_of_window > bottom_of_element){
        console.log("fine!")
        $(this).animate({
          'opacity': "1",
          "top" : "0px"
        },1000)
      };
    });
  });


  $(window).scroll(function(){
      //세부내용 스크롤-5프로덕트 fixed(600)
      $("#lemon, #whtflw, #wood, #charcol, #pink").each(function() {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 8;
      var buttom_of_window = $(window).scrollTop() + $(window).height();
      
      if(buttom_of_window > bottom_of_element){
        console.log("fine!")
        $(this).animate({
          'opacity': "1",
          "top" : "0px"
        },600)
      };
    });
  });


}

