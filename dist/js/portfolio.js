$(document).ready(function () {
    
    $(".dropdown").click(function () {
        $(".dropdown-menu").slideToggle(400, function () {
        });
    });    

	$('.homelnk').on('click', function (e) {
		e.preventDefault();
		$(".anchorhome").ScrollTo();
	});

});