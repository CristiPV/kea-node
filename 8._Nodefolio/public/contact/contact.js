function submitContact( form ) {
    const contactFormData = new FormData( form );
    const data = {};

    for( let entry of contactFormData.entries() ){
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

function submitContact2( form ) {
    fetch('/api/contact2', {
        method: 'POST',
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: new FormData( form )
    });
}