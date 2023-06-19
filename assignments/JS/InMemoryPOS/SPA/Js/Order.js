var orderDB = [];

function addOrder(){

    let OrderId = $("#OrderID1").val();
    let Item_code1 = $("#Itemcode1").val();
    let date = $("#itemDate").val();
    let price=$("#OPrice").val();
    let Qty=$("#oQty").val();


    let orderOb = {
        id:OrderId,
        code:Item_code1,
        date:date,
        price:price,
        qty: Qty
    }

    orderDB.push(orderOb);

    getAllOrders();

}

$("#orderAdd").click(function () {
    addOrder();
});




    function getAllOrder() {
        $("#tblOrder").empty();


        for (let i = 0; i < orderDB.length; i++) {
            let id = orderDB[i].id;
            let code = orderDB[i].code;
            let date = orderDB[i].date;
            let price = orderDB[i].price;
            let qty = orderDB[i].qty;

            let row = `<tr>
                     <td>${id}</td>
                     <td>${code}</td>
                     <td>${date}</td>
                     <td>${price}</td>
                     <td>${qty}</td>

                    <tr>`

            $("#tblOrder").append(row);

            bindTrEvent()
        }
    }

    $("#getAllOrder").click(function (){
        getAllOrder();
    });


function bindTrEvent() {

    $('#tblOrder>tr').click(function (){

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

    })
}
// _____________


function deleteOrder(id){
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
        let response = deleteOrder(id);
        if(response){
            alert("order deleted")

        }else {
            alert("order not deleted")
        }
    }


});

// // -----------update------------

$("#orderupdate").click(function (){
    let id= $("#OrderID1").val();
    updateOrder(id);

    clearOrderInputFields();
});


function updateOrder(id){
    if (searchOrder(id)==undefined) {
        alert("No such Order..please check the ID");
    }else{
        let consent= confirm("Do you really want to update this Order.?");
        if (consent) {
            let order= searchOrder(id);
            //if the customer available can we update.?

            let code = $("#Itemcode1").val();
            let date = $("#itemDate").val();
            let price = $("#OPrice").val();
            let qty = $("#oQty").val();

            order.code=code;
            order.date=date;
            order.price=price;
            order.qty=qty;

            getAllOrders();
        }
    }

}
function searchOrder(id){
    return orderDB.find(function (order){
        return order.id==id;
    });
}
function clearOrderInputFields() {
    $("#OrderID1,#Itemcode1,#itemDate,#OPrice,#oQty").val("");
    $("#OrderID1").focus();
}

$("#OrderID1,#Itemcode1,#itemDate,#OPrice,#oQty").keydown(function (e) {

    if (e.key == "Tab") {
        e.preventDefault();
    }
});

$("#OrderID1").keydown(function (e){

    if (e.key=="Enter"){
        $("#Itemcode1").focus();
    }

});
$("#Itemcode1").keydown(function (e){

    if (e.key=="Enter"){
        $("#itemDate").focus();
    }

});

$("#itemDate").keydown(function (e){

    if (e.key=="Enter"){
        $("#OPrice").focus();
    }

});
$("#OPrice").keydown(function (e){

    if (e.key=="Enter"){
        $("#oQty").focus();
    }

});

$("#oQty").keydown(function (e){
    if (e.key=="Enter"){
        addOrder();
        clearOrderInputFields();
    }
});


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