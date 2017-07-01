$(document).ready(function(){    
    $('#add1').click(function add() {
	    var a = $("#optnSelect1").val();
	    a++;
	    if (a => 1) {
	        $("#sub1").prop("disabled", false);
	    }
	    $("#optnSelect1").val(a);
	});

	$('#sub1').click(function subst() {
	    var b = $("#optnSelect1").val();
	    if (b.length > 0 && b >= 1) {
	        b--;
	        $("#optnSelect1").val(b);
	    }
	    else {
	        $("#sub1").prop("disabled", true);
	    }
	});
	$('#add2').click(function add() {
	    var a = $("#optnSelect2").val();
	    a++;
	    if (a => 1) {
	        $("#sub2").prop("disabled", false);
	    }
	    $("#optnSelect2").val(a);
	});

	$('#sub2').click(function subst() {
	    var b = $("#optnSelect2").val();
	    if (b.length > 0 && b >= 1) {
	        b--;
	        $("#optnSelect2").val(b);
	    }
	    else {
	        $("#sub2").prop("disabled", true);
	    }
	});
	$('#add3').click(function add() {
	    var a = $("#optnSelect3").val();
	    a++;
	    if (a => 1) {
	        $("#sub3").prop("disabled", false);
	    }
	    $("#optnSelect3").val(a);
	});

	$('#sub3').click(function subst() {
	    var b = $("#optnSelect3").val();
	    if (b.length > 0 && b >= 1) {
	        b--;
	        $("#optnSelect3").val(b);
	    }
	    else {
	        $("#sub3").prop("disabled", true);
	    }
	});   
});
$(document).ready(function(){ 
    $("input[name=optradio]").change(function() {
        var test = $(this).val();
        $(".radioclass").hide();
        $("#"+test).show();
    }); 
});