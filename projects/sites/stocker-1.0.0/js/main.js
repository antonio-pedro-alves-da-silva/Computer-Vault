
$(window).ready(()=>{
    $("#container-spinner").addClass("d-none");

    $(".btn-primary").on("click",()=>{
        $(".btn-primary").css("box-shadow","0px 0px 0px 0.2rem rgba(0,208,132,0.6)")
    })

    $(".btn-primary").on("blur",()=>{
        $(".btn-primary").css("box-shadow","0px 0px 0px 0px rgba(0,208,132,0.6)")
    })

    

})