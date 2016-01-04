$(document).ready(function(){
    
    $("#stu").click(function(){
        $("div[login-type='prof'] , div[login-type='guest']").hide('normal');
        $("div[login-type='stu']").fadeIn('normal');
        $("button#stu").addClass('active',500);
        $("button#prof").removeClass('active',500);
        $("button#guest").removeClass('active',500);
    });
    
    $("#prof").click(function(){
        $("div[login-type='stu'] , div[login-type='guest']").hide('normal');
        $("div[login-type='prof']").fadeIn('normal');
        $("button#stu").removeClass('active',500);
        $("button#prof").addClass('active',500);
        $("button#guest").removeClass('active',500);
    });
    
    $("#guest").click(function(){
        $("div[login-type='prof'] , div[login-type='stu']").hide('normal');
        $("div[login-type='guest']").fadeIn('normal');
        $("button#stu").removeClass('active',500);
        $("button#prof").removeClass('active',500);
        $("button#guest").addClass('active',500);
    });

});