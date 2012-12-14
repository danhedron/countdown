$(document).ready(function(){
    function lol() {
        var d = Date.now();
        var target = new Date(2012, 11, 14, 16, 00, 00);
        var del = 1000 * 30;
        var delta = (target.getTime() - d);
        if( del > delta && delta > 0 )
        {
            window.location = 'http://www.youtube.com/watch?v=e32kaa9TzeE';
        }
        else
        {
            console.log('redirect in: ', delta - del, del );
        }
    }
    setInterval(lol, 1000);

});
