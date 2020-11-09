$(function(){
    let documentEl = $(document), parallaxBg = $('.parallax-window'), parallaxBg2 = $('.container-fluide.deux'), parallaxBg3 = $('.container-fluide.contact');

    //gestion de l'effet parallax sur les images lors du scroll 
    documentEl.on('scroll',function(){
        let currScroll = documentEl.scrollTop();
        parallaxBg.css('background-position','0' + -currScroll/4 + 'px');
        parallaxBg2.css('background-position','0' + -currScroll/5 + 'px');
        parallaxBg3.css('background-position','0' + -currScroll/17 + 'px');
    });

    //affichage des blocs
    $('.container-fluide .container .block .block1').show(1000);
    $('.container-fluide .container .block2').show(1000);
});
