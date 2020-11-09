function message() {
    if (document.getElementById('box').value !== "") {
        document.getElementById('result').innerHTML = document.getElementById("box").value;
        document.getElementById('error').innerHTML = "";
    } else {
        document.getElementById('error').innerHTML = "Please Enter a Value";
    }
}
document.getElementById('submit').addEventListener("click", message);