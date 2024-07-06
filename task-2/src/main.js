function closeNotification() {
  const notificationCard = document.getElementById("notificationCard");
  notificationCard.style.display = "none";
}

$(document).ready(function () {
  // Function to add class based on window width
  function addActiveClass() {
    if ($(window).width() <= 768) {
      $(".pages").addClass("owl-carousel");
      $(".pages").addClass("owl-theme");
    } else {
      $(".pages").removeClass("owl-carousel");
      $(".pages").removeClass("owl-theme");
    }

    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  // Initial check on document ready
  addActiveClass();

  // Bind to resize event
  $(window).resize(function () {
    addActiveClass();
  });
});
