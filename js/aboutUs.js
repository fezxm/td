/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-06-12 09:04:51
 * @version $Id$
 */

//我们在那
$(function(){
	$('.td-z-tab-btn > li').hover(function(){
		$('.td-z-tab-btn > li').removeClass('on');
		$(this).addClass('on');
		$('.td-z-tab-show > li').removeClass('on');
		$('.td-z-tab-show > li').eq($(this).index()).addClass('on');
	});
});

//    mask
$(function (){
    var tdMaskArr=$('.td-z-cooperate>li>a');
    var tdOMask=$('.td-z-mask');
    tdMaskArr.each(function(index){
        tdMaskArr.eq(index).hover(function(ev){
            var n=getNumber(ev);
            switch(n){
                case 0:
                    tdOMask.eq(index).css({'left':'220px','top':'0'});
                    break;
                case 1:
                    tdOMask.eq(index).css({'left':0,'top':'200px'});
                    break;
                case 2:
                    tdOMask.eq(index).css({'left':'-220px','top':0});
                    break;
                case 3:
                    tdOMask.eq(index).css({'left':0,'top':'-200px'});
                    break;
            }
            tdOMask.eq(index).stop().animate({left:0, top:0});
        },function(ev){
            var n=getNumber(ev);
            switch (n){
                case 0:
                    tdOMask.eq(index).stop().animate({'top':0,'left':'220px'});
                    break;
                case 1:
                    tdOMask.eq(index).stop().animate({'top':'200px','left':0});
                    break;
                case 2:
                    tdOMask.eq(index).stop().animate({'top':0,'left':'-220px'});
                    break; 
                case 3:
                    tdOMask.eq(index).stop().animate({'top':'-200px','left':0});
            }
        })
         function getNumber(ev)
            {
                var x=tdMaskArr.eq(index).offset().left+tdMaskArr.eq(index).outerWidth()/2-ev.pageX;
                var y=tdMaskArr.eq(index).offset().top+tdMaskArr.eq(index).outerHeight()/2-ev.pageY;
              
                var a=dChange(Math.atan2(y, x));
                return Math.round((a+180)/90)%4;
            }

    });
    
    function dChange(d)
    {
        return d*180/Math.PI;
    }

});

//选择庆红
$(function(){
	$('.td-z-chooselist > li').hover(function(){
		$(this).addClass('td-active');		
	},function(){
		$(this).removeClass('td-active');
	});
});

//photo wall

$(function(){
    $('.td-time-photo>li').hover(function(){
        $(this).css({zIndex:10});
        $(this).find('img').stop().animate({
                    width:300,
                    height:300,
                    top:'50%',
                    left:'50%',
                    marginTop:'-150',
                    marginLeft:'-150'},300)
    },function(){
        $(this).css({zIndex:1});
        $(this).find('img').stop().animate({
                    width:100,
                    height:100,
                    top:0,
                    left:0,
                    marginTop:0,
                    marginLeft:0},200)
    })
});





























