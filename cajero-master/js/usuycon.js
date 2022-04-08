let usuario = [{nombre:"salvador jimenez", contraseña:"hola12345678"}, {nombre:"mauricio lopera", contraseña:"2345678"}, {nombre:"angelo luna", contraseña:"345678"}, {nombre:"jesus ramirez", contraseña:"45678"}]
function nombreContraseña()
{
    var u = document.getElementById("usuario").value;
    var c = document.getElementById("contraseña").value;
    var val = document.getElementById("validar");
    var aus = 0;

    for(i = 0; i< usuario.length; i++){
        if(u === usuario[i].nombre && c === usuario[i].contraseña)

    {
        aus = 1;
    }
    }
    if(aus == 1)
    {
        window.open("index.html")
    }
    else
    {
        alert("verifique sus datos")
    }
}
document.getElementById("inicio").addEventListener("click", nombreContraseña);
