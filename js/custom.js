(function($) {
    "use strict"; 

    let animationDuration   = 1000;
    let animationEasing     = "easeInOutExpo";
    let navBarHeight        = $("#mainNav").outerHeight(false);

    // Set Bootstrap Scrollspay options
    $("body").scrollspy({
        target: '#mainNav',
        offset: navBarHeight + 5
    });

    // Animate body scrolling to the linked section
    $("a[data-scrollspy]").click(function(e) {
        e.preventDefault();
        let target = $(this.hash);        
        scrollTo(target, navBarHeight - 3);
    });

    // Show team info in the team section
    let selectedIndex = 0; 
    let timeout = 0; 
    showInfo( $("section#team .custom-cards").eq(0), $("section#team .info-box"), $("section#team .triangle") );
   
    $("section#team .custom-cards").on({
        mouseenter: function() {  
            if ( ($( this ).parent().index() != selectedIndex) ) {
                timeout = setTimeout(function() {
                    showInfo( $(this), $("section#team .info-box"), $("section#team .triangle"), true );
                }.bind(this), 250);
            }
            selectedIndex = $( this ).parent().index();
        },
        mouseleave: function() {
            clearTimeout(timeout);
        }
    });
    
    function scrollTo(target, navBarHeight) {
       
        if(target.attr("id") == "home") {
            $("html, body").animate({
                scrollTop: 0
            }, animationDuration, animationEasing);        
        } else {
            $("html, body").animate({
                scrollTop: (target.offset().top - navBarHeight)
            }, animationDuration, animationEasing);        
        }    
    }

    function showInfo(card, message, triangle, animates = false) {  
              
        let left = card.parent().position().left;          
        let width = card.outerWidth();
        let coords = left + 15 + width/2 - triangle.outerWidth()/2;        
        if (!animates) {
            triangle.css("left", coords);
            let authorName = card.find("span.notes").html();                  
            message.find("span.notes").html(authorName);
        }      
        else {
            triangle.animate({
                left: coords,           
              }, 1000, "easeOutBounce", function() {
                let authorName = card.find("span.notes").html();
                message.hide();         
                message.find("span.notes").html(authorName);
                message.fadeIn(400);
            });
        } 
    }

})(jQuery); 