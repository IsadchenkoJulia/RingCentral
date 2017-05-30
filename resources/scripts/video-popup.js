var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('youtubePlayer', {
		height: '360',
		width: '640',
		videoId: '0FoTstucf9U'
	});
}

$("[href='#mediaPopup']").on("click", function () {
	$(".overlay").fadeIn();
	player.playVideo();
});

$(".overlay").on("click", function () {
	$(this).fadeOut();
	player.pauseVideo();
});