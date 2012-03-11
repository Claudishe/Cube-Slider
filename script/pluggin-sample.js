/ plugin-name.js - define your plugin implementation pattern
(function($) // The $ here signifies a parameter name
             // As you can see from below, (jQuery) is
             // immediately passed as the $ param
{
    $.vari = "$.vari";
    $.fn.vari = "$.fn.vari";

    // 1.) Add a custom interface `DoSomethingLocal`
    //     Which will modify all selected elements!
    //     If you are a software engineer, think about this as
    //     a member function of the main jQuery class
    $.fn.DoSomethingLocal = function()
    {
        // return the object back to the chained call flow
        return this.each(function() // This is the main processor
                                    // function that executes on
                                    // each selected element
                                    // (e.g: jQuery("div"))
        {
            // this     ~ refers to a DOM element
            // $(this)  ~ refers to a jQuery object

            // Here, the `this` keyword is a self-refence to the
            // selected object `this.vari` is `undefined` because
            // it refers to selected DOM elements. So, we can do
            // something like: var borderStyle = this.style.border;
            // While $(this).vari, or jQuery(this).vari refers
            // to `$.fn.vari`

            // You would use the $(this) object to perform
            // any desired modification to the selected elements
            // $(this) is simply a reference to the jQuery object
            // of the selected elements
            alert(this.vari);    // would output `undefined`
            alert($(this).vari); // would output `$.fn.vari`
        });
    };
})(jQuery); // pass the jQuery object to this function

// 2.) Or we can add a custom interface to the global jQuery
//     object. In this case, it makes no sense to enumerate
//     through objects with `each` keyword because this function
//     will theoretically work in the `global` scope. If you are
//     a professional software engineer, think about this
//     as a [static function]
$.DoSomethingGlobal = function()
{
    // this will output this.vari = $.vari
    alert("Do Something Globally, where `this.vari` = " + this.vari);
};

// index.html - test the plugin
$(document).ready(function()
{
    $("div").DoSomethingLocal();
    $.DoSomethingGlobal();
});