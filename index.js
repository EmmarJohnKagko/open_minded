const submitButton = document.getElementById("sign");

submitButton.addEventListener("click", () => {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var middle = document.getElementById("middle").value; 

    const data = {
        firstname: firstname,
        lastname: lastname,
        middle: middle,
    }

    fetch("http://localhost/ACTIVITY/index.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json()) 
    .then((data) => {
        console.log(data); 
        
    })
    .catch((error) => {
        console.error('Error:', error); 
    });
});
