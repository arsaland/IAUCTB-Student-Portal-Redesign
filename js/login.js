$(document).ready(function(){
    
    $("#stu").click(function(){
        $("div[login-type='prof'] , div[login-type='guest']").fadeOut(199.99);
        $("div[login-type='stu']").delay(200).fadeIn(1000);
        $("button#stu").addClass('active',500);
        $("button#prof").removeClass('active',500);
        $("button#guest").removeClass('active',500);
    });
    
    $("#prof").click(function(){
        $("div[login-type='stu'] , div[login-type='guest']").fadeOut(199.99);
        $("div[login-type='prof']").delay(200).fadeIn(1000);
        $("button#stu").removeClass('active',500);
        $("button#prof").addClass('active',500);
        $("button#guest").removeClass('active',500);
    });
    
    $("#guest").click(function(){
        $("div[login-type='prof'] , div[login-type='stu']").fadeOut(199.99);
        $("div[login-type='guest']").delay(200).fadeIn(1000);
        $("button#stu").removeClass('active',500);
        $("button#prof").removeClass('active',500);
        $("button#guest").addClass('active',500);
    });

});