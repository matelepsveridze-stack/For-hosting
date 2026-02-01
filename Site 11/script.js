const form = document.getElementById("regForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        msg.style.color = "red";
        msg.textContent = "გთხოვთ შეიყვანოთ თექსტი";
    } else {
        msg.style.color = "green";
        msg.textContent = "რეგისტრაციამ ჩაიარა წარმატებით!";
        form.reset();
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let username;

document.getElementById('submit').onclick = function() {
    username = document.getElementById("name").value;
    console.log(username)
    document.getElementById('wel').textContent = `მოგესალმებით ${username} გოაში`
}