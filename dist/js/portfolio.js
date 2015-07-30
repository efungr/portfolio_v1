$(document).ready(function () {
    
    $(".dropdown").click(function () {
        $(".dropdown-menu").slideToggle(100, function () {
        });
    });    

	$('.homelnk').on('click', function (e) {
		e.preventDefault();
		$(".anchorhome").ScrollTo();
	});

});