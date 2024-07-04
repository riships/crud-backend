// Function to get user data by ID or all users if no ID is provided
function getDataById(userId) {
    // Base URL for the API
    let url = 'http://localhost:3000/api/users';
    let data = null;

    // If userId is provided, update URL and data
    if (userId != null && userId != undefined && userId != '') {
        url = 'http://localhost:3000/api/users/getUser';
        data = { "userId": userId };
    }

    // AJAX request to get data from the server
    let request = $.ajax({
        url: url,
        data: data,
        crossDomain: true,
        type: 'GET',
        cache: false,
        dataType: 'json'  // Specify the expected response format
    });

    // Success callback
    request.done(function (response) {
        // Extract user data from the response
        response = response.userData;
        let tableData = '';
        let tableDataBody = $('#tableDataBody');
        console.log(response);

        if (tableDataBody) {
            // Iterate over the response array to generate table rows
            response.forEach(userElement => {
                let { _id, first_name, last_name, email, gender, address, mobile_number } = userElement;
                tableData += `
                <tr>
                    <td onclick="getDataById('${_id}')">${first_name}</td>
                    <td>${last_name}</td>
                    <td>${email}</td>
                    <td>${gender}</td>
                    <td>${address}</td>
                    <td>${mobile_number}</td>
                    <td><input type='button' onclick="editUser('${_id}'),editBtnFuntion()" value="Edit">
                    <input type='button' onclick="deleteOneUser('${_id}')" value="Delete"></td>
                </tr>
            `;
            });
            // Update the table body with the generated rows
            tableDataBody.html(tableData);
        }
    });

    // Error callback
    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Request failed: " + textStatus + ", " + errorThrown);
    });
}

// Initial call to fetch and display all users
getDataById();

// Event handler for form submission
$('#submit_form').on('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    let userId = $("#userId").val(); // Get the userId from the form
    // console.log(typeof userId);
    if (userId === null || userId === undefined || userId == '') {
        let timeStamp = new Date().getTime(); // Generate a unique timestamp
        timeStamp = toString(timeStamp)
        console.log(typeof timeStamp);
        $("#userId").val(timeStamp); // Set the timestamp as the userId
    }
    
    let form = this; // Reference to the form element



    let formData = new FormData(form); // Create a FormData object from the form
    let formObject = {}; // Object to hold form data

    // Convert FormData to a plain object
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Check if userId is set for update or new user creation
    let url;
    let requestType;

    if (userId) {
        // Update user
        url = `http://localhost:3000/api/users/updateUser/${userId}`;
        requestType = 'PUT';
    } else {
        // Create new user
        url = `http://localhost:3000/api/users/submit_form`;
        requestType = 'POST';
    }

    // AJAX request to submit the form data
    let request = $.ajax({
        url: url,
        type: requestType,
        contentType: 'application/json',
        data: JSON.stringify(formObject),
        dataType: 'json',
        crossDomain: true,
        cache: false
    });

    // Success callback
    request.done(function (response) {
        console.log('Form data submitted successfully:', response);
        $('#submit_form')[0].reset(); // Reset the form
        getDataById(); // Refresh the user data table
    });

    // Error callback
    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Request failed: " + textStatus + ", " + errorThrown);
    });
});

// Function to delete a user by ID
function deleteOneUser(id) {
    let url = `http://localhost:3000/api/users/deleteUser/${id}`; // URL for user deletion

    // AJAX request to delete the user
    $.ajax({
        url: url,
        type: 'DELETE',
        contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        cache: false,
        success: function (response) {
            console.log('User data deleted successfully:', response);
            getDataById(); // Refresh the user data table after deletion
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Request failed: " + textStatus + ", " + errorThrown);
        }
    });
}

// Function to edit a user by ID
function editUser(userId) {
    // Fetch user data by ID and populate the form
    let url = `http://localhost:3000/api/users/getUser`;

    $.ajax({
        url: url,
        type: 'GET',
        data: { "userId": userId },
        contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        cache: false,
        success: function (response) {
            let user = response.userData[0]; // Assuming userData is an array with a single user object
            // Populate the form with the user data
            $("#userId").val(user._id);
            $("#first_name").val(user.first_name);
            $("#last_name").val(user.last_name);
            $("#email").val(user.email);
            $("#gender").val(user.gender);
            $("#address").val(user.address);
            $("#mobile_number").val(user.mobile_number);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("Request failed: " + textStatus + ", " + errorThrown);
        }
    });
}
