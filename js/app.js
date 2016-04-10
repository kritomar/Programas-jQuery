//Esconder el mensaje
//jQuery(".advertencia").hide();
//mostrar el mensaje lentamente usamos atajo $
//$(".advertencia").show("fast");


// 1. Esconder spoiler
$(".spoiler span").hide();


// 2. Agrega boton
$(".spoiler").append("<button> Mostrar Spoiler </button>");


//3. Cuando se presiona el boton
// Agregar un handler al evento click
$(".spoiler button").click(function()
	{

	//3.1 Mostrar spoiler
	$(".spoiler span").show();

	//3.2 Deshacerse del boton
	$(this).remove();
	})

function enviarAdvertencia()
{
	jQuery(".spoiler").hide().show("slow");
}
//le pasamos al handler la funcion sin parentesis 
$(document).ready(enviarAdvertencia);

