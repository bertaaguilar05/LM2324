let posts = ************
imprimePosts();
function ordenar()

{
************
imprimePosts();
}

function eliminar(************) 

{
let pos = posts.indexOf(elemento);
posts.splice(pos,1);
imprimePosts();
}

function anadir()

{
let mensaje = ************
posts.push(mensaje);
imprimePosts();
}

function ************(){
let longitud=************
let i=0, codigoHTML="";
let icono="<div class='tweet'><img src='iconoTwitter.png'>";
for (i=0;i<longitud;i++)

{
    codigoHTML+=icono+posts[i]+" <button class=\"btn-image\" onclick='eliminar(posts["+i+"]);''></button><br></div>";
}

document.getElementById("demo").innerHTML=codigoHTML;
 }
 