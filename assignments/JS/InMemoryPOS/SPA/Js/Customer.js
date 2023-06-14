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