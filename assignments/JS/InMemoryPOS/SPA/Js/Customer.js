var customerDB = [];

function addCustomer() {

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

    getAllCustomers();
    searchCustomer();
    clearCustomerInputFields();

}

$("#add").click(function () {
    addCustomer();
});

function getAllCustomers() {

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

        bindTrEvents();
    }
}


$("#getAll").click(function () {
    getAllCustomers();
});


function  bindTrEvents(){
    $('#tblCustomer>tr').click(function () {

        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let date = $(this).children(":eq(3)").text();

        $("#CustomerID").val(id);
        $("#customerName").val(name);
        $("#customerAddress").val(address);
        $("#customerBirthday").val(date);

    })
}


// delete

function deleteCustomer(id){
    for (let i = 0; i < customerDB.length; i++) {
        if(customerDB[i].id==id){
            customerDB.splice(i,1);
            return true;
        }
    }
    return false
}

$("#btnDelete").click(function () {
    let id=$("#CustomerID").val();
    let consent=confirm("Do You Want to delete ");
    if(consent){
        let response = deleteCustomer(id);
        if(response){
            alert("customer deleted")
            getAllCustomers();
            clearCustomerInputFields();
        }else {
            alert("customer not deleted")
        }
    }


});

// ----------------update/----------


$("#UpdateCustomer").click(function (){
    let id= $("#CustomerID").val();
    updateCustomer(id);

    clearCustomerInputFields();
});


function updateCustomer(id) {

    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer= searchCustomer(id);

            let name = $("#customerName").val();
            let address = $("#customerAddress").val();
            let date = $("#customerBirthday").val();

            customer.name=name;
            customer.address=address;
            customer.date=date;

            getAllCustomers();
        }
    }
}
function searchCustomer(id){
    return customerDB.find(function (customer){
        return customer.id==id;
    });
}
function clearCustomerInputFields() {
    $("#CustomerID,#customerName,#customerAddress,#customerBirthday").val("");
    $("#CustomerID").focus();
}


//disable tab
$("#CustomerID,#customerName,#customerAddress,#customerBirthday").keydown(function (e) {

    if (e.key == "Tab") {
        e.preventDefault();
    }
});




$("#CustomerID").keydown(function (e){
    if (e.key=="Enter"){
        $("#customerName").focus();
    }
})

$("#customerName").keydown(function (e){
    if (e.key=="Enter"){
        $("#customerAddress").focus();
    }
})
$("#customerAddress").keydown(function (e){
    if (e.key=="Enter"){
        $("#customerBirthday").focus();
    }
})
$("#customerBirthday").keydown(function (e){
    if (e.key=="Enter"){
        addCustomer();
        clearCustomerInputFields();
    }
});


$("#CustomerID").keyup(function (e) {
    const pattern = /^(C00-)[0-9]{3}$/;
    if (pattern.test($("#CustomerID").val())){
        $("#CustomerID").css('border','2px solid green');
    }else{
        $("#CustomerID").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#customerName").keyup(function (e) {
    const pattern = /^[a-zA-Z\s']+$/u;
    if (pattern.test($("#customerName").val())){
        $("#customerName").css('border','2px solid green');
    }else{
        $("#customerName").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#customerAddress").keyup(function (e) {
    const pattern =  /^[A-z ,.0-9]{3,}$/u
    ;
    if (pattern.test($("#customerAddress").val())){
        $("#customerAddress").css('border','2px solid green');
    }else{
        $("#customerAddress").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});
$("#customerBirthday").keyup(function (e) {
    const pattern =/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    if (pattern.test($("#customerBirthday").val())){
        $("#customerBirthday").css('border','2px solid green');
    }else{
        $("#customerBirthday").css('border','2px solid red')
        if (e.key==='Enter'){
            console.log(e);
            e.preventDefault();
        }
    }
});

