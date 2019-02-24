window.onload = function(){
	$('body').bind('copy paste cut drag drop', function (e) {
	e.preventDefault();
	});
	console.log("Created in 23/02/2019");
	disableselect();
	mount();
}

function player(){
	let video = {
		'name' : 'The Seven Deadly Sins - Prisioneiros do céu',
		'background' : 'back.webp',
		'video': 'https://r3---sn-cg51pauxax-4aoe.googlevideo.com/videoplayback?id=e36327a4892ba083&itag=22&source=blogger&mm=31&mn=sn-cg51pauxax-4aoe&ms=au&mv=m&pl=18&ei=jRpyXNvPOcbpqgWzk6nICw&susc=bl&mime=video/mp4&dur=1420.202&lmt=1550677602672447&mt=1550981682&ip=201.34.158.202&ipbits=0&expire=1551010573&sparams=ip,ipbits,expire,id,itag,source,mm,mn,ms,mv,pl,ei,susc,mime,dur,lmt&signature=6A1E1B1A341F82EF8239803F4AE64015476F390925764CC1FDE833C9A77BF881.8BDE00D05DADA4E4EA1767268C8095F61777CCCFC5FA08330131832FECE885A6&key=us0&cpn=lJXWNgppsi1C4tdT&c=WEB_EMBEDDED_PLAYER&cver=20190221'
	};
	let background = "<div class='bg' style='background-image:url("+ video.background + ");'><div class='opa'></div></div>";
	let player = "<div class='player' id='player'></div>";
	$("#root").append(player);
	$("#root").append(background);
	let bottom = "<div class='top'><div class='back icon' data-href='back'></div></div><div class='bottom'><input type='range' id='seek-bar' value='0'><span class='time'>1:20</span><div class='play icon' data-href='play'></div><div class='back1 icon' data-href='back1'></div><div class='back2 icon' data-href='back2'></div><div class='volume icon' data-href='volume'></div><div class='help icon' data-href='help'></div><div class='legenda icon' data-href='legenda'></div><div class='screen icon' data-href='full'></div></div>";
	$("#player").append(bottom);
	$("#player .progress .subprogress .toggle").mouseover(function(){
		$(this).css("transform", "scale(1.3)");
	});
	$("#player .progress .subprogress .toggle").mouseout(function(){
		$(this).css("transform", "scale(1)");
	});
	$("#player .progress").mouseover(function(){
		$(this).css("padding", "1px");
		$("#player .progress .subprogress .toggle").css("transform", "scale(1.5)");
	});
	$("#player .progress").mouseout(function(){
		$(this).css("padding", "0px");
		$("#player .progress .subprogress .toggle").css("transform", "scale(1)");
	});
	if(video.video == ""){
		console.log("Not found video");
	}
	else{
		console.log("Found video , its link " + video.video);
		watch();
	}
	clicks();
}

function mount(){
	$('body').bind('copy paste',function(e) {
    e.preventDefault(); return false; 
	});
	let video = {
		'name' : 'The Seven Deadly Sins - Prisioneiros do céu',
		'background' : 'back.webp',
		'mp4': ''
	};
	let background = "<div class='bg' style='background-image:url("+ video.background + ");'></div>";
	let loading = "<div style='transform:scale(1)' id='loading'><img class='spinner' src='site-spinner.png'/><div class='opa'></div></div>";
	$("#root").append(loading)
	$("#loading").append(background)
	let header = "<div id='header'><h1>" + video.name + "</h1> <div class='close'><svg><circle cx='12' cy='12' r='11' stroke='black' stroke-width='2' fill='white' /><path stroke='black' stroke-width='4' fill='none' d='M6.25,6.25,17.75,17.75' /><path stroke='black' stroke-width='4' fill='none' d='M6.25,17.75,17.75,6.25' /></svg></div></div>"
	$("#loading").append(header);
	setTimeout(function(){
		$("#loading").css("transform", "scale(0)");
		player();
	}, 400);
}


function clicks(){
	var seekBar = document.getElementById("seek-bar");
	seekBar.addEventListener("change", function() {
	  // Calculate the new time
	  var time = myvideo.duration * (seekBar.value / 100);

	  // Update the video time
	  myvideo.currentTime = time;
	  console.log("time " + time);
	  myvideo.pause();
	  $(".play").css("background-position", '-146px 5px');
	});
	let rodando = 1; // Autoplay
	var myvideo = document.getElementById("myvideo");
	var muted = 0;
	$(".icon").click(function(){
		let func = $(this).data("href");
		if(func == "play"){
			if(rodando == 1){
			$(".play").css("background-position", '-146px 5px');
			rodando = 0;
			myvideo.pause();
			}
			else{
			rodando = 1;
			$(".play").css("background-position", '-72px 5px');
			myvideo.play();
			}
		}
		else if(func == "back1"){
			myvideo.currentTime -= 30;
			
		}
		else if(func == "back2"){
			myvideo.currentTime = 30;
		}
		else if(func == "volume"){
			if(muted == 0){
				myvideo.muted = true;
				$(".volume").css("background-position", '-461px 5px');
				muted = 1;
			}
			else{
				myvideo.muted = false;
				$(".volume").css("background-position", '-526px 5px');
				muted = 0;
			}
		}
	});
}

function disableselect(e){
	return false
	}
	function reEnable(){
	return true
	}
	document.onselectstart=new Function ("return false")
	if (window.sidebar){
	document.onmousedown=disableselect
	document.onclick=reEnable
}

function watch(){
	let video = {
		'name' : 'The Seven Deadly Sins - Prisioneiros do céu',
		'background' : 'back.webp',
		'video': 'https://r3---sn-cg51pauxax-4aoe.googlevideo.com/videoplayback?id=e36327a4892ba083&itag=22&source=blogger&mm=31&mn=sn-cg51pauxax-4aoe&ms=au&mv=m&pl=18&ei=jRpyXNvPOcbpqgWzk6nICw&susc=bl&mime=video/mp4&dur=1420.202&lmt=1550677602672447&mt=1550981682&ip=201.34.158.202&ipbits=0&expire=1551010573&sparams=ip,ipbits,expire,id,itag,source,mm,mn,ms,mv,pl,ei,susc,mime,dur,lmt&signature=6A1E1B1A341F82EF8239803F4AE64015476F390925764CC1FDE833C9A77BF881.8BDE00D05DADA4E4EA1767268C8095F61777CCCFC5FA08330131832FECE885A6&key=us0&cpn=lJXWNgppsi1C4tdT&c=WEB_EMBEDDED_PLAYER&cver=20190221'
	};
	$(".bg").css("transform", "scale(0)");
	console.log("Background hidden");
	let videotag = "<div id='video'></div>";
	$("#player").append(videotag)
	let videoplayer = "<video id='myvideo' src="+ video.video + " autoplay/>";
	$("#player #video").append(videoplayer);
	var myvideo = document.getElementById("myvideo");
	var duration = myvideo.duration;
	$("#player .time").html(duration);
	var seekBar = document.getElementById("seek-bar");
	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
	  // Calculate the new time
	  var time = myvideo.duration * (seekBar.value / 100);

	  // Update the video time
	  myvideo.currentTime = time;
	  console.log("time " + time);
	  myvideo.pause();
	  $(".play").css("background-position", '-146px 5px');
	});
}