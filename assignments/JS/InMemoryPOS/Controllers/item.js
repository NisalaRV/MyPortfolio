

function addItems() {

    let itemCode = $("#ItemCode").val();
    let ItemName = $("#ItemName").val();
    let itemPrice = $("#ItemPrice").val();
    let itemQty = $("#ItemQty").val();


    let itemOb = {
        itemCode: itemCode,
        ItemName: ItemName,
        unitPrice: itemPrice,
        qty: itemQty
    }

    itemDB.push(itemOb);

    getAllItems();
    searchItem();
    clearItemInputFields();
    loadAllItemCode();

}
$("#itemAdd").click(function () {

    addItems();
});

function getAllItems() {

    $("#tblItem").empty();


    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].itemCode;
        let name = itemDB[i].ItemName;
        let price = itemDB[i].unitPrice;
        let qty = itemDB[i].qty;

        let row = `<tr>
                     <td>${code}</td>
                     <td>${name}</td>
                     <td>${price}</td>
                     <td>${qty}</td>
                    </tr>`;

        $("#tblItem").append(row);

      bindItemTrEvent()
    }
}
$("#getAllItem").click(function () {

    getAllItems();
});


function bindItemTrEvent() {

    $('#tblItem>tr').click(function () {
        let code = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        $("#ItemCode").val(code);
        $("#ItemName").val(name);
        $("#ItemPrice").val(price);
        $("#ItemQty").val(qty);

    })
}

// ------delete-------

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
            getAllItems();
            clearItemInputFields();
        }else {
            alert("item not deleted")
        }
    }


});

// -------------udpate------------

$("#updateItem").click(function () {

    let code = $("#ItemCode").val();

    updateItem(code);

    clearItemInputFields()
});


function updateItem(code) {
    if (searchItem(code) == undefined) {
        alert("No such Item..please check the ID");

    } else {
        let consent = confirm("Do you really want to update this Item.?");
        if (consent) {

            let item = searchItem(code);


            let name = $("#ItemName").val();
            let price = $("#ItemPrice").val();
            let qty = $("#ItemQty").val();

            item.ItemName = name;
            item.unitPrice = price;
            item.qty = qty;

            getAllItems();

        }
    }
}

function searchItem(code){
    return itemDB.find(function (item){
        return item.itemCode==code;
    });
}

function clearItemInputFields() {
    $("#ItemCode,#ItemName,#ItemPrice,#ItemQty").val("");
    $("#ItemCode").focus();
}


$("#ItemCode,#ItemName,#ItemPrice,#ItemQty").keydown(function (e) {

    if (e.key == "Tab") {
        e.preventDefault();
    }
});



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
        addItems();
        clearItemInputFields();
    }
});
