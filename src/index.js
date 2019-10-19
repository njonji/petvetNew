import "jquery"
import "popper.js"
import "bootstrap"
import "./main.scss"
import "./tooltip"
import "./navbar"
import "./scroll"
import "./counter"
import sal from "sal.js"


 /* PRELOADER */
 $(window).on("load", function() {
    $("#status").fadeOut();
    $("#preloader").fadeOut();
})

/* CAROUSEL */

$('.carousel').carousel( {
    pause: false,
})

/* CAROUSEL END */

/* PRELOADER  END*/

/* SAL */
sal({
    once:false,
})

/* SAL END */

