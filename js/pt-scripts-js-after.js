jQuery(document).ready(function (jQuery){if(jQuery('.banner-area-5cbebc2ec255a .banner-slider').find('.banner-item').length > 1){let $area_5cbebc2ec255a = jQuery('.banner-area-5cbebc2ec255a'), $slider_5cbebc2ec255a = $area_5cbebc2ec255a.find('.banner-slider'), $nav_5cbebc2ec255a = $area_5cbebc2ec255a.find('.circle-navigation'), video = '', audio = '', slides = [];$slider_5cbebc2ec255a.find('.swiper-slide').each(function(index){slides[index] = jQuery(this).find('.bg-overlay .image').css('background-image')});let $banner_slider_swiper_5cbebc2ec255a = new Swiper($area_5cbebc2ec255a,{loop:true, speed:0, pagination:{el:$nav_5cbebc2ec255a.find('.counter'), type:'custom', renderCustom:function(swiper, current, total){return '<span class="current">'+leadZero(current)+'</span><span class="sep"> / </span><span class="total">'+leadZero(total)+'</span>'},},allowTouchMove:false, navigation:{nextEl:$area_5cbebc2ec255a.find('.next'), prevEl:$area_5cbebc2ec255a.find('.prev'),}, on:{slidePrevTransitionStart:function(){circle_navigation($nav_5cbebc2ec255a, 'left')}, slideNextTransitionStart:function(){circle_navigation($nav_5cbebc2ec255a, 'right')}, transitionStart:function(){jQuery(this.slides).each(function(){let event = 'pause';if(jQuery(this).hasClass('swiper-slide-active') && !jQuery(this).find('.bg-overlay .video').hasClass('disable-on-scroll')){event = 'play'}control_video(jQuery(this).find('.bg-overlay .video'), event)})},},});$area_5cbebc2ec255a.swipe({threshold:20, preventDefaultEvents:false, swipeLeft:function(){$banner_slider_swiper_5cbebc2ec255a.slidePrev()}, swipeRight:function(){$banner_slider_swiper_5cbebc2ec255a.slideNext()}, swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection){if(phase == 'start'){$area_5cbebc2ec255a.find('.play-video').addClass('disable-click')}else if(phase == 'end'){$area_5cbebc2ec255a.find('.play-video').removeClass('disable-click')}}})}else{var $area_5cbebc2ec255a = jQuery('.banner-area-5cbebc2ec255a'), $slider = $area_5cbebc2ec255a.find('.banner-slider');let event = 'pause';if(!$slider.find('.bg-overlay .video').hasClass('disable-on-scroll')){event = 'play'}control_video($slider.find('.bg-overlay .video'), event)}});
jQuery(document).ready(function (jQuery){jQuery(window).on('load resize', function(){jQuery('.number-block-5cc140ad9607c').textfill({maxFontPixels:'700', widthOnly:true, allowOverflow:true})})});
jQuery(document).ready(function (jQuery){if(jQuery('.portfolio-5cc15397b9b3d .portfolio-slider').find('.ps-item').length > 1){var $area = jQuery('.portfolio-5cc15397b9b3d .portfolio-slider'), $prev = jQuery('.portfolio-5cc15397b9b3d .portfolio-slider-prev'), $next = jQuery('.portfolio-5cc15397b9b3d .portfolio-slider-next');var $prev_slider = new Swiper($prev,{loop:true, allowTouchMove:false, direction:'vertical',});var $next_slider = new Swiper($next,{loop:true, allowTouchMove:false, direction:'vertical',});var $portfolio_slider = new Swiper($area,{loop:true, controller:{control:[$prev_slider, $next_slider],}, navigation:{nextEl:$next, prevEl:$prev,},})}});
jQuery(document).ready(function (jQuery){var $testimonials = jQuery('.testimonials-block'), $testimonials_container = $testimonials.find('.swiper-container');if($testimonials.find('.swiper-slide').length > 1){var $testimonials_swiper = new Swiper($testimonials_container,{loop:true, spaceBetween:30, navigation:{nextEl:$testimonials.find('.next'), prevEl:$testimonials.find('.prev'),},})}else{$testimonials.find('[data-magic-cursor]').removeAttr('data-magic-cursor');$testimonials.find('.next').hide();$testimonials.find('.prev').hide()}});
jQuery(document).ready(function (jQuery){var $team = jQuery('.team-block'), $team_container = $team.find('.swiper-container');var $team_swiper = new Swiper($team_container,{loop:true, spaceBetween:30, autoplay:{delay:5000,}, watchSlidesVisibility:true, navigation:{nextEl:$team.find('.next'), prevEl:$team.find('.prev'),}, breakpointsInverse:true, breakpoints:{200:{slidesPerView:1}, 576:{slidesPerView:2}, 768:{slidesPerView:3},}})});
jQuery(document).ready(function (jQuery){var $carousel = jQuery('.brand-block-5cc2c456b9601'), $carousel_swiper = new Swiper($carousel,{loop:true, autoplay:{delay:5000,}, spaceBetween:30, watchSlidesVisibility:true, loopAdditionalSlides:2, breakpointsInverse:true, breakpoints:{200:{slidesPerView:1}, 576:{slidesPerView:2}, 768:{slidesPerView:3}, 992:{slidesPerView:4}, 1200:{slidesPerView:5},}})});