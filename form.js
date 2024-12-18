function input(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let div = document.getElementById("div").value

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Div:", div);


    document.getElementById("myp").textContent = `Thank you ${name} for your Feedback`;
    
}

// document.getElementById("myp").textContent = `Thank you ${name} for your Feedback `