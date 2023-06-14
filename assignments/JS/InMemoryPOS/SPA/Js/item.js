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