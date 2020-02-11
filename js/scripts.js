$(document).ready(function(){

    var owl = $('.owl-carousel');

    $('.owl-carousel').owlCarousel({
        //numero de items global
        //items:5,
        loop:true, 
        margin:10,
        autoplay:true,
        //Animate
        animateOut: 'slideOutLeft',
        animateIn: 'slideInRight',
        //Time / Play-Pause
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        
        //numero 1 en el centro
        center: false,
        //Video
        video:true,
        videoWidth: false,
        videoHeight: false,
        dots: true,
        

        //Navegacion
        nav:false,
        //navText: ["<img src='myprevimage.png'>","<img class='chico' src='../style/next.png'>"],

        stagePadding:0, //padding para mostrar demás
        smartSpeed:450, //tiempo transicion

        URLhashListener:true,
        startPosition: 'URLHash',

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3,
            },
            1000:{
                items:1
            }
        }
    })

    // Listen to owl events:  URLHASH!!!
    owl.on('changed.owl.carousel', function(event) {
        location.hash = 'slide' + event.property.value;
    })

    // MouseWell Slider
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('prev.owl');
        } else {
            owl.trigger('next.owl');
        }
        e.preventDefault();
    });



  });