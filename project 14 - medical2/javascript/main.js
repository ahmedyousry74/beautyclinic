$(document).ready(function(){

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });


    $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });

    $(document).ready(function(){
        $('.owl-carousel').owlCarousel();
      });


   //  start scrollTop
   $(function(){


    var scrollbutton = $("#scroll");

    $(window).scroll(function(){

        if ( $(this).scrollTop()>=300)
        {
            scrollbutton.show();
        }
        else
        {
            scrollbutton.hide();
        }
    });

    scrollbutton.click(function(){
        $("html,body").animate({ scrollTop : 0 } , 1000);
    });
    

  }); 



  // wooooooooow
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
// woooooooooooow



// counter
$(".num").counterUp({
  delay:10,
  time:3000
});




//To popUp image

let ourGallery = document.querySelectorAll(".images .img-box img");

ourGallery.forEach(img => {

        img.addEventListener('click' , (e) => {

            // create element div
            let overlay = document.createElement("div");

            // create classname for div
            overlay.className = "popup-overlay";

            // append child to body
            document.body.appendChild(overlay);



            // create element div
            let popUpbox = document.createElement("div");

            // create class for div
            popUpbox.className = "popup-box";


          


            //create close
            let close = document.createElement("span");
            //create class to span
            close.className= "close-span";
            // create text
            let textClose = document.createTextNode("X");
            // append text to span
            close.appendChild(textClose);
            // append close to popup-box
            popUpbox.appendChild(close);

            // to close overlay & popUpbox
            document.addEventListener('click' , (e) =>{
               if(e.target.className == 'close-span')
               {
                   e.target.parentNode.remove();

                   document.querySelector(".popup-overlay").remove();
               }
            });


            // create element img
            let popUpimage = document.createElement("img");

            // image src
            popUpimage.src = img.src;

            // append popimage to div
            popUpbox.appendChild(popUpimage);

            // append popupbox to body
            document.body.appendChild(popUpbox);

        });
});




$('#demo').beforeAfter({

  // 'h': horizontal
  // 'v': vertical
  direction : "h",

  // auto returns to center
  returnToCenter : 'true',

  // background color/image of slider
  background: 'gray',

  // slider size
  barSize: 3,

  // start point
  start: 'center',

  // callback
  onReady: function(){}
  
});











});





