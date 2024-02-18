function submitDetails(){
    document.getElementById("submittedName").attributes["required"] = "";
    const options = {
        method: 'POST',
        url: 'http://192.168.18.8:8080/submitDetails',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            "name": document.getElementById("submittedName").value, 
            "email":document.getElementById("submittedEmail").value,
            "query":document.getElementById("submittedAddress").value,
            "message":document.getElementById("submittedReview").value})
    };

    fetch('http://192.168.18.8:8080/submitDetails', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err));
}
