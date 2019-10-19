import counterUp from "counterup2"
require( 'waypoints/lib/noframework.waypoints.js' )

const el = document.querySelector( '.counter' )
const el2 = document.querySelector( '.counter2' )
const el3 = document.querySelector( '.counter3' )

new Waypoint( {
    element: el,
    handler: function() { 
        counterUp( el, {
            duration:2000,
            delay:16,
        }) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
new Waypoint( {
    element: el2,
    handler: function() { 
        counterUp( el2, {
            duration:2000,
            delay:16,
        }) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )
new Waypoint( {
    element: el3,
    handler: function() { 
        counterUp( el3, {
            duration:2000,
            delay:16,
        }) 
        this.destroy()
    },
    offset: 'bottom-in-view',
} )