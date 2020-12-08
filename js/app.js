var  calculadora = (function(){


	//DEFINIR VARIABLES
	var st = {

		numeros : ".tecla",
		valNumero : "alt",
		operadores : ".op",
		operacion : "",
		pantalla : "#display",
		signo : "#sign",
		punto : "#punto",
		resetOn : "#on",
		igual : "#igual",
		reset : "0" ,
		valor1 : "",
		valor2 : "",
		resultado : "",
		max : 8,
		setOperacion : false,
		encontrado : false
	};

//ASIGNAR EVENTOS
var suscribirEventos = function(){
    $(st.numeros).click(events.setNumber);
    $(st.numeros + "," + st.operadores + "," + st.signo + "," + st.punto + "," + st.resetOn + "," + st.igual)
    .mousedown(events.pressTecla).mouseup(events.soltarTecla);

    $(st.operadores).click(events.pressOperador);
    $(st.signo).click(events.setNegativo);
    $(st.resetOn).click(events.reset);
    $(st.punto).click(events.setPunto);
    $(st.igual).click(events.operaciones);
};
	