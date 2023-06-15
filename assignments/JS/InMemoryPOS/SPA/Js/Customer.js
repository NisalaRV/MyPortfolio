var customerDB = [];

$("#add").click(function () {


    let customerID = $("#CustomerID").val();
    let customerName = $("#customerName").val();
    let customerAddress = $("#customerAddress").val();
    let customerBDay = $("#customerBirthday").val();


    let customerOb = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        date: customerBDay
    }


    customerDB.push(customerOb);



});


$("#getAll").click(function () {


    $("#tblCustomer").empty();

    //get all customers
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let date = customerDB[i].date;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${date}</td>
                    </tr>`;


        $("#tblCustomer").append(row);
    }
});

$("#tblCustomer").on('click', 'tr', function() {

    let id = $(this).children(":eq(0)").text();
    let name = $(this).children(":eq(1)").text();
    let address = $(this).children(":eq(2)").text();
    let date = $(this).children(":eq(3)").text();

    $("#CustomerID").val(id);
    $("#customerName").val(name);
    $("#customerAddress").val(address);
    $("#customerBirthday").val(date);

});