frappe.web_form.on('validate', function() {
    
    // var email = frappe.web_form.doc.email;
    // var emailPattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    // if (!emailPattern.test(email)) {
    //     frappe.msgprint('Please enter a valid Email...........');
    //     frappe.web_form.validate = false; // Prevent form submission
    // }

    // var mobile = frappe.web_form.doc.mobile;
    // var indianMobilePattern = /^[6789]\d{9}$/;

    // if (!indianMobilePattern.test(mobile)) {
    //     frappe.msgprint('Please enter a valid Indian mobile number.');
    //     frappe.web_form.validate = false; // Prevent form submission
    // }

    // if (frappe.web_form.doc.select_one === 'GST') {
    //     var gst = frappe.web_form.doc.gst;
    //     var gstPattern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[Z]{1}[A-Z\d]{1}$/;

    //     if (!gstPattern.test(gst)) {
    //         frappe.msgprint('Please enter a valid GST.');
    //         frappe.web_form.validate = false; // Prevent form submission
    //     }
    // }

    // if (frappe.web_form.doc.select_one === 'PAN') {
    //     var pan = frappe.web_form.doc.pan;
    //     var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    //     if (!panPattern.test(pan)) {
    //         frappe.msgprint('Please enter a valid PAN.');
    //         frappe.web_form.validate = false; // Prevent form submission
    //     }
    // }
});

