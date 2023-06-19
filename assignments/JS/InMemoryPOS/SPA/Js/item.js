var itemDB = [];


$("#itemAdd").click(function () {


    let itemCode = $("#ItemCode").val();
    let ItemName = $("#ItemName").val();
    let itemPrice = $("#ItemPrice").val();
    let itemQty=$("#ItemQty").val();


    let itemOb = {
        code: itemCode,
        name: ItemName,
        price: itemPrice,
        qty: itemQty
    }

    itemDB.push(itemOb);



});


$("#getAllItem").click(function () {

    $("#tblItem").empty();


    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let name = itemDB[i].name;
        let price = itemDB[i].price;
        let qty = itemDB[i].qty;

        let row = `<tr>
                     <td>${code}</td>
                     <td>${name}</td>
                     <td>${price}</td>
                     <td>${qty}</td>
                    </tr>`;


        $("#tblItem").append(row);
    }
});

$("#tblItem").on('click', 'tr', function() {

    let code = $(this).children(":eq(0)").text();
    let name = $(this).children(":eq(1)").text();
    let price = $(this).children(":eq(2)").text();
    let qty = $(this).children(":eq(3)").text();

    $("#ItemCode").val(code);
    $("#ItemName").val(name);
    $("#ItemPrice").val(price);
    $("#ItemQty").val(qty);

});

function deleteItem(code){
    for (let i = 0; i < itemDB.length; i++) {
        if(itemDB[i].code==code){
            itemDB.splice(i,1);
            return true;
        }
    }
    return false
}

$("#btnDelete2").click(function () {
    let code=$("#ItemCode").val();
    let consent=confirm("Do You Want to delete ");
    if(consent){
        let response = deleteItem(code);
        if(response){
            alert("item deleted")

        }else {
            alert("item not deleted")
        }
    }


});

// -------------udpate------------

$("#updateItem").click(function () {

    let code = $("#ItemCode").val();

    confirm("DO you want update this item")
    let response = updateItem(code);

    if(response){
        alert("item update sucess")

    }else {
        alert("Somethin went wrong")
    }
});

function updateItem(code) {
    for (let i=0;i<itemDB.length;i++){
        if(itemDB[i].code==code){

            let name=$("#ItemName").val();
            let price=$("#ItemPrice").val();
            let qty=$("#ItemQty").val();
            itemDB[i].name=name;
            itemDB[i].price=price;
            itemDB[i].date=qty;
        }
        return true
    }
}

$("#ItemCode").keydown(function (e){
    if (e.key=="Enter"){
        $("#ItemName").focus();
    }
})

$("#ItemName").keydown(function (e){
    if (e.key=="Enter"){
        $("#ItemPrice").focus();
    }
})
$("#ItemPrice").keydown(function (e){
    if (e.key=="Enter"){
        $("#ItemQty").focus();
    }
})
$("#ItemQty").keydown(function (e){
    if (e.key=="Enter"){
        $("#ItemCode").focus();
    }
})