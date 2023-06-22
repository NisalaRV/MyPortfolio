
$("#CustomerID").keyup(function (e) {
    const pattern = /^(C00-)[0-9]{3}$/;
    if (pattern.test($("#CustomerID").val())){
        $("#CustomerID").css('border','2px solid green');
    }else{
        $("#CustomerID").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#customerName").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#customerName").val())){
        $("#customerName").css('border','2px solid green');
    }else{
        $("#customerName").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#customerAddress").keyup(function (e) {
    const pattern =  /^[A-z ,.0-9]{3,}$/u
    ;
    if (pattern.test($("#customerAddress").val())){
        $("#customerAddress").css('border','2px solid green');
    }else{
        $("#customerAddress").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#customerBirthday").keyup(function (e) {
    const pattern =/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    if (pattern.test($("#customerBirthday").val())){
        $("#customerBirthday").css('border','2px solid green');
    }else{
        $("#customerBirthday").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});

