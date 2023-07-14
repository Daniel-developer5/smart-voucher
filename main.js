$(() => {
  $('.slick.text-slider').slick({
    arrows: false,
    dots: true,
  })

  $('.voucher-img-slider').slick({
    arrows: false,
    dots: false,
    speed: 1000,
  })

  $('.text-slider-prev').click(() => {
    $('.slick.text-slider').slick('slickPrev', true)
    $('.voucher-img-slider').slick('slickPrev', true)
  })

  $('.text-slider-next').click(() => {
    $('.slick.text-slider').slick('slickNext', true)
    $('.voucher-img-slider').slick('slickNext', true)
  })

  $('.animate-offers').on('mousemove', function (e) {
    const rateX = 0.02
    const rateY = 0.05
    const y = e.clientY - $(this).offset().top
    const x = e.clientX - $(this).offset().left

    $(this).find('.offer-wrap').each(function (i) {
      const translateX = i % 2 === 0 ? x * rateX : -x * rateX
      const translateY = i % 2 === 0 ? y * rateY : -y * rateY

      $(this).css(
        'transform',
        `translate(${translateX}px, ${translateY}px)`
      )
    })
  })

  $('.animate-offers').on('mouseleave', function () {
    $(this).find('.offer-wrap').css('transform', 'none')
  })

  const toggleMobileMenu = () => {
    $('.mobile-menu').toggleClass('open')
    const isOpen = $('.mobile-menu').hasClass('open')

    $('.body-overlay').toggleClass(isOpen ? 'open' : 'show')

    setTimeout(() => {
      $('.body-overlay').toggleClass(!isOpen ? 'open' : 'show')
    }, isOpen ? 100 : 300)
  }

  $('.mobile-menu-trigger').click(toggleMobileMenu)
  $('.body-overlay').click(toggleMobileMenu)

  $('.appear-anim').each(function () {
    if ($(this).offset().top < window.innerHeight) {
      $(this).addClass('animated')
    }
  })

  const scrollAnim = () => {
    if ($('.appear-anim').length === $('.appear-anim.animated').length) {
      $(window).off('scroll', scrollAnim)
      return
    }

    $('.appear-anim').each(function () {
      if ($(this).hasClass('animated')) {
        return
      }

      if (window.scrollY >= $(this).offset().top - 700) {
        $(this).addClass('animated')
      }
    })
  }

  $(window).on('scroll', scrollAnim)

  if ($('.faq-accordions').accordion) {
    $('.faq-accordions').accordion({
      collapsible: true,
    })
  }

  const emailRegEx = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

  $('.contact-form').on('submit', function (e) {
    e.preventDefault()

    $(this).find('.text-field').each(function () {
      const input = $(this).find('.text')
      
      if (!input.val()) {
        $(this).addClass('error')
      } else {
        $(this).removeClass('error')
      }

      if (input.hasClass('email')) {
        if (!emailRegEx.test(input.val())) {
          $(this).addClass('error')
        } else {
          $(this).removeClass('error')
        }
      }
    })

    if (!$(this).find('.error').length) {
      alert('Message has sent!')
    }
  })
})
