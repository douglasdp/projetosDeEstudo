    function start () {
    const btn = document.querySelector("#send");

    btn.addEventListener("click", function(e){

        e.preventDefault();

        const name = document.querySelector("#name");
        const user = name.value;

        const emailInput = document.querySelector("#input-email");
        const email = emailInput.value;

        const passwordInput = document.querySelector("#input-password");
        const password = passwordInput.value;

        const passwordInputConfirm = document.querySelector("#input-password-confirm");
        const passwordOK = passwordInputConfirm.value;

        if (password === passwordOK) {
            console.log("Senha Ok");
            alert ("Cadastro realizado!");
        } else {
            alert ("Senha não Confere")
        }

        console.log(user);
        console.log(email);
        console.log(password);
        console.log(passwordOK);

    });

}

start();