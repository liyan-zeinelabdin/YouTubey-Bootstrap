$(document).ready(function() {
    $("#view-more").on("click",function(){
        read();
    });

    $(".reply").click(function(){
        $(this).parents("div.row").next("div.card").toggle();
    });
});

function read(){
    var points =document.getElementById("dots");
    var moreText =document.getElementById("more");
    var btnText =document.getElementById("view-more");

    if(points.style.display === "none"){
        points.style.display = "inline";
        btnText.innerHTML = "عرض المزيد";
        moreText.style.display = "none";
    }
    else{
        points.style.display = "none";
        btnText.innerHTML = "عرض عناصر أقل";
        moreText.style.display = "inline";
    }
}