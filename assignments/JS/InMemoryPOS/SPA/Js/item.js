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
