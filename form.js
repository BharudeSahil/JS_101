function input(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let div = document.getElementById("div").value

    document.getElementById("myp").textContent = `Thank you ${name} for your Feedback `
}
