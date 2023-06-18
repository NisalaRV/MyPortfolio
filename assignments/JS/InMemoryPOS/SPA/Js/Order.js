
var orderDB = [];

$("#orderAdd").click(function () {

    let OrderId = $("#OrderID1").val();
    let Item_code = $("#Itemcode1").val();
    let date = $("#itemDate").val();
    let price=$("#OPrice").val();
    let Qty=$("#oQty").val();


    let orderOb = {
        id:OrderId,
        code:Item_code,
        date:date,
        price:price,
        qty: Qty
    }

    orderDB.push(orderOb);

});


$("#getAllOrder").click(function () {

    $("#tblOrder").empty();


    for (let i = 0; i < orderDB.length; i++) {
        let id = orderDB[i].id;
        let code = orderDB[i].code;
        let date = orderDB[i].date;
        let price = orderDB[i].price;
        let qty = orderDB[i].qty;


        let row =`<tr>
                     <td>${id}</td>
                     <td>${code}</td>
                     <td>${date}</td>
                     <td>${price}</td>
                     <td>${qty}</td>

                    <tr>`

        $("#tblOrder").append(row);

    }

});
$("#tblOrder").on('click', 'tr', function() {

    let id = $(this).children(":eq(0)").text();
    let code = $(this).children(":eq(1)").text();
    let date = $(this).children(":eq(2)").text();
    let price = $(this).children(":eq(3)").text();
    let qty = $(this).children(":eq(4)").text();

    $("#OrderID1").val(id);
    $("#Itemcode1").val(code);
    $("#itemDate").val(date);
    $("#OPrice").val(price);
    $("#oQty").val(qty);

});

// _____________


function deleteItem(id){
    for (let i = 0; i < orderDB.length; i++) {
        if(orderDB[i].id==id){
            orderDB.splice(i,1);
            return true;
        }
    }
    return false
}

$("#orderdelete").click(function () {
    let id=$("#OrderID1").val();
    let consent=confirm("Do You Want to delete ");
    if(consent){
        let response = deleteItem(id);
        if(response){
            alert("order deleted")

        }else {
            alert("order not deleted")
        }
    }


});