$(document).ready(function () {
   //cart hover effect
   $(".logo .innerlogo .right").hover(function () {
      $(this).css({
         "background": "#f3f5f7",
         "border": "gray 1px solid"
      });
      $(".one").attr("src", "img/icon/25.png");
      $(".two").attr("src", "img/icon/24.png");
      $(".logo .innerlogo .right span").css({
         "color": "red"
      });
      $(".logo .innerlogo .cart").css({
         "display": "block"
      });
   }, function () {
      $(".one").attr("src", "img/icon/26.png");
      $(".two").attr("src", "img/icon/23.png");
      $(this).css({
         "background": "red"
      });
      $(".logo .innerlogo .right span").css({
         "color": "white"
      });
      $(".logo .innerlogo .cart").css({
         "display": "none"
      });
   });
   $(".logo .innerlogo .cart").hover(function () {
      $(".logo .innerlogo .right .one").attr("src", "img/icon/25.png");
      $(".logo .innerlogo .right .two").attr("src", "img/icon/24.png");
      $(".logo .innerlogo .right span").css({
         "color": "red"
      });
      $(".logo .innerlogo .right").css({
         "background": "#f3f5f7",
         "border": "gray 1px solid"
      });
      $(this).css({
         "display": "block"
      });
   }, function () {
      $(".logo .innerlogo .right .one").attr("src", "img/icon/26.png");
      $(".logo .innerlogo .right .two").attr("src", "img/icon/23.png");
      $(".logo .innerlogo .right span").css({
         "color": "white"
      });
      $(".logo .innerlogo .right").css({
         "background": "red"
      });
      $(this).css({
         "display": "none"
      });
   });

   //banner .left
   $(".banner .left .classify").hover(function () {
      // over
      $(this).css({
         "color": "red",
         "background": "white"
      });
      $(this).children().attr("src", "img/icon/24.png");
      // $(".classify img").eq($(this).index()).attr("src","img/icon/24.png");
      $(".subleft .main")
         .eq($(this).index() - 1).css({
            "display": "block"
         });

   }, function () {
      // out
      $(this).css({
         "color": "white",
         "background": "red"
      });
      $(this).children().attr("src", "img/icon/23.png");
      $(".subleft .main")
         .eq($(this).index() - 1).css({
            "display": "none"
         });
   });

   $(".banner .subleft .main").hover(function () {
      $(this).css({
         "display": "block"
      });
   }, function () {
      $(this).css({
         "display": "none"
      });
   });

   //轮播图 banner-middle
   var img = $(".banner .middle .img img");
   var index = 0;
   var time;

   function imgChange() {
      for (var i = 0; i < img.length; i++) {
         img[i].style.display = "none";
         $(".banner .middle .dots p").eq(i).removeClass("pdot");
      }
      img[index].style.display = "block";
      $(".banner .middle .dots p").eq(index).addClass("pdot");
   }

   function arrow() {
      $(".banner .middle .arrow .left").click(function (e) {
         index--;
         if (index < 0) {
            index = img.length - 1;
         }
         imgChange();
      });
      $(".banner .middle .arrow .right").click(function (e) {
         index++;
         if (index >= img.length) {
            index = 0;
         }
         imgChange();
      });
   }

   function dots() {
      $(".banner .middle .dots p").click(function (e) {
         index = $(this).index();
         imgChange();
      });
   }

   function image() {
      $(".banner .middle").mouseover(function () {
         if (time) clearInterval(time);
      });
      $(".banner .middle").mouseout(function () {
         time = setInterval(function () {
            index++;
            if (index >= img.length) {
               index = 0;
            }
            imgChange();
         }, 2000);
      });
      $(".banner .middle ").mouseout();
      arrow();
      dots();

   }

   image();

   //floor
   $(".floor .innerfloor .head .innernav a").mouseover(function () {
      $(".floor .innerfloor .head .navarrow img").eq($(this).index()).css({
         "display": "block"
      }).siblings().css({
         "display": "none"
      });

      $(".floor .innerfloor .main .one").eq($(this).index()).css({
         "display": "block"
      }).siblings().css({
         "display": "none"
      });

   });
   $(".floor .innerfloor2 .head .innernav a").mouseover(function () {
      $(".floor .innerfloor2 .head .navarrow img").eq($(this).index()).css({
         "display": "block"
      }).siblings().css({
         "display": "none"
      });

      $(".floor .innerfloor2 .main .one").eq($(this).index()).css({
         "display": "block"
      }).siblings().css({
         "display": "none"
      });

   });


   //rightNav
   $(".rightNav .r-nav ").hover(function () {
      $(".rightNav .r-nav img").eq($(this).index()).css({
         "background": "#71777d"
      });
      $(".rightNav .r-nav div").eq($(this).index()).stop().animate({width:"toggle"},300);
   }, function () {
      $(".rightNav .r-nav img").eq($(this).index()).css({
         "background": "#b7bbbf"
      });
      $(".rightNav .r-nav div").eq($(this).index()).stop().animate({width:"toggle"},300);
   });
});