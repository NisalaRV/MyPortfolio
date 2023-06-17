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

function deleteCustomer(code){
    for (let i = 0; i < customerDB.length; i++) {
        if(customerDB[i].code==code){
            customerDB.splice(i,1);
            return true;
        }
    }
    return false
}

$("#btnDelete2").click(function () {
    let code=$("#ItemCode").val();
    let consent=confirm("Do You Want to delete ");
    if(consent){
        let response = deleteCustomer(code);
        if(response){
            alert("item deleted")

        }else {
            alert("item not deleted")
        }
    }


});


$("#UpdateCustomer2").click(function () {

    let code = $("#ItemCode").val();

    confirm("DO you want update this item")
    let response = updateCustomer(code);

    if(response){
        alert("item update sucess")

    }else {
        alert("Somethin went wrong")
    }
});

function updateCustomer(code) {
    for (let i=0;i<customerDB.length;i++){
        if(customerDB[i].code==code){

            let name=$("#ItemName").val();
            let price=$("#ItemPrice").val();
            let date=$("#ItemQty").val();
            customerDB[i].name=name;
            customerDB[i].price=price;
            customerDB[i].date=date;
        }
        return true
    }
}

function updateCustomer(code){
    if (searchCustomer(code)==undefined) {
        alert("No such item..please check the ID");
    }else{
        let consent= confirm("Do you really want to update this item.?");
        if (consent) {
            let ItemCode= searchCustomer(code);

            let ItemName = $("#ItemName").val();
            let ItemPrice = $("#ItemPrice").val();
            let ItemQty = $("#ItemQty").val();

            ItemCode.name=ItemName;
            ItemCode.price=ItemPrice;
            ItemCode.date=ItemQty;

            getAllCustomers();
        }
    }

}