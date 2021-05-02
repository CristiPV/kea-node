function submitContact( form ) {
    const contactFormData = new FormData( form );
    const data = {};

    for( let entry of contactFormData.entries() ){
        // entry[0] - key; entry[1] - value.
        data[ entry[0] ] = entry[1];
    }

    fetch('/api/contact', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( data )
    })
    .then( response => {
        return response.text();
    } )
    .then( result =>
    {
        if( result === "OK" ) {
            showSuccessToast();
        }
    } );

    // Reset the form
    form.getElementsByClassName( "form-reset" )[0].click();

    // Disable the form's redirect
    return false;
}

function showSuccessToast () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "0", //300
        "hideDuration": "0", //1000
        "timeOut": "0", //5000
        "extendedTimeOut": "0", //1000
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    toastr["success"](" ", "Email has been sent ! :D");
}

/* Alternative way of using FormData ( did not get it to work )
function submitContact2( form ) {
    fetch('/api/contact2', {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: new FormData( form )
    });
}
*/