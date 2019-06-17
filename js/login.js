// Select with jQuery the password field and the toogle button
var field = $('#password');
var toggleBtn = $('#toggle');
// Create flag for keeping track of toggle state
var toggled = false;
// Log 
console.log(field,toggleBtn);

// Bind 'click' event
toggleBtn.bind('click', function() {
    if (toggled) {
        field.attr('type', 'password');
        toggleBtn.css('opacity', .5);
        toggled = false;
    } else {
        field.attr('type', 'text');
        toggleBtn.css('opacity', 1);
        toggled = true;
    }
});

