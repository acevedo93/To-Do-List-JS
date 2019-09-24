



/* MODULO TO DO LIST */

/* modificado a jquery */

var toDo =(function(){

 // entorno privado
        // arrays que contienen los objetos goals :array que se guarda en consola
               var goals = [];
        //array que contiene lo que se muestra en pantalla
               var goalsScreen = [];
      //constructores
               function GoalsScreen() {
                this.h3 = "";
                this.id ="";
                this.p = "";
                this.li = "";
                this.complete="";

               }

               function Goal(){
                this.title = "";
                this.description = "";
                this.id = "";
                this.complete = false;
               }
        // funcion para añadir tareas //
               function addGoal(){

               while(true){
               	 var goal = new Goal();
               	 goal.title = $("#entrada-titulo").val();
               	 goal.description = $("#entrada-cuerpo").val();
                 goal.id = $("#entrada-id").val();
                 goals.push(goal);
                 break;
                }

                var container = document.getElementById("goals")
                var goalScreen = new GoalsScreen();

                goalScreen.h3 = document.createElement("h3");
                goalScreen.p = document.createElement("p");
                goalScreen.li = document.createElement("li");
                goalScreen.completar=document.createElement("button");
                var completar = document.createTextNode("complete");
                goalScreen.eliminar = document.createElement("button");
                var eliminar = document.createTextNode("\u00D7");
                goalScreen.id = document.createElement("h4");

               for( var i = 0; i< goals.length ; i++){

        //escribiendo el contenido del array goals a goalsScreen
         //para mostrarlo en pantalla

                 goalScreen.h3.innerHTML = goals[i].title;
                 goalScreen.li.appendChild(goalScreen.h3);
                 goalScreen.p.innerHTML = goals[i].description;
                 goalScreen.li.appendChild(goalScreen.p);
                 goalScreen.id.innerHTML = goals[i].id;
                 goalScreen.li.appendChild(goalScreen.id);
                 goalScreen.completar.appendChild(completar);
                 goalScreen.eliminar.appendChild(eliminar);
                 goalScreen.li.appendChild(goalScreen.completar);
                 goalScreen.li.appendChild(goalScreen.eliminar);
                 goalScreen.li.className = "tarea";
                 container.appendChild(goalScreen.li);
                 goalsScreen.push(goalScreen);
                 goalScreen.eliminar.click(function  eliminado(){
                   var div = this.parentElement;
                   console.log(this);
                    div.style.display = "none";
                 });
                 goalScreen.completar.click(function completado(){

                   var div2 = this.parentElement;
                   div2.style.background = "green";
                 });


                }
              }


       // funcion para mostrar todas las tareas  agregadas
          function showall(){
            var showall = $("#show-all")
            for(var i = 0 ; i < goals.length ; i++){
            var mostrarTodos = document.createElement("p");
            mostrarTodos.className = "muestra";
            mostrarTodos.innerHTML = goals[i].title;
            showall.appendChild(mostrarTodos);

           }
        }


 // entorno publico
 return{
 	iniciar:function(){
  // boton de agregar
       var btnAgregar = document.getElementById("agregar");
       btnAgregar.oclick = addGoal;
   // boton de mostrar todos
       var mostrar = document.getElementById("mostrar-todos");
       mostrar.onclick = showall;


 	  }

  }


})();

// inicia el programa
toDo.iniciar();


/* jquery-----//
 //cuando se carga el documento
$(document).ready(function(){
   console.log("cargando");
});
// seleecionando un elemento

 var hola = $("p")
 var holaVainilla = document.getElementsByTagName('p');

 console.log(hola);
 console.log(holaVainilla);

 //seleccionando clases

 var clases=$(".clases");
 console.log(clases);

//selector compuesto con clases y tags

 var selector = $(".contents ul.people li");
 console.log(selector);

//seleccionando un elemento unico y mostrando el contenido html

var selector2 = $('.hola li').eq(2).html();
console.log(selector2);

//seleccionando un elemento unico y mostrando el contenido texto plano

var selector3 = $('.hola li').eq(0).text();
console.log (selector3);
*/
