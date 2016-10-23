function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    var $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
}

$(document).ready(function(){
    var env = findBootstrapEnvironment();
    if (env == "sm" || env == "xs") {
        $("#mainHeader").css("height", "120px")
        $("#modoLogo").css("margin-top", "-30px");
    }
});