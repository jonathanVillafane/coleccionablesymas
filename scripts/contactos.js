// alert ("Hola Mundo")

function validar(){
    var nomape = document.getElementById("full-name")
    var mail = document.getElementById("email-address")
    var carta = document.getElementById("tema")
    var msg = document.getElementById("message")
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), { keyboard: false })
   if(nomape.value !== "" && mail.value !== ""  && tema.value > 0 && msg.value !== ""){
        if(validarEmail(mail.value)){
            var frm = document.getElementById("fs-frm")
            frm.submit()
        }else{
            var errtext=document.getElementById("error-form")
            errtext.innerHTML="<br>Correo Electronico"
            myModal.toggle()
            mail.focus()
        }
    }else{
        var errtext = document.getElementById("error-form")
        //   Uso de asignación con operador ternario
        errtext.innerHTML= 
            (nomape.value === "" ? "<br>Nombre y Apellido" : "") + 
            (mail.value === "" ? "<br>Correo Electrónico" : "") + 
            (tema.value < 1 ? "<br>Tema" : "") + 
            ( msg.value === "" ? "<br>Mensaje" : "")
        myModal.toggle()
    }
}

function validarEmail(email){
    return email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
