// Copyright (c) 2023, Tejal KUmbhar and contributors
// For license information, please see license.txt



frappe.ui.form.on('User Registration', {
    validate: function(frm) {    
        var email = frm.doc.email;
        var emailPattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;

        if (!emailPattern.test(email)){
            frappe.msgprint('Please enter a valid Email.');
            frappe.validated = false; // Prevent form submission
        } 

        var mobile = frm.doc.mobile;
        var indianMobilePattern = /^[6789]\d{9}$/;

        if (!indianMobilePattern.test(mobile)) {
            frappe.msgprint('Please enter a valid Indian mobile number.');
            frappe.validated = false; // Prevent form submission
        }     

        if (frm.doc.select_one === 'GST') {
            var gst = frm.doc.gst;
            var gstPattern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[Z]{1}[A-Z\d]{1}$/;

            if (!gstPattern.test(gst)){
                frappe.msgprint('Please enter a valid GST.');
                frappe.validated = false; // Prevent form submission
            }
        }

        if (frm.doc.select_one === 'PAN' ) {
            var pan = frm.doc.pan;
            var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

            if (!panPattern.test(pan)){
                frappe.msgprint('Please enter a valid PAN.');
                frappe.validated = false; // Prevent form submission
            }
        }
    }
});


































// Copyright (c) 2023, Tejal KUmbhar and contributors
// For license information, please see license.txt



// frappe.ui.form.on('User Registration', {
//     before_save: function(frm) {    
//         var email = frm.doc.email;
//         var EmailPatttern = /^[\w\.-]+@[\w\.-]+\.\w+$/
//         if (!EmailPatttern.test(email)){
//             frappe.throw('Please enter a valid Email.........');
//             frappe.validated = false; // Prevent form submission
//         } 
//         var mobile = frm.doc.mobile;
//         var indianMobilePattern = /^[6789]\d{9}$/

//         if (!indianMobilePattern.test(mobile)) {
//             frappe.throw('Please enter a valid Indian mobile number.');
//             frappe.validated = false; // Prevent form submission
//         }     
//         if (frm.doc.select_one === 'GST') {
//             var gst = frm.doc.gst;
//             var GSTPatttern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[Z]{1}[A-Z\d]{1}$/
            
//             if (!GSTPatttern.test(gst)){
//                 frappe.throw('Please enter a valid GST.');
//                 frappe.validated = false; // Prevent form submission
//             }
//         }
//         if (frm.doc.select_one === 'PAN' ) {
 
//             var pan =frm.doc.pan;
//             var PANPatttern = /^[A-Z]{5}[0-9]{4}[A-Z]$/
//             if (!PANPatttern.test(pan)){
//             frappe.throw('Please enter a valid PAN.');
//             frappe.validated = false; // Prevent form submission
//             }
//         }
//     }
// });



// frappe.ui.form.on('User Registration', {
//     before_save: function(frm) {
        
        
   
//         if (frm.doc.document_type === 'GST') {
//             var gst = frm.doc.gst;
//             var GSTPatttern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[Z]{1}[A-Z\d]{1}$/
            
//             if (!GSTPatttern.test(gst)){
//                 frappe.throw('Please enter a valid GST.');
//                 frappe.validated = false; // Prevent form submission
//             }
//         }
       
       
       
//     }
// });



// frappe.ui.form.on('User Registration', {
//     before_save: function(frm) {
        
//         if (frm.doc.document_type === 'PAN' ) {
 
//             var pan =frm.doc.pan;
//             var PANPatttern = /^[A-Z]{5}[0-9]{4}[A-Z]$/
//             if (!PANPatttern.test(pan)){
//             frappe.throw('Please enter a valid PAN.');
//             frappe.validated = false; // Prevent form submission
//             }
//         }
        
       
       
//     }
// });



// frappe.ui.form.on('YourDoctype', {
//     validate: function(frm) {
//         if (frm.doc.document_type === 'GST' && !frm.doc.gst_number) {
//             frappe.msgprint(__('GST is not valid. Please enter a GST number.'));
//             frappe.validated = false;
//         }
//     },
//     // Add an event handler for the document type field change
//     document_type: function(frm) {
//         frm.events.validate(frm);
//     }
// });


// frappe.ui.form.on('User Registration', {
// 	before_submit: function (frm) {
// 		frm.call({
// 			method: 'create_user',//function name defined in python
// 			doc: frm.doc, //current document
// 		});
// 	}
// });

// frappe.ui.form.on('User Registration', {
// 	after_submit: function (frm) {
// 		frm.call({
// 			method: 'created_user',//function name defined in python
// 			doc: frm.doc, //current document
// 		});
// 	}
// });

// var email = frm.doc.email;
// var EmailPatttern = /^[\w\.-]+@[\w\.-]+\.\w+$/
// if (!EmailPatttern.test(email)){
//     frappe.throw('Please enter a valid Email.');
//     frappe.validated = false; // Prevent form submission
// } 

// var mobile = frm.doc.mobile;
// var indianMobilePattern = /^[6789]\d{9}$/

// if (!indianMobilePattern.test(mobile)) {
//     frappe.throw('Please enter a valid Indian mobile number.');
//     frappe.validated = false; // Prevent form submission
// }
// var pan =frm.doc.pan;
// var PANPatttern = /^[A-Z]{5}[0-9]{4}[A-Z]$/

// if (frm.doc.document_type === 'PAN' && !frm.doc.pan) {
   
//     if (!PANPatttern.test(pan)){
//     frappe.throw('Please enter a valid PAN.');
//     frappe.validated = false; // Prevent form submission
// }
// }
// frappe.ui.form.on('User Registration', {
//     validate: function(frm) {
        
       
//         var gst = frm.doc.gst;
     
//         var GSTPatttern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}[Z]{1}[A-Z\d]{1}$/

//         if (!GSTPatttern.test(gst)){
//             frappe.throw('Please enter a valid GST.');
//             frappe.validated = false; // Prevent form submission
//         }

//     }

// });



// frappe.ui.form.on('User Registration', {
//     validate: function(frm) {
        
//         var pan =frm.doc.pan;
     
//       var PANPatttern = /^[A-Z]{5}[0-9]{4}[A-Z]$/

//         if (!PANPatttern.test(pan)){
//             frappe.throw('Please enter a valid PAN.');
//             frappe.validated = false; // Prevent form submission
//         }


//     }

// });



