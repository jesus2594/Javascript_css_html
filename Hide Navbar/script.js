let navbar = document.querySelector('nav');
         var scrollPrev = window.pageYOffset;
         window.onscroll = function(){
           var scrollCur = window.pageYOffset;
           if(scrollPrev > scrollCur){
             navbar.style.top = "0";
           }else{
             navbar.style.top = "-90px";
         
           }
           scrollPrev = scrollCur;
         }