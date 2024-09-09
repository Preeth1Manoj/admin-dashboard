// addcourse.js

function myformvalfn(form) {
    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Validate Course Code
    const courseCode = form.txtfirstname.value.trim();
    if (courseCode === "") {
        showError('firstnameerror', 'Course Code is required.');
        isValid = false;
    }

    // Validate Course Image
    const courseImage = form.txtlastname.files.length;
    if (courseImage === 0) {
        showError('lastnameerror', 'Course Image is required.');
        isValid = false;
    }

    // Validate Course Name
    const courseName = form.txtemail.value.trim();
    if (courseName === "") {
        showError('emailerror', 'Course Name is required.');
        isValid = false;
    }

    // Validate Description
    const description = form.txtphnum.value.trim();
    if (description === "") {
        showError('phonenumbererror', 'Description is required.');
        isValid = false;
    }

    // Validate Duration
    const duration = form.txtage.value.trim();
    if (duration === "") {
        showError('ageerror', 'Duration is required.');
        isValid = false;
    }

    // Validate Fees
    const fees = form.txtyear.value.trim();
    if (fees === "" || isNaN(fees)) {
        showError('yearerror', 'Fees must be a valid number.');
        isValid = false;
    }

    // Validate Qualifications
    const qualifications = form.txtqual.value.trim();
    if (qualifications === "") {
        showError('qualerror', 'Qualifications are required.');
        isValid = false;
    }

    // Validate Course Modules
    const modules = form.txtaddress.value.trim();
    if (modules === "" || isNaN(modules)) {
        showError('addresserror', 'Course Modules must be a valid number.');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('p[id$="error"]');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}