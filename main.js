// ------------------------ code okay

// $(document).ready(function () {
//   $(".header__cart").click(function () {
//     $(".basket").fadeToggle();
//   });

//   $(".basket__close").click(function () {
//     $(this).parents(".basket").fadeOut();
//   });

//   $(".product-card__order-plus").on("click", function () {
//     var price = parseInt($(".product-card__price span").text(), 10);
//     var currentNumber = parseInt($(".product-card__number").text(), 10);
//     var newNumberPlus = currentNumber + 1;
//     var total = price * newNumberPlus;

//     $(".product-card__number").text(newNumberPlus);

//     $(".add").click(function () {
//       $(".header__cart-number").removeClass("none");
//       $(".header__cart-number").text(newNumberPlus);
//       $(".basket__empty").hide();
//       $(".basket__info").css("display", "flex");
//       $(".basket__price-holder").text($(".product-card__price").text());
//       $(".basket__number-holder").text(newNumberPlus);
//       $(".basket__total-price").text("$" + total);
//       $(".button--primary").removeClass("none");
//     });
//   });

//   $(".product-card__order-minus").click(function () {
//     var price = parseInt($(".product-card__price span").text(), 10);
//     var currentNumber = parseInt($(".product-card__number").text(), 10);
//     var newNumberMinus = currentNumber - 1;
//     var total = price * newNumberMinus;
//     if (currentNumber >= 1) {
//       $(".product-card__number").text(newNumberMinus);
//       $(".header__cart-number").text(newNumberMinus);
//       $(".basket__price-holder").text($(".product-card__price").text());
//       $(".basket__number-holder").text(newNumberMinus);
//       $(".basket__total-price").text("$" + total);
//     }

//     if (newNumberMinus === 0) {
//       $(".header__cart-number").addClass("none");
//       $(".basket__info").hide();
//       $(".basket__empty").show();
//       $(".button--checkOut").hide();
//     }
//   });

//   $(".product-card__image-thumbnails a").click(function (e) {
//     e.preventDefault();
//     var h = $(".product-card__image-preview img").attr("src");
//     $(".product-card__image-preview img").attr("src", $(this).attr("href"));
//   });

//   $(".product-card__image-thumbnails a").click(function () {
//     $(this).siblings().children().css("border-width", "0px")
//     $(this).children().css("border-width", "3px");
//   });

//   $(".product-card__image-preview").click(function (a) {
//     a.preventDefault();
//     $(".product-card__gallery-lightBox").removeClass("none");
//   });
// });

//---------------------- code hamrah ai----------------------------------------

// $(document).ready(function () {
//     $(".header__cart").click(function () {
//       $(".basket").fadeToggle(); // استفاده از fadeToggle
//     });

//     $(".basket__close").click(function () {
//       $(this).parents(".basket").fadeOut();
//     });

//     function updateBasket(newNumber) {
//       const price = parseInt($(".product-card__price span").text(), 10);
//       const total = price * newNumber;

//       $(".product-card__number").text(newNumber);
//       $(".header__cart-number").removeClass("none").text(newNumber);
//       $(".basket__empty").hide();
//       $(".basket__info").css("display", "flex");
//       $(".basket__price-holder").text($(".product-card__price").text());
//       $(".basket__number-holder").text(newNumber);
//       $(".basket__total-price").text("$" + total);
//       $(".button--primary").removeClass("none");
//     }

//     $(".product-card__order-plus").on("click", function () {
//       const currentNumber = parseInt($(".product-card__number").text(), 10);
//       const newNumberPlus = currentNumber + 1;
//       updateBasket(newNumberPlus);
//     });

//     $(".add").click(function () {
//       const currentNumber = parseInt($(".product-card__number").text(), 10);
//       const newNumberPlus = currentNumber + 1;
//       updateBasket(newNumberPlus);
//     });

//     $(".product-card__order-minus").click(function () {
//       let currentNumber = parseInt($(".product-card__number").text(), 10);
//       if (currentNumber > 0) {
//         const newNumberMinus = currentNumber - 1;
//         updateBasket(newNumberMinus);
//       }

//       if (currentNumber === 1) {
//         $(".header__cart-number").addClass("none");
//         $(".basket__info").hide();
//         $(".basket__empty").show();
//         $(".button--primary").addClass("none");
//       }
//     });

//     $(".product-card__image-thumbnails a").click(function (e) {
//       e.preventDefault();
//       const newSrc = $(this).attr("href");
//       $(".product-card__image-preview img").attr("src", newSrc);
//     });

//     $(".product-card__image-preview").click(function (e) {
//       e.preventDefault();
//       $(".product-card__gallery-lightBox").removeClass("none");
//     });
//   });

// --------**************** code mashti khodam ***********--------------------

// $(document).ready(function () {
//   //   function getPrice() {
//   //     return parseInt($(".product-card__price span").text(), 10);
//   //   }
//   //   var price = getPrice();

//   //   function getNumber() {
//   //     return parseInt($(".product-card__number").text(), 10);
//   //   }

//   //   var currentNumber = getNumber();

//   $(".header__cart").click(function () {
//     $(".basket").fadeToggle();
//   });

//   $(".basket__close").click(function () {
//     $(this).parents(".basket").fadeOut();
//   });

//   function getPrice() {
//     return parseInt($(".product-card__price span").text(), 10);
//   }
//   var price = getPrice();

