window.onload = function(){
	
	// --------------------对话框类型--------------------------
	function Dialog(id) {	// 定义对话框类型对象
		this.id = id;
	}
	Dialog.prototype.show = function() {	// 显示对话框
		var dlg = document.getElementById(this.id);
		dlg.style.display = 'block';
		dlg = null;
	}
	Dialog.prototype.close = function() {	// 关闭对话框
		var dlg = document.getElementById(this.id);
		dlg.style.display = 'none';
		dlg = null;
	}


	// -------------关闭按钮-------------
	function display_closebtn(id) {		// 显示关闭按钮
		var closebtn = document.getElementById(id);
		closebtn.style.backgroundImage = "url('./images/close picto.png')";
		closebtn.style.display = 'block';
	}
	function hidden_closebtn(id) {		// 隐藏关闭按钮
		var closebtn = document.getElementById(id);
		closebtn.style.display = 'none';
	}


	// -----------------弹出对话框-----------------------------
	var count2 = count3 = count4 = count5 = count6 = count7 = count8 = count9 = 
		count10 = count11 = count12 = 0;

	var dlgBackimg = new Dialog('dlgBackimg');
	var dlgChoose = new Dialog('dlgChoose');
	var dlgSoundlevel = new Dialog('dlgSoundLevel');
	var dlgQr = new Dialog('dlgQr');
	var dlgBigDraw = document.getElementById('dlgBigDraw');
	// var dlgSmallDraw = new Dialog('dlgSmallDraw');
	var dlgSmallDraw = document.getElementById('dlgSmallDraw');
	var dlgWord = new Dialog('dlgWord');
	var dlgInstruction = new Dialog('dlgInstruction');
	var dlgLight = new Dialog('dlgLight');
	var dlgTimer = new Dialog('dlgTimer');
	var dlgClock = new Dialog('dlgClock');

	var subContainer2 = document.getElementById('bottom-sub-container2');
	subContainer2.onclick = backimgDialog;

	var subContainer3 = document.getElementById('bottom-sub-container3');
	subContainer3.onclick = chooseDialog;

	var subContainer4 = document.getElementById('bottom-sub-container4');
	subContainer4.onclick = soundlevelDialog;

	var subContainer5 = document.getElementById('bottom-sub-container5');
	subContainer5.onclick = qrDialog;

	var subContainer6 = document.getElementById('bottom-sub-container6');
	subContainer6.onclick = bigdrawDialog;

	var subContainer7 = document.getElementById('bottom-sub-container7');
	subContainer7.onclick = smalldrawDialog;

	var subContainer8 = document.getElementById('bottom-sub-container8');
	subContainer8.onclick = wordDialog;

	var subContainer9 = document.getElementById('bottom-sub-container9');
	subContainer9.onclick = instructionDialog;

	var subContainer10 = document.getElementById('bottom-sub-container10');
	subContainer10.onclick = lightDialog;

	var subContainer11 = document.getElementById('bottom-sub-container11');
	subContainer11.onclick = timerDialog;

	var subContainer12 = document.getElementById('bottom-sub-container12');
	subContainer12.onclick = clockDialog;

	function backimgDialog(){
		count2++;
		if (count2 % 2 == 1) {
			dlgBackimg.show();
			display_closebtn('sub-container2-elem');
			document.getElementById('dlgBackimg-back').style.display = 'block';
		}
		else{
			dlgBackimg.close();
			hidden_closebtn('sub-container2-elem');
			document.getElementById('dlgBackimg-back').style.display = 'none';
		}
	}
	function chooseDialog(){
		count3++;
		if (count3 % 2 == 1) {
			dlgChoose.show();
			display_closebtn('sub-container3-elem');
		}
		else{
			dlgChoose.close();
			hidden_closebtn('sub-container3-elem');
		}
	}
	function soundlevelDialog(){
		count4++;
		if (count4 % 2 == 1) {
			dlgSoundlevel.show();
			display_closebtn('sub-container4-elem');
		}
		else{
			dlgSoundlevel.close();
			hidden_closebtn('sub-container4-elem');
		}
	}
	function qrDialog(){
		count5++;
		if (count5 % 2 == 1) {
			dlgQr.show();
			display_closebtn('sub-container5-elem');
		}
		else{
			dlgQr.close();
			hidden_closebtn('sub-container5-elem');
		}
	}
	function bigdrawDialog(){
		count6++;
		if (count6 % 2 == 1) {
			dlgBigDraw.style.opacity = 1;
			dlgBigDraw.style.transform = "translate(0px, 0px)";
			display_closebtn('sub-container6-elem');
		}
		else{
			dlgBigDraw.style.opacity = 0;
			dlgBigDraw.style.transform = "translate(0px, -1500px)";
			hidden_closebtn('sub-container6-elem');
		}
	}
	function smalldrawDialog(){
		count7++;
		if (count7 % 2 == 1){
			dlgSmallDraw.style.opacity = 1;
			// dlgSmallDraw.style.transform = "translate(127px, 108px)";
			dlgSmallDraw.style.left = "127px";
			dlgSmallDraw.style.top = "108px";
			display_closebtn('sub-container7-elem');
		}
		else{
			dlgSmallDraw.style.opacity = 0;
			// dlgSmallDraw.style.transform = "translate(0px, -1500px)";
			dlgSmallDraw.style.left = "0px";
			dlgSmallDraw.style.top = "-1000px";
			hidden_closebtn('sub-container7-elem');
		}
	}
	function wordDialog(){
		count8++;
		if (count8 % 2 == 1){
			dlgWord.show();
			display_closebtn('sub-container8-elem');
		}
		else{
			dlgWord.close();
			hidden_closebtn('sub-container8-elem');
		}
	}
	function instructionDialog(){
		count9++;
		if (count9 % 2 == 1){
			dlgInstruction.show();
			display_closebtn('sub-container9-elem');
		}
		else{
			dlgInstruction.close();
			hidden_closebtn('sub-container9-elem');

			hidden_flag = false;
			big_backcircle.style.opacity = 0;
			for (var i = 0; i < all_text_hidden.length; i++) {
	    		all_text_hidden[i].style.opacity = 1;
	    	}
	    	for (var i = 0; i < all_container_shrink.length; i++) {
	    		all_container_shrink[i].style.width = '214px';
	    	}
	    	for (var i = 0; i < all_bigimg_hidden.length; i++) {
	    		all_bigimg_hidden[i].style.opacity = 0;
	    	}
		}
	}
	function lightDialog(){
		count10++;
		if (count10 % 2 == 1){
			dlgLight.show();
			display_closebtn('sub-container10-elem');
		}
		else{
			dlgLight.close();
			redlight.close();
			yellowlight.close();
			greenlight.close();
			hidden_closebtn('sub-container10-elem');
		}
	}
	function timerDialog(){
		count11++;
		if (count11 % 2 == 1){
			dlgTimer.show();
			display_closebtn('sub-container11-elem');
		}
		else{
			dlgTimer.close();
			hidden_closebtn('sub-container11-elem');
		}
	}
	function clockDialog(){
		count12++;
		if (count12 % 2 == 1){
			dlgClock.show();
			display_closebtn('sub-container12-elem');
		}
		else{
			dlgClock.close();
			hidden_closebtn('sub-container12-elem');
		}
	}




	// --------------------拖放对话框（二、获取父类）------------------
	var dragParentChoose = document.getElementById('drag-flag-container3');
	dragParentChoose.onmousedown = dragParent;

	var dragParentSoundlevel = document.getElementById('drag-soundlevel');
	dragParentSoundlevel.onmousedown = dragParent;

	var dragParentQr = document.getElementById('drag-flag-container5');
	dragParentQr.onmousedown = dragParent;

	var dragParentSmallDraw = document.getElementById('drag-flag-container7');
	dragParentSmallDraw.onmousedown = dragParent;

	var dragParentWord = document.getElementById('drag-flag-container8');
	dragParentWord.onmousedown = dragParent;

	var dragParentInstruction = document.getElementById('drag-instruction');
	dragParentInstruction.onmousedown = dragParent;

	var dragParentLight = document.getElementById("drag-light");
	dragParentLight.onmousedown = dragParent;

	var dragParentTimer = document.getElementById('drag-flag-container11');
	dragParentTimer.onmousedown = dragParent;

	var dragParentClock = document.getElementById('drag-flag-container12');
	dragParentClock.onmousedown = dragParent;


	function dragParent(event){
		var object = event.target.parentNode;
		var x = event.clientX - object.offsetLeft;
		var y = event.clientY - object.offsetTop;

		document.onmousemove = function(event){
			var l = event.clientX - x;
			var t = event.clientY - y;
			if (l < 0){
				l = 0;
			} else if (l > document.documentElement.clientWidth - object.offsetWidth) {
				l = document.documentElement.clientWidth - object.offsetWidth;
			}
			if (t < 0) {
				t = 0;
			} else if (t > document.documentElement.clientHeight - object.offsetHeight) {
				t = document.documentElement.clientHeight - object.offsetHeight;
			}
			object.style.left = l + "px";
	        object.style.top = t + "px";
		}
		document.onmouseup = function() {
	        document.onmousemove = null;
	        document.onmouseup = null;
	    }
	}




	// ----------------切换语言-------------------
	var bottom_langimg = document.getElementById('bottom-langimg');

	var langbtn1 = document.getElementById('langbtn1');
	var langbtn2 = document.getElementById('langbtn2');

	langbtn1.onclick = getType;
	langbtn2.onclick = getType;

	function getType(){
		var id = this.id;
		if (id == 'langbtn1') {
			loadProperties('zh_CN');
		}
		else if (id == 'langbtn2') {
			loadProperties('en_US');
		}
	}

	function loadProperties(type){
		$.i18n.properties({
			name: 'strings', // 资源文件名称
	        path: './languages/', // 资源文件所在目录路径
	        mode: 'map', // 模式：变量或 Map
	        language: type, // 对应的语言
	        cache: false,
	        encoding: 'UTF-8',
	        callback: function(){	      
	        	$('.changelang').each(function(){	
	        		// console.log($(this)[0]);
	        		// console.log($(this)[0].id.slice(7));
	        		// console.log($.i18n.prop($(this)[0].id.slice(7)));
	        		if (type == 'zh_CN') {
		        		bottom_langimg.src = "images/chinese.png";
		        	} else {
		        		bottom_langimg.src = "images/english_uk.png"
		        	}

	        		$(this).html($.i18n.prop($(this)[0].id.slice(7)));
	        	});
	        	
	        	// console.log($('#bottom-text1'));
	        	// $('#bottom-text1').html($.i18n.prop('text1'));
	        	// $('#bottom-text2').html($.i18n.prop('text2'));
	        	// $('#bottom-text3').html($.i18n.prop('text3'));
	        	// ...
	        	// $('#bottom-text11').html($.i18n.prop('text11'));
	        	// $('#bottom-text12').html($.i18n.prop('text12'));
	        }
		});
	}



    // ------------显示语言选择框-------------
    var showlangopt_count = 0;
    var showlangopt_btn = document.getElementById('bottom-sub-container1');
    var dlgLanguage = document.getElementById('dlgLanguage');

    showlangopt_btn.onclick = showLangOpt;

    function showLangOpt(){
    	showlangopt_count++;
    	if (showlangopt_count % 2 == 1) {
    		dlgLanguage.className += ' show';
    		display_closebtn('sub-container1-elem');
    	} else {
    		dlgLanguage.className = 'dlgLanguage';
    		hidden_closebtn('sub-container1-elem');
    	}
    }




	// ------------------红绿灯------------------
	var turnredlight = document.getElementById('turn-red-light');
	var turnyellowlight = document.getElementById('turn-yellow-light');
	var turngreenlight = document.getElementById('turn-green-light');

	var redlight = new Dialog('dlgLight-cover-red');
	var yellowlight = new Dialog('dlgLight-cover-yellow');
	var greenlight = new Dialog('dlgLight-cover-green');

	var audioClick = new Audio("audio/click.wav");

	turnredlight.onclick = f_redlight;
	turnyellowlight.onclick = f_yellowlight;
	turngreenlight.onclick = f_greenlight;

	function f_redlight(){
		audioClick.play();
		redlight.show();
		yellowlight.close();
		greenlight.close();
	}
	function f_yellowlight(){
		audioClick.play();
		redlight.close();
		yellowlight.show();
		greenlight.close();
	}
	function f_greenlight(){
		audioClick.play();
		redlight.close();
		yellowlight.close();
		greenlight.show();
	}



	// --------------切换选人方式--------------
	var switchbtn1 = document.getElementById('sub-dlgChoose-switchbtn1');
	var switchbtn2 = document.getElementById('sub-dlgChoose-switchbtn2');
	var namepicker = document.getElementById('sub-dlgChoose-namepicker');
	var dice = document.getElementById('sub-dlgChoose-dice');

	switchbtn1.onclick = function(){
		switchbtn1.style.display = 'none';
		switchbtn2.style.display = 'block';
		namepicker.style.display = 'none';
		dice.style.display = 'block';
	}
	switchbtn2.onclick = function(){
		switchbtn1.style.display = 'block';
		switchbtn2.style.display = 'none';
		namepicker.style.display = 'block';
		dice.style.display = 'none';
	}


	// -------------------小屏画板加载\卸载图像----------------
	var uploadbtn_smalldraw = document.getElementById('uploadbtn_smalldraw');
	var kruisbtn_smalldraw = document.getElementById('uploadkruisbtn_smalldraw');
	var imgcontainer_smalldraw = document.getElementById('img-container-smalldraw');

	uploadbtn_smalldraw.onclick = function(){
		uploadbtn_smalldraw.style.display = 'none';
		kruisbtn_smalldraw.style.display = 'block';
		imgcontainer_smalldraw.style.display = 'block';
	}
	kruisbtn_smalldraw.onclick = function(){
		uploadbtn_smalldraw.style.display = 'block';
		kruisbtn_smalldraw.style.display = 'none';
		imgcontainer_smalldraw.style.display = 'none';
	}



	// --------------------全屏显示/退出全屏--------------
	var fullscreenbtn = document.getElementById('fullscreenbtn');
	var cancelscreenbtn = document.getElementById('cancelscreenbtn');

	fullscreenbtn.onclick = function(){
		fullscreenbtn.style.display = 'none';
		cancelscreenbtn.style.display = 'block';
		requestFullScreen(document.documentElement);
	}
	cancelscreenbtn.onclick = function(){
		fullscreenbtn.style.display = 'block';
		cancelscreenbtn.style.display = 'none';
		cancelFullScreen(document);
	}

	function requestFullScreen(element) {
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject != "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
    function cancelFullScreen(element) {
        var cancelMethod = element.cancelFullScreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.exitFullScreen;
        if (cancelMethod) {
            cancelMethod.call(element);
        } else if (typeof window.ActiveXObject != "undefined") {
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        } 
    }




    // ------------隐藏底部工具框--------------
    var hidetoolbar_count = 0;
    var hidetoolbar_btn = document.getElementById('hidetoolbar-container');
    var hidetoolbar_arrow = document.getElementById('hidetoolbar-arrow');

    var bottom_container = document.getElementById('bottom-container');

    hidetoolbar_btn.onclick = hideToolBar;

    function hideToolBar(){
    	hidetoolbar_count++;
    	if (hidetoolbar_count % 2 == 1){
    		hidetoolbar_arrow.className += ' revolve';
    		bottom_container.className += ' hide';
    	}
    	else{
    		hidetoolbar_arrow.className = 'hidetoolbar-arrow';
    		bottom_container.className = 'bottom-container';
    	}
    }



    // ---------------切换12、24小时制----------------
    var btn12h = document.getElementById('btn-12h');
    var btn24h = document.getElementById('btn-24h');
    var clock12h = document.getElementById('clock12h');
    var clock24h = document.getElementById('clock24h');

    btn12h.onclick = showclock12h;
    btn24h.onclick = showclock24h;

    function showclock12h(){
    	btn12h.style.display = 'none';
    	btn24h.style.display = 'block';
    	clock12h.style.display = 'block';
    	clock24h.style.display = 'none';
    }
    function showclock24h(){
    	btn12h.style.display = 'block';
    	btn24h.style.display = 'none';
    	clock12h.style.display = 'none';
    	clock24h.style.display = 'block';
    }



    // ----------------切换时间面、日期面------------------
    var btn_time = document.getElementById('btn-clock1');
    var btn_date = document.getElementById('btn-clock2');

    var clock_time = document.getElementById('dlgClock-time');
    var clock_date = document.getElementById('dlgClock-date');

    btn_time.onclick = showclockdate;
    btn_date.onclick = showclocktime;

    function showclockdate(){
    	btn_time.style.display = 'none';
    	btn_date.style.display = 'block';
    	clock_time.style.display = 'none';
    	clock_date.style.display = 'block';
    }
    function showclocktime(){
    	btn_time.style.display = 'block';
    	btn_date.style.display = 'none';
    	clock_time.style.display = 'block';
    	clock_date.style.display = 'none';
    }



    // ----------------切换沙漏面、计时器面-------------------
    var btn_timer1 = document.getElementById('btn-timer1');
    var btn_timer2 = document.getElementById('btn-timer2');

    var sandglass = document.getElementById('dlgTimer-sandglass');
    var stopwatch = document.getElementById('dlgTimer-stopwatch');

    btn_timer1.onclick = showstopwatch;
    btn_timer2.onclick = showsandglass;

    function showstopwatch(){
    	btn_timer1.style.display = 'none';
    	btn_timer2.style.display = 'block';
    	sandglass.style.display = 'none';
    	stopwatch.style.display = 'block';
    }
    function showsandglass(){
    	btn_timer1.style.display = 'block';
    	btn_timer2.style.display = 'none';
    	sandglass.style.display = 'block';
    	stopwatch.style.display = 'none';
    }



    // ------------------学习指令-----------------
    var hidden_flag = false;

    var quietbtn = document.getElementById('quiet-img-container');
    var whisperbtn = document.getElementById('whisper-img-container');
    var askbtn = document.getElementById('ask-img-container');
    var groupbtn = document.getElementById('group-img-container');

    // 隐藏文本
    var all_text_hidden = document.getElementsByName('text-hidden');
    // 缩小包含框
    var all_container_shrink = document.getElementsByName('container-shrink');
    // 隐藏所有大图
    var all_bigimg_hidden = document.getElementsByName('bigimg-hidden');
    // 大图背景圆框
    var big_backcircle = document.getElementById('big-back-circle');
    // 超时隐藏的动态按钮
    var btn_dynamic_hidden = document.getElementsByName('btn-dynamic-hidden');

    var quiet_bigimage = document.getElementById('quiet-big-image');
    var quiet_bigtext = document.getElementById('quiet-big-text');
    var whisper_bigimage = document.getElementById('whisper-big-image');
    var whisper_bigtext = document.getElementById('whisper-big-text');
    var ask_bigimage = document.getElementById('ask-big-image');
    var ask_bigtext = document.getElementById('ask-big-text');
    var group_bigimage = document.getElementById('group-big-image');
    var group_bigtext = document.getElementById('group-big-text');

    quietbtn.onclick = readyBigImg;
    whisperbtn.onclick = readyBigImg;
    askbtn.onclick = readyBigImg;
    groupbtn.onclick = readyBigImg;
    
    function readyBigImg(){
    	// console.log(this.id);
    	if (this.id == "quiet-img-container") 
    		showBigImg(quiet_bigimage, quiet_bigtext);
    	else if (this.id == "whisper-img-container") 
    		showBigImg(whisper_bigimage, whisper_bigtext);
    	else if (this.id == "ask-img-container") 
    		showBigImg(ask_bigimage, ask_bigtext);
    	else if (this.id == "group-img-container") 
    		showBigImg(group_bigimage, group_bigtext);
    }

    function showBigImg(bigimage, bigtext){
    	// console.log(this);
    	if (!hidden_flag) {
    		hidden_flag = true;
    		big_backcircle.style.opacity = 1;

    		for (var i = 0; i < all_text_hidden.length; i++) {
	    		all_text_hidden[i].style.opacity = 0;
	    	}
	    	for (var i = 0; i < all_container_shrink.length; i++) {
	    		all_container_shrink[i].style.width = '62px';
	    	}	    	
    	}
    	// 隐藏所有大图
    	for (var i = 0; i < all_bigimg_hidden.length; i++) {
	    		all_bigimg_hidden[i].style.opacity = 0;
	    	}

    	bigimage.style.opacity = 1;
    	bigtext.style.opacity = 1;

    	// 超时隐藏动态按钮
    	setTimeout(function(){
    		for (var i = 0; i < all_container_shrink.length; i++) {
    			all_container_shrink[i].style.display = 'none';
    		}
    		for (var i = 0; i < btn_dynamic_hidden.length; i++) {
    			btn_dynamic_hidden[i].style.opacity = 0;
    		}
    	}, 4000);
    }

    // 鼠标经过时显示动态按钮
    dragParentInstruction.onmouseover = function(){
    	for (var i = 0; i < all_container_shrink.length; i++) {
    		all_container_shrink[i].style.display = 'block';
    	}
    	for (var i = 0; i < btn_dynamic_hidden.length; i++) {
    		btn_dynamic_hidden[i].style.opacity = 1;
    	}
    }
    



    // -------------背景图案包含框整体缩放--------------
    // -------------语言选择对话框整体缩放--------------
    $(function() { 
		var r = document.body.offsetWidth / window.screen.availWidth; 
		// $(document.body).css("-webkit-transform","scale(" + r + ")"); 
		$('#dlgBackimg').css("-webkit-transform","scale(" + r + ")");
		$('#dlgLanguage').css("-webkit-transform","scale(" + r + ")");
	}); 
	$(window).resize(function() { 
		var r = document.body.offsetWidth / window.screen.availWidth; 
		// $(document.body).css("-webkit-transform","scale(" + r + ")"); 
		$('#dlgBackimg').css("-webkit-transform","scale(" + r + ")");
		$('#dlgLanguage').css("-webkit-transform","scale(" + r + ")");
	});




	// -------------------切换背景图案--------------------
	var backgroundImage = document.getElementById("background-image-start");

	// 静态图片
	var backimg = document.getElementsByName('backimg');

	for (var i = 0; i < backimg.length; i++) {
		backimg[i].addEventListener("click", function(){
			// 防止缩小上传图片的尺寸后影响到其他背景图片的尺寸
			document.getElementById('background-image-start').style.objectFit = "cover";

			// console.log(this.id);
			var id = this.id;
			var num = id.slice(7);
			// console.log(num);
			// backgroundImage.src = "https://classroomscreen.com/achtergrond/"+ num +".jpeg";
			backgroundImage.src = "images/backjpeg/"+ num +".jpeg";

			count2++;
			dlgBackimg.close();
			hidden_closebtn('sub-container2-elem');
			document.getElementById('dlgBackimg-back').style.display = 'none';
			operatebtn.style.display = 'none';
		}, true);
	}

	// 动态图片
	var backgif = document.getElementsByName('backgif');

	for (var i = 0; i < backgif.length; i++) {
		backgif[i].addEventListener("click", function(){
			document.getElementById('background-image-start').style.objectFit = "cover";

			var id = this.id;
			var num = id.slice(3);
			// console.log(num);
			backgroundImage.src = "images/backgif/gif"+ num +".gif";

			count2++;
			dlgBackimg.close();
			hidden_closebtn('sub-container2-elem');
			document.getElementById('dlgBackimg-back').style.display = 'none';
			operatebtn.style.display = 'none';
		}, true);
	}

	// 随机选择图片
	var randomselect = document.getElementById('random-select');
	randomselect.onclick = function(){
		document.getElementById('background-image-start').style.objectFit = "cover";

		var num = Math.floor((Math.random()*35)+1);
		backgroundImage.src = "images/backjpeg/"+ num +".jpeg";

		count2++;
		dlgBackimg.close();
		hidden_closebtn('sub-container2-elem');
		document.getElementById('dlgBackimg-back').style.display = 'none';
		operatebtn.style.display = 'none';
	}

	// 加载上传的图片
	var loadbackimg = document.getElementById('loadbackimg');

	loadbackimg.onchange = function(){
		document.getElementById('background-image-start').src =
		 	window.URL.createObjectURL(this.files[0]);
		 showoperatebtn();
	}

	var operatebtn = document.getElementById('operatebtn');

	// 显示操作上传图片的按钮
	function showoperatebtn(){
		operatebtn.style.display = 'block';		// 其他背景图片需关闭操作按钮
		// console.log("succ");
		count2++;
		dlgBackimg.close();
		hidden_closebtn('sub-container2-elem');
		document.getElementById('dlgBackimg-back').style.display = 'none';
	}

	// 操作上传图片的按钮
	var angle = 0;

	var left_revolve = document.getElementById('left-revolve');
	var right_revolve = document.getElementById('right-revolve');
	var extend_size = document.getElementById('extend-size');
	var shrink_size = document.getElementById('shrink-size');


	left_revolve.onclick = function(){
		angle = angle - 90;
		document.getElementById('background-image-start').style.transform = 
			"rotate(" + angle + "deg)";
	}
	right_revolve.onclick = function(){
		angle = angle + 90;
		document.getElementById('background-image-start').style.transform = 
			"rotate(" + angle + "deg)";
	}
	extend_size.onclick = function(){
		// console.log("extend");
		document.getElementById('background-image-start').style.objectFit = "cover";
	}
	shrink_size.onclick = function(){
		// console.log("shrink");
		document.getElementById('background-image-start').style.objectFit = "contain";
	}




	// -------------------声级监测-----------------
	// 显示声级
	var sensi = 3;	// 1.2.3.4.5		// 初始为3
	var Wave_pointer = 180;

	var startbtn = document.getElementById('startbtn');
	startbtn.onclick = startaudiometer;


	var audioContext = null;
	var meter = null;
	var canvasContext = null;
	// var WIDTH=500;
	var WIDTH = 398;
	var HEIGHT = 40;	

	function startaudiometer() {	
		canvasContext = document.getElementById( "meter" ).getContext("2d");
	    window.AudioContext = window.AudioContext || window.webkitAudioContext;
	    audioContext = new AudioContext();

	    try {
	        navigator.getUserMedia =
	        	navigator.getUserMedia ||
	        	navigator.webkitGetUserMedia ||
	        	navigator.mozGetUserMedia;

	        navigator.getUserMedia(
	        {
	            "audio": {
	                "mandatory": {
	                    "googEchoCancellation": "false",
	                    "googAutoGainControl": "false",
	                    "googNoiseSuppression": "false",
	                    "googHighpassFilter": "false"
	                },
	                "optional": []
	            },
	        }, gotStream, didnotGetStream);	        	       
	    } catch (e) {
	        alert('I am sorry, it seems that it is not working. Please use the most recent version of Chrome or Firefox. (1)');
	    }
	}


	function didnotGetStream() {
	    alert('I am sorry, it seems that it is not working. Please use the most recent version of Chrome or Firefox. (2)');
	}

	var mediaStreamSource = null;

	function gotStream(stream) {
	    mediaStreamSource = audioContext.createMediaStreamSource(stream);

	    meter = createAudioMeter(audioContext);
	    mediaStreamSource.connect(meter);

	    drawLoop();
	}


	function createAudioMeter(audioContext,clipLevel,averaging,clipLag) {	
		var processor = audioContext.createScriptProcessor(512);
		processor.onaudioprocess = volumeAudioProcess;
		processor.clipping = false;
		processor.lastClip = 0;
		processor.volume = 0;
		processor.clipLevel = clipLevel || 0.98;
		processor.averaging = averaging || 0.995;
		processor.clipLag = clipLag || 750;

		processor.connect(audioContext.destination);

		processor.checkClipping =
			function(){
				if (!this.clipping)
					return false;
				if ((this.lastClip + this.clipLag) < window.performance.now())
					this.clipping = false;
				return this.clipping;
			};

		processor.shutdown =
			function(){
				this.disconnect();
				this.onaudioprocess = null;
			};

		return processor;
	}

	function volumeAudioProcess( event ) {
		var buf = event.inputBuffer.getChannelData(0);
	    var bufLength = buf.length;
		var sum = 0;
	    var x;

	    for (var i=0; i<bufLength; i++) {
	    	x = buf[i];
	    	if (Math.abs(x)>=this.clipLevel) {
	    		this.clipping = true;
	    		this.lastClip = window.performance.now();
	    	}
	    	sum += x * x;
	    }

	    var rms =  Math.sqrt(sum / bufLength);

	    this.volume = Math.max(rms, this.volume*this.averaging);
	}


	function drawLoop( time ) {
	    canvasContext.clearRect(0,0,WIDTH,HEIGHT);
	        
		canvasContext.fillRect(0, 0, meter.volume*WIDTH*sensi, HEIGHT);
		
		if (meter.volume*WIDTH*sensi > Wave_pointer){
		canvasContext.fillStyle = "#FF0000";
		canvasContext.clearRect(0,0,WIDTH,HEIGHT);
		canvasContext.fillRect(0, 0, meter.volume*WIDTH*sensi, HEIGHT);
		
		}
		else {
			canvasContext.fillStyle = "#00FF00";	
		}
		window.requestAnimationFrame( drawLoop );
	}


	// 调节灵敏度
	var sensival = document.getElementsByName('sensi');

	for (var i = 0; i < sensival.length; i++) {
		sensival[i].addEventListener("click", function(){
			for (var i = 0; i < sensival.length; i++) {
				// console.log(sensival[i]);
				sensival[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
			}
			var id = this.id;
			var num = id.slice(5, 6);
			sensi = num;
			// console.log(sensi);
			this.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
		}, true);
	}

	// 移动指针
	var position = 175;

	var leftmovebtn = document.getElementById('leftmove');
	var rightmovebtn = document.getElementById('rightmove');

	var pointer = document.getElementById('pointer-container');

	leftmovebtn.onclick = leftmove;
	rightmovebtn.onclick = rightmove;

	function leftmove(){
		position = position - 33;
		if(position <= 10) 
			position = 10;
		pointer.style.transform = "translate(" + position + "px, 12px)";

		Wave_pointer = Wave_pointer - 30;
		if(Wave_pointer <= 30)
			Wave_pointer = 30;
	}
	function rightmove(){
		position = position + 33;
		if(position >= 340) 
			position = 340;
		pointer.style.transform = "translate(" + position + "px, 12px)";

		Wave_pointer = Wave_pointer + 30;
		if(Wave_pointer >= 330)
			Wave_pointer = 330;
	}






}