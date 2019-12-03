$(function () {
    var controller = new ScrollMagic.Controller();
    var h = $(window).height();

    var heroTl = new TimelineMax({
        reverse: true,
        ease: Expo.easeOut
    });

    var heroTlNext = new TimelineMax({
        reverse: true,
          ease: Expo.easeOut
    });

    var tlScroll = new TimelineMax({
        reverse: true,
          ease: Expo.easeOut
    });

    var tlFinal = new TimelineMax({
        reverse: true,
          ease: Expo.easeOut
    });

    var tlFinalContent = new TimelineMax({
        reverse: true,
          ease: Expo.easeOut
    });

    var scene_01 = $('.hero');
    var scene_02 = $('.info');
    var scene_02_scroll = $('.info__scroll');
    var scene_03 = $('.integral');
    var scene_03_content = $('.integral-content');

    heroTl.to(scene_01, 2, {opacity: 0});
    heroTlNext.to(scene_02, 2, {opacity: 1});
    tlScroll.staggerTo(scene_02_scroll, 5, {x: "-100%"}, '+=30');
    tlFinal.to(scene_03, 7, {opacity: 1, zIndex: 20});
    tlFinalContent.staggerTo(scene_03_content, 0.8, {y: 0, opacity: 1}, '+=10');


    var heroScene = new ScrollMagic.Scene({
        triggerElement: $('.scene-wrap'),
        offset: h,
        triggerHook: 0,
        reverse: true,
        duration: "100%"
    })
        .setTween(heroTl)
        // .addIndicators()
        .addTo(controller);


    var heroSceneNext = new ScrollMagic.Scene({
        triggerElement: $('.scene-wrap'),
        offset: h * 1.3,
        triggerHook: 0,
        reverse: true,
        duration: "100%"
    })
        .setTween(heroTlNext)
        // .addIndicators()
        .addTo(controller);

    var sceneScroll = new ScrollMagic.Scene({
        triggerElement: $('.scene-wrap'),
        offset: h * 2.5,
        triggerHook: 0,
        reverse: true,
        duration: h * 3
    })
        .setTween(tlScroll)
        // .addIndicators()
        .addTo(controller);

    var sceneFinal = new ScrollMagic.Scene({
        triggerElement: $('.scene-wrap'),
        offset: h * 5.5,
        triggerHook: 1,
        reverse: true,
        duration: h / 2
    })
        .setTween(tlFinal)
        // .addIndicators()
        .addTo(controller);

    var sceneFinalContent = new ScrollMagic.Scene({
        triggerElement: $('.scene-wrap'),
        offset: h * 6,
        triggerHook: 0.5,
        reverse: true,
        tweenChanges: true,
        duration: h + h / 7
    })
        .setTween(tlFinalContent)
        // .addIndicators()
        .addTo(controller);

});


$(window).on('load', function () {
    $('.scene__overlay').addClass('is-hidden');
});