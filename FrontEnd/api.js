function getDataById(userId) {
    // Base URL for the API
    let url = 'http://localhost:3000/api/users';

    // If a userId is provided, append it to the URL
    if (userId) {
        url = `http://localhost:3000/api/users/${userId}`;
    }

    // AJAX request to get data from the server
    let request = $.ajax({
        url: url,
        crossDomain: true,
        type: 'GET',
        cache: false,
        dataType: 'json'  // Specify the expected response format
    });




    // Success callback
    request.done(function (response) {
        // console.log(response);
        response = response.userData;
        let tableData = '';
        let tableDataBody = $('#tableDataBody');
        if (tableDataBody) {
            // Iterate over the response array to generate table rows
            response.forEach(userElement => {
                let { _id, first_name, last_name, email, gender, address, mobile_number } = userElement;
                tableData += `
                <tr onclick="getDataById('${_id}')">
                    <td>${first_name}</td>
                    <td>${last_name}</td>
                    <td>${email}</td>
                    <td>${gender}</td>
                    <td>${address}</td>
                    <td>${mobile_number}</td>
                    <td></td>
                </tr>
            `;
            });
            tableDataBody.html(tableData);
        }
        // Update the table body with the generated rows
    });



    // Error callback
    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Request failed: " + textStatus + ", " + errorThrown);
    });
}
getDataById();


$('#submit_form').on('submit', function (e) {
    e.preventDefault();
    let form = this; // Since 'this' refers to the form element in the event handler

    let formData = new FormData(form);

    let formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    console.log(formObject);


    let url = `http://localhost:3000/api/users/submit_form`;

    let request = $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formObject),
        dataType: 'json',
        crossDomain: true,
        cache: false
    });

    request.done(function (response) {
        console.log('Form data submitted successfully:', response);
        // Optionally, update UI or perform actions after successful submission
    });

    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Request failed: " + textStatus + ", " + errorThrown);
    });
});




