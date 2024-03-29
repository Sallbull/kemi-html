$(function(){
	osCheck();//OS체크
	gnbOpen();//모바일 메뉴 이벤트
	accodionEvent();//아코디언 리스트 이벤트
	selectEvent();//셀렉트 디자인
	stepSelectEvent();//step select
	engOnly();//영어만 입력
	profileMenu();
	scrollLock();// dialog open 스크롤 방지
	searchSlide();
	onlineToggle();
});

//모바일 메뉴 이벤트
function gnbOpen(){
	$('.btn-menu').on('click', function(){		
		if(!$(this).hasClass('on')){
			$(this).addClass('on');
			$('.gnb').addClass('on');
		} else {
			$(this).removeClass('on');
			$('.gnb').removeClass('on');
		}
	});
}

//아코디언 리스트 이벤트
function accodionEvent(){
	$('.accordion-list .list-item .title').on('click', function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().siblings().removeClass('on');
			$(this).parent().addClass('on');			
		} else {
			$(this).parent().removeClass('on');
		}
	});
}

//셀렉트 디자인
function selectEvent(){
	$('select').selectmenu({ 
		
	});
}
// step select
function stepSelectEvent(){
	$('.step_select').selectmenu("option", "position", { 
		my : "left+2 top", at: "left+2 top" 
	});
}

//팝업 열기
function popOpen(pop){
	$(".popup").fadeOut(300);
	$(pop).fadeIn(300);
}

//팝업 닫기
function popClose(e){
	$(e).closest(".popup").fadeOut(300);
}

//OS 체크
function osCheck(){
	if( /Android/i.test(navigator.userAgent)) {
		//안드로이드
	} else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		//아이폰
		$('body').addClass('ios');
	} else {
		//그밖에
	}
}

//영어만 입력
function engOnly(){
	$(document).on("keyup", "input:text[engOnly]", function() {
		$(this).val( $(this).val().replace(/[0-9]|[^\!-z]/gi,"") );
	});
}

function popOpen(o){
    $(o).addClass("ing");
    setTimeout(function(){
        $(o).addClass("on");
    },200);
	$('html').css('height','100vh');
	$('html').css('overflow-y','hidden');
}
function popClose(o){
    $(o).removeClass("on");
    setTimeout(function(){
        $(o).removeClass("ing");
    },500)
	$('html').css('height','auto');
	$('html').css('overflow-y','auto');
}

function profileMenu(){
	$('.my_profile').on('click',function(){
		$(this).toggleClass('on');
		$('.profile_box').toggleClass('on');
	});
}

function scrollLock(){
	if ( $('.dialog').hasClass('on') ){
		$('html').css('height','100vh');
		$('html').css('overflow-y','hidden');
	}
}

function searchSlide(){
	$('.search_input').on('focus', function() {
		$(this).next('div').addClass('on');
	});
	// $('.search_input').on('blur', function() {
	// 	$(this).next('div').removeClass('on');
	// });
	$('.search_box button').on('click',function(){
		$(this).toggleClass('on');
	});
}

function onlineToggle() {
	$('.online_box li .status_box').on('click',function(){
		$(this).next('.select_list').toggleClass('on');
	});
	$('.online_box li .select').on('click',function(){
		$(this).toggleClass('on');
	});
}




