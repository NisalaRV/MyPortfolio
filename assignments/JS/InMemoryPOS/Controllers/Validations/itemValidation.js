
$("#ItemCode").keyup(function (e) {
    const pattern = /^(I00)[0-9]$/;
    if (pattern.test($("#ItemCode").val())){
        $("#ItemCode").css('border','2px solid green');


    }else{
        $("#ItemCode").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#ItemName").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#ItemName").val())){
        $("#ItemName").css('border','2px solid green');


    }else{
        $("#ItemName").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});
$("#ItemPrice").keyup(function (e) {
    const pattern = /^[0-9]{2,}([.]{1}[0-9]{2})?$/;
    if (pattern.test($("#ItemPrice").val())){
        $("#ItemPrice").css('border','2px solid green');


    }else{
        $("#ItemPrice").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#ItemQty").keyup(function (e) {
    const pattern = /^[0-9]{1,}?$/;
    if (pattern.test($("#ItemQty").val())){
        $("#ItemQty").css('border','2px solid green');


    }else{
        $("#ItemQty").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});