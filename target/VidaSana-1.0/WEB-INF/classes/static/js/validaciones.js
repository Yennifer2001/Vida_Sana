
function verContraseña() {
	const viewEye = document.getElementById("view-password-eye");
	const hiddeEye = document.getElementById("hidde-password-eye");
	const password = document.getElementById("password");
	const c_password = document.getElementById("c_password");

	if (password.type === "password") {
		password.type = "text";
		if (c_password) c_password.type = "text";
		viewEye.style.display = "none";
		hiddeEye.style.display = "inline";
	} else {
		password.type = "password";
		if (c_password) c_password.type = "password";
		viewEye.style.display = "inline";
		hiddeEye.style.display = "none";
	}
}

function modificarAction() {
    let inputs = document.querySelectorAll(".input");
    if (verificarUsername(inputs[2].value)) {
        if (verificarContraseñas(inputs)) {
            document.formulario.submit();
        }
    } else {
        alert("El usuario no es correo valido.");
    }

}

function registrarAction() {
    let inputs = document.querySelectorAll(".input");
    let check1 = document.getElementById("check_admin");
    let check2 = document.getElementById("check_user");
    if (inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "" && inputs[3].value !== "" && inputs[4].value !== "" && check1.checked || check2.checked) {
        if (verificarUsername(inputs[2].value)) {
            if (verificarContraseñas(inputs)) {
                alert("Solicitud de registro enviada...");
                document.getElementById("form_registrar").submit();
            }
        } else {
            alert("El usuario no es correo valido.");
        }
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function verificarUsername(username) {
    let codigo;
    if (username.length === 0)
        return true;
    for (let index = 0; index < username.length; index++) {
        codigo = username.charCodeAt(index);
        //@
        if (codigo == 64) {
            return true;
        }
    }
    return false;
}

function verificarContraseñas(inputs) {
    if (inputs[3].value !== "" && inputs[4].value !== "") {
        if (inputs[3].value == inputs[4].value) {
            let password = inputs[3].value;
            if (password.length >= 8) {
                let codigo;
                let mayus, mini, sim;
                mayus = false;
                mini = false;
                num = false;
                for (let index = 0; index < password.length; index++) {
                    codigo = password.charCodeAt(index);
                    //Mayusculas
                    if (codigo >= 65 && codigo <= 90) {
                        mayus = true;
                    }
                    //Minusculas
                    if (codigo >= 97 && codigo <= 122) {
                        mini = true;
                    }
                    //Numeros
                    if (codigo >= 48 && codigo <= 57) {
                        num = true;
                    }
                }
                if (mayus && mini && num) {
                    return true;
                }
            } else {
                alert("La contraseña debe tener como minimo 8 caracteres. \n Además, la contraseña debe tener al menos una letra mayuscula, una minuscula y un numero.");
                return false;
            }
        } else {
            alert("Las contraseñas no coinciden.");
            return false;
        }
    } else {
        return true;
    }
}

function olvidarContrasenia() {
    let input = document.getElementById("email").value;
    if (input !== undefined || input !== "") {
        alert("verifica tu correo electronico");
        document.formulario.submit();
    } else {
        alert("No ha escrito un correo valido");
    }

}