function reset () {

};

jQuery(function($) {

$('#opleiding').click(
		function(event) { 
			$("#opleidingextra").slideToggle('medium');
			
		}
	);


$('#onderwijsprogramma').click(
		function(event) { 
			$("#onderwijsprogrammaextra").slideToggle('medium');
			
		}
	);

$('#organisatieprogramma').click(
		function(event) { 
			$("#organisatieprogrammaextra").slideToggle('medium');
			
		}
	);

$('#stages').click(
		function(event) { 
			$("#stagesextra").slideToggle('medium');
			
		}
	);


});
