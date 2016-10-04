var Home = {};
Home.PageTitle = "";
    
Home.AnimationStatus = "";
$(document).ready(function ()
{
    
    var cells = $(".cell");
    var colorCount = 0;
    
    for (var i = 0; i < cells.length; i++)

    {
        
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        
        colorCount += isNextRow ? 2 : 1;
        
        cell.css("background-color", isDark ? "navy" : "white");
        
            
    }
    
    
});


$(document).ready(function () {
    $(".cell").click(function () {
        if ($(this).attr("class") == "cell piece red") {
            $(this).addClass("background-color");
            $(this).removeClass("background-color");
            $(this).css("background-color", "yellow");
        }
        else {
            
        }
    });
});

$(document).ready(function () {
    $(".cell").click(function () {
        if ($(this).attr("class") == "cell piece black") {
            $(this).addClass("background-color");
            $(this).css("background-color", "yellow");
            $(this).removeClass("background-color");
        }
        else {
            
        }
    });
});

$(document).ready(function () {
    $("cell").click(function () {
        var currentClass = $(this).attr("class");

        var nextClass;

        if (currentClass == "cell1") nextClass = "cell2";
        else if (currentClass == "cell2") nextClass = "cell3";
        else nextClass = "cell1";

        $(this).attr("class", nextClass);
        $(this).slideUp('75px');
    });
});



