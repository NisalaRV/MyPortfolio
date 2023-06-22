
$("#OrderID1").keyup(function (e) {
    const pattern = /^(O00)[0-9]$/;
    if (pattern.test($("#OrderID1").val())){
        $("#OrderID1").css('border','2px solid green');


    }else{
        $("#OrderID1").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#Itemcode1").keyup(function (e) {
    const pattern = /^(I00)[0-9]$/;
    if (pattern.test($("#Itemcode1").val())){
        $("#Itemcode1").css('border','2px solid green');


    }else{
        $("#Itemcode1").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#itemDate").keyup(function (e) {
    const pattern =/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if (pattern.test($("#itemDate").val())){
        $("#itemDate").css('border','2px solid green');


    }else{
        $("#itemDate").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#OPrice").keyup(function (e) {
    const pattern = /^[0-9]{2,}([.]{1}[0-9]{2})?$/;
    if (pattern.test($("#OPrice").val())){
        $("#OPrice").css('border','2px solid green');


    }else{
        $("#OPrice").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});

$("#oQty").keyup(function (e) {
    const pattern = /^[0-9]{1,}?$/;
    if (pattern.test($("#oQty").val())){
        $("#oQty").css('border','2px solid green');


    }else{
        $("#oQty").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();

        }

    }

});