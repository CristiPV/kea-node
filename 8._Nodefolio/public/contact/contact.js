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
    });
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