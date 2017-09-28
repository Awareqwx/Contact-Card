$(document).ready(function(){
    var cards = 0;
    $("form").submit(function(){
        createCard(cards);
        cards++;
        return false;
    });
});

function createCard(n){  //As it turns out, if you escape the newline character you can create multiline strings.
    var newCard =        //The upshot of this is nicely formatted HTML code in a string!
    '\
    <div class="contact", id="card' + n + '">\
        <h1>' + $("input[name='firstname'").val() + ' ' + $("input[name='lastname'").val() + '\
        <h3>Click for description!</h3>\
        <p style="display: none;">' + $("textarea").val() + '</p>\
    </div>'
    $("#cards").append(newCard);
    $("input[name='firstname'").val("");
    $("input[name='lastname'").val("");
    $("textarea").val("");
    $($("#cards").children()[$("#cards").children().length - 1]).data("isdesc", false);
    $("#cards").on("click", ".contact#card" + n, function(){
        console.log($(this).data("isclicked"));
        if(!$(this).data("isclicked"))
        {
            $(this).data("isclicked", true);
            console.log($(this).data("isclicked"));
            if($(this).data("isdesc"))
            {
                $("p", this).fadeOut("50", function(){
                    $(this).parent().find("h1, h3").fadeIn("50");
                    $(this).parent().data("isclicked", false);
                });
                $(this).data("isdesc", false);
            }
            else{
                $("h1", this).fadeOut("50");
                $("h3", this).fadeOut("50", function(){
                    $(this).parent().find("p").fadeIn("50");
                    $(this).parent().data("isclicked", false);
                });
                $(this).data("isdesc", true);
            }
        }
    });
}