//variables de entrada del usuario
var dia,edad, monto, tiempoMonto, estudiante, nombre, sexo, tasatotal, cf, n=0, cuota, meses=0 , itotal;

//constantes de tasas.
const tasaAnual=0.15, tasaEdad= 0.03, tasaSexo=0.05;

//Solicitando Datos
    do{
        nombre = prompt("¿Cual es su nombre?");
    }while(nombre==="" && isNaN(nombre));

    do{
        estudiante = prompt('¿Es estudiante? Respuesta Si o No?');
        if(estudiante.toLowerCase() != "si" && estudiante.toLowerCase() != "no"){
            alert("La respuesta solo puede ser Si o No");
        }
    }while(estudiante === "" || estudiante.toLowerCase() != "si" && estudiante.toLowerCase() != "no")

    if(estudiante.toLowerCase() == "si"){
        do{
            monto = prompt("Introduzca el monto que desea obtener, Al ser estudiante el maximo es de 2000");
            if(monto>2000){
                alert("Porfavor ingresar un valor menor a 2000.")
            }

            if(monto===""){
                alert("Datos invalidos.")
            }
        }while(monto==="" || monto>2000 || monto<0 || isNaN(monto));
       
    }else{
        do{
            monto = prompt("Introduzca el monto que desea obtener");
            if(monto===""){
                alert("Datos invalidos.")
            }
        }while(monto<0 || !isNaN(monto) || monto==="" )
    }

    do{
        edad = prompt("Que edad tiene?");
        if(edad<18 && !edad==="" || edad==0){
            alert("Datos invalidos, vuelva a colocarlos, recuerde que no puede estar vacio o ser menor de 18 años")
        }

    }while(edad==="" || isNaN(edad) || edad<18);

    do{
        dia = prompt("¿En que dia del mes esta?");
        if(dia<1 || dia>31){
            alert("Recuerde los días no tienen día 0, ni tampoco día 32");
        }
    }while(dia==="" || isNaN(dia) || dia<1 || dia>31);


    do{
        sexo = prompt("¿Cual es su sexo? Hombre o Mujer");
        if(sexo.toLowerCase() !="mujer" && sexo.toLowerCase() != "hombre"){
            alert("Solo se aceptan los valores de escritos de mujer o hombre");
        }

    }while(isNaN(sexo) && sexo==="" || sexo.toLowerCase() !="mujer" && sexo.toLowerCase() != "hombre" );


    do{
        tiempoMonto = prompt("Tiempo de monto\n1- 6 meses \n2- 12 meses\n3- 18 meses\n Seleccione solo un numero del 1 al 3");
        if(tiempoMonto != 1 && tiempoMonto != 2 && tiempoMonto != 3){
            alert("Datos invalidos");
        }
    }while(isNaN(tiempoMonto) || tiempoMonto ==="" || tiempoMonto != 1 && tiempoMonto != 2 && tiempoMonto != 3 );
        
        tasatotal = tasaAnual;

     if(edad>=24 && edad<=34){
        tasatotal = tasatotal - tasaEdad;
    
     }

     if(sexo.toLowerCase() == "mujer"  && tiempoMonto==1 || tiempoMonto==2){
        tasatotal = tasatotal - tasaSexo;
     }


     switch(tiempoMonto){
        case "1":
            n = 0.5;
            meses = 6;
           
            break
        case "2":
            n = 1;
            meses = 12;
           
        case "3":
            n = 1.5;
            meses = 18;
           
     }

     itotal = tasatotal+1;
     cf = monto*Math.pow((itotal), n)
     cuota = cf/meses;
    var str;
    str += "<div class='centrito'>"
    str += "<table class='tablita'>";
    str += "<tr><td class='titulo'>Nombre</td><td class='titulo'>Mensualidad a pagar</td><td class='titulo'>Fecha de pago en cada mes</td><td class='titulo'>Monto Final</td></td>";
    str += "</tr>";
    str += "<tr>";
    str += "<td class='cositas'>"+nombre+"</td><td class='cositas' >"+cuota.toFixed(2)+"</td><td class='cositas'>"+dia+"</td><td class='cositas'>"+cf.toFixed(2)+"</td>";
    str += "</div>"
    document.write(str);
     



