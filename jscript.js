
/*Funcion js que captura los datos del formulario y los convierte en un JSON para enviarlo  a otra pagina*/

document.addEventListener("DOMContentLoaded",function(e){
    var miForm=document.getElementById('miForm');
    miForm.onsubmit=function(e){
        e.preventDefault();
        var formData=new FormData(this);
        var jsonData= {};
        for (var [k,v] of formData) {
            jsonData[k]=v;
        }
        console.log(jsonData);
    }
});