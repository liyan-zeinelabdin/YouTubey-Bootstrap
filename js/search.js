$(document).ready(function() {
    // Open filters section
    $(".search-filter-icon").click(function(){
        $(".filter-columns").slideToggle("slow");
    });

    // one choise of check box
    $("input:checkbox").click(function(){
        var $box = $(this);

        if ($box.is(":checked")){
            var group = "input:checkbox[name='" +$box.attr("name")+"']" ;
            $(group).prop("checked",false);
            $box.prop("checked",true);
        }
    });
});