//   function getNumber() {
//     return parseInt($(".product-card__number").text(), 10);
//   }

//   function updateBasket(newNumber) {
//     var totalPrice = newNumber * price;

//     if (newNumber > 0) {
//       $(".product-card__number").text(newNumber);

//       //   $(".header__cart-number").removeClass("none");

//       $(".header__cart-number").text(newNumber);

//       //   $(".basket__empty").hide();
//       //   $(".basket__info").css("display", "flex");

//       $(".basket__price-holder").text("$" + price + ".00");
//       $(".basket__number-holder").text(newNumber);
//       $(".basket__total-price").text("$" + totalPrice);

//       //   $(".button--checkOut").removeClass("none");
//     } else {
//       $(".header__cart-number").addClass("none");
//       $(".basket__empty").show();

//       $(".basket__info").css("display", "none");
//       $(".button--checkOut").addClass("none");
//     }

//     if (newNumber == 0) {
//       $(".product-card__number").text("0");
//     }
//   }

//   $(".product-card__order-plus").on("click", function () {
//     var currentNumber = getNumber();

//     var newNumberPlus = currentNumber + 1;
//     updateBasket(newNumberPlus);
//   });

//   $(".product-card__order-minus").click(function () {
//     var currentNumber = getNumber();
//     newNumberMinus = currentNumber - 1;
//     updateBasket(newNumberMinus);
//   });

//   $(".add").click(function () {
//     $(".header__cart-number").removeClass("none");

//     $(".basket__empty").hide();
//     $(".basket__info").css("display", "flex");

//     $(".button--checkOut").removeClass("none");
//   });

//   $(".basket__delete").click(function () {
//     var n = 0;
//     updateBasket(n);
//   });

//   $(".product-card__image-thumbnails a").click(function (e) {
//     e.preventDefault();
//     $(".product-card__image-preview img").attr("src", $(this).attr("href"));
//   });

//   $(".product-card__image-thumbnails a").click(function () {
//     $(this).siblings().children().css("border-width", "0px");
//     $(this).children().css("border-width", "3px");
//   });
//   $(".header__menu-icon").click(function () {
//     $(".responsive-navigation").prepend(
//       '<img src="./images/icon-close.svg" class="responsive-navigation-close" alt="">'
//     );
//     $(".responsive-navigation").addClass("responsive-navigation-transfotm");
//   });
//   // $('.responsive-navigation-close').on('click',function(){

//   //   $('.responsive-navigation').hide()
//   // })
//   $(".responsive-navigation").on("click", ".responsive-navigation-close", function () {
//     $(".responsive-navigation-close").remove();
//     $(".responsive-navigation").removeClass("responsive-navigation-transfotm");
//   });
// });


// ---------------- az khodam mashti tamiz/=======================

$(document).ready(function () {
  $(".header__cart").click(function () {
    $(".basket").fadeToggle();
  });

  $(".basket__close").click(function () {
    $(this).parents(".basket").fadeOut();
  });

  function getPrice() {
    return parseInt($(".product-card__price span").text(), 10);
  }
  var price = getPrice();

  function getNumber() {
    return parseInt($(".product-card__number").text(), 10);
  }

  function updateBasket(newNumber) {
    var totalPrice = newNumber * price;

    if (newNumber > 0) {
      $(".product-card__number").text(newNumber);

      $(".header__cart-number").text(newNumber);

      $(".basket__price-holder").text("$" + price + ".00");
      $(".basket__number-holder").text(newNumber);
      $(".basket__total-price").text("$" + totalPrice);

    } else {
      $(".header__cart-number").addClass("none");
      $(".basket__empty").show();

      $(".basket__info").css("display", "none");
      $(".button--checkOut").addClass("none");
    }

    if (newNumber == 0) {
      $(".product-card__number").text("0");
    }
  }

  $(".product-card__order-plus").on("click", function () {
    var currentNumber = getNumber();

    var newNumberPlus = currentNumber + 1;
    updateBasket(newNumberPlus);
  });

  $(".product-card__order-minus").click(function () {
    var currentNumber = getNumber();
    newNumberMinus = currentNumber - 1;
    updateBasket(newNumberMinus);
  });

  $(".add").click(function () {
    $(".header__cart-number").removeClass("none");

    $(".basket__empty").hide();
    $(".basket__info").css("display", "flex");

    $(".button--checkOut").removeClass("none");
  });

  $(".basket__delete").click(function () {
    var n = 0;
    updateBasket(n);
  });

  $(".product-card__image-thumbnails a").click(function (e) {
    e.preventDefault();
    $(".product-card__image-preview img").attr("src", $(this).attr("href"));
  });

  $(".product-card__image-thumbnails a").click(function () {
    $(this).siblings().children().css("border-width", "0px");
    $(this).children().css("border-width", "3px");
  });
  $(".header__menu-icon").click(function () {
    $(".responsive-navigation").prepend(
      '<img src="./images/icon-close.svg" class="responsive-navigation-close" alt="">'
    );
    $(".responsive-navigation").addClass("responsive-navigation-transfotm");
  });
  $(".responsive-navigation").on("click", ".responsive-navigation-close", function () {
    $(".responsive-navigation-close").remove();
    $(".responsive-navigation").removeClass("responsive-navigation-transfotm");
  });
});
