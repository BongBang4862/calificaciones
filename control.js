function crearFormularioDatos(){
	setInterval(laHora,100)
	var formulario="\
	<form class='form-horizontal' action='#'>\
	<h4 id='hora'><h3 class='Text-center'>Examen Virtual de Simulacion</h3>\
	<div class='form-group'>\
		<label class='control-label col-md-2' for='nombre'>Nombre del ALumno</label>\
		<div class='col-md-8'>\
			<input class='form-control' type='text' id='nombre' placeholder='Nombre del Alumno' name='nombre'>\
		</div>\
	</div>\
	<div class='form-group'>\
		<label class='control-label col-md-2 for='email'>Sede</label>\
		<div class='col-md-4'>\
			<select class='form-control'>\
				<option>Iquique</option>\
				<option>Alto Hospicio</option>\
				<option>Pica</option>\
				<option>Pozo al Monte</option>\
			</select>\
		</div>\
	</div>\
	<div class='form-group'>\
		<label class='control-label col-md-2' for='nombre'>Curso</label>\
		<div class='col-md-4'>\
			<input class='form-control' type='text' id='observaciones' placeholder='Ingresa el mes y el curso' name='observaciones'>\
		</div>\
	</div>\
	<div class='form-group'>\
		<label class='control-label col-md-2' for='fecha'>Fecha</label>\
		<div class='col-md-6'>\
		<label class='control-label'>Fecha</label>\
		</div>\
	</div>\
	<div class='form-group'>\
		<label class='control-label col-md-2' for='porcentaje'>Porcentaje</label>\
		<div class='col-md-1'>\
			<input class='form-control' name='porcentaje'id='porcentaje' type='text'></input>\
		</div>\
		<label class='control-label col-md-1' for='nota'>Nota</label>\
		<div class='col-md-1'>\
			<input class='form-control' name='nota'id='nota' type='text'></input>\
		</div>\
		<label class='control-label col-md-1' for='aprobado'>Aprobado</label>\
		<div class='col-md-1'>\
			<input class='form-control' name='aprobado'id='aprobado' type='text'></input>\
		</div>\
	</div>\
</form>";

          document.getElementById('mesa').innerHTML=formulario
}


function laHora(){

	let tiempo= new Date();
	document.getElementById('hora').innerHTML=tiempo.getHours()+" : " + tiempo.getMinutes() + ":" + tiempo.getSeconds();

}
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    alert("hola")
  }
};
xmlhttp.open("GET", "json/data.json", true);
xmlhttp.send();
