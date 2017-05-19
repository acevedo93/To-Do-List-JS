



/* MODULO TO DO LIST */

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
               	 goal.title = document.getElementById("entrada-titulo").value;
                   if(goal.title === ""){
                    alert("no agregaste el titulo");
                    break;
                   }
               	 goal.description = document.getElementById("entrada-cuerpo").value;
                   if(goal.description === ""){
                    alert("no agregaste la descripcion");
                    break;
                   }
                 goal.id = document.getElementById("entrada-id").value;
                   if(goal.id === ""){
                    alert("no agregaste un id");
                    break;
                   }
                 goal.complete = false;
                 goals.push(goal);
                 break;
                }

               var container = document.getElementById("goals")
               var goalScreen = new GoalsScreen();

                goalScreen.h3 = document.createElement("h3");
                goalScreen.p = document.createElement("p");
                goalScreen.li = document.createElement("li");

                goalScreen.id = document.createElement("h4");
                goalScreen.button = document.createElement("button");
                goalScreen.complete=document.createElement("button");
                   
                var xclose = document.createTextNode("\u00D7");
                var complete= document.createTextNode("complete");
               for( var i = 0; i< goals.length ; i++){
                 
        //escribiendo el contenido del array goals a goalsScreen
         //para mostrarlo en pantalla 

                 goalScreen.h3.innerHTML = goals[i].title;
                   goalScreen.li.appendChild(goalScreen.h3);

                 goalScreen.p.innerHTML = goals[i].description;
                   goalScreen.li.appendChild(goalScreen.p);
                goalScreen.id.innerHTML = goals[i].id;
                   goalScreen.li.appendChild(goalScreen.id);
                goalScreen.button.appendChild(xclose);
                goalScreen.complete.appendChild(complete);
                
                goalScreen.li.appendChild(goalScreen.complete);
                  goalScreen.li.appendChild(goalScreen.button);

                   goalScreen.li.className = "tarea";
                container.appendChild(goalScreen.li);
                goalsScreen.push(goalScreen);
                }
               
         
              }

        //funcion para editar las tareas 
              function editar(){

          for(var i = 0; i < goalsScreen.length ; i++){
        //la funcion xclose se encarga de eliminar las tareas de goalsScreen
            goalsScreen[i].button.onclick = function xclose(){
              var div = this.parentElement;
                div.style.display = "none";
              }
        //la funcion completar  da por completada una tarea en goalsScreen
            goalsScreen[i].complete.onclick = function completar(){
                
                var div2 = this.parentElement;
                div2.style.background = "#B8DC3C";
                 goals[i].complete = true;
                
              }
          }
        }
                   
       // funcion par amostrar todas las tareas  agregadas 
          function showall(){
            var showall = document.getElementById("show-all")
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
       btnAgregar.onclick = addGoal;
  //boton de editar, que activa la funcion de completar y eliminar 
       var edit = document.getElementById("editar");
       edit.onclick = editar;
   // boton de mostrar todos     
       var mostrar = document.getElementById("mostrar-todos");
       mostrar.onclick = showall;
      
 	  }
    
  }


})();

// inicia el programa 
toDo.iniciar();






