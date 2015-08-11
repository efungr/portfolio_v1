$(document).ready(function () {
    
    $(".dropdown").click(function () {
        $(".dropdown-menu").slideToggle(400, function () {
        });
    });    

	$('.homelnk').on('click', function (e) {
		e.preventDefault();
		$(".anchorhome").ScrollTo();
	});
    
    $('.aboutlnk').on('click', function (e) {
		e.preventDefault();
		$(".anchorabout").ScrollTo();
	});
    
    $('.projectlnk').on('click', function (e) {
		e.preventDefault();
		$(".anchorproject").ScrollTo();
	});
    
    $('.contactlnk').on('click', function (e) {
		e.preventDefault();
		$(".anchorcontact").ScrollTo();
	});

});