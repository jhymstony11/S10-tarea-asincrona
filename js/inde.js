
class Alumno{
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    };

    promedio(){
        let promedio = (this.nota1  * 0.15) + (this.nota2 * 0.2) + (this.nota3 * 0.25) + (this.nota4  * 0.4);
         return promedio;

    }

     condicion(){
        if(this.promedio() > 12){
            return "estas aprobado"
        }

        else{
            return "estas desaprobado"
        }
            
     }

     obsequio(){
        if(this.promedio() > 17){
            return "Obtuviste una mochila"
        }

        else{
            return "No odtuviste nada"
        }
     }
}

let user = new Alumno();

user.codigo = prompt("Escriba su codigo");
user.nombre = prompt ("Escriba aqui su nombre");
user.nota1 = parseInt(prompt ("Escriba aqui su nota1"));
user.nota2 = parseInt(prompt ("Escriba aqui su nota2"));
user.nota3 = parseInt(prompt ("Escriba aqui su nota 3"));
user.nota4 = parseInt(prompt ("Escriba aqui su nota 4"));

alert(user.promedio());
alert(user.condicion());
alert(user.obsequio());