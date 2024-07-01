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
        console.log(response);
        response = response.userData;
        let tableData = '';

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

        // Update the table body with the generated rows
        document.getElementById('tableDataBody').innerHTML = tableData;
    });

    // Error callback
    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Request failed: " + textStatus + ", " + errorThrown);
    });
}
getDataById();