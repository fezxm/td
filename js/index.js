/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-30 15:18:35
 * @version $Id$
 */
$(function(){
    // 导航
    // var on_index=0;
    // $('.td-z-nav li').each(function(index, el) {
    //     if($(this).hasClass('on')){
    //         on_index=index;
    //     }

    //     $('.td-z-nav li').hover(function(){
    //         $('.td-z-nav li').removeClass('on');
    //         $(this).addClass('on');
    //     },function(){
    //         $('.td-z-nav li').removeClass('on');
    //         $(this).eq(on_index).addClass('on');
    //     });
    // });

var on_index=0;
    $('.td-z-nav li').each(function(index, el) {
        if($(this).hasClass('on')){
            on_index=index;
            console.log(on_index)
        }
    });

    // 导航
    $('.td-z-nav li').hover(function(){
            $('.td-z-nav li').removeClass('on');
            $(this).addClass('on');
    },function(){
            $('.td-z-nav li').removeClass('on');
            $('.td-z-nav li').eq(on_index).addClass('on');

    })

    // 导航
  
        $('.td-z-nav li').click(function(){
            $('.td-z-nav li').removeClass('on');
            $('.td-z-nav li').eq(on_index).addClass('on');
            //console.log(on_index)
        });
    //栏目
    $('.td-z-title li').hover(function(){
        $('.td-z-title li').removeClass('td-z-on');
        $(this).addClass('td-z-on');
    },function(){
        $('.td-z-title li').removeClass('td-z-on');
    });

    //子导航

    $('.td-main li').each(function(index){
        $(this).hover(function(){
                $(this).addClass('td-z-show');
                $(this).parent().addClass('td-z-show1');
                $(this).css('backgroundColor','#fff');
        },function(){
                 $(this).removeClass('td-z-show');
                  $(this).css('backgroundColor','');
                  $(this).parent().removeClass('td-z-show1');
        })
    })
    

    //播放
    $('.td-z-btn span').hover(function(){
            $('.td-z-btn span').removeClass('td-active');
            $(this).addClass('td-active');
            $('.td-z-play a').removeClass('td-active');
            $('.td-z-play a').eq($(this).index()).addClass('td-active');
        });
          
        var timer=setInterval(playcarInit,2000);

    //移入移出开关
        $('.td-play').hover(function(){
            clearInterval(timer);
        },function(){
            timer=setInterval(playcarInit,2000);
        });

        var n=0;
        function playcarInit(){    
                    n++;
                    if( n > $('.td-z-btn span').length-1){
                        n=0;
                    }
                    playcar(n);
        }

        function playcar(index){
                $('.td-z-btn span').removeClass('td-active');
                $('.td-z-btn span').eq(index).addClass('td-active');
                $('.td-z-play a').removeClass('td-active');
                $('.td-z-play a').eq(index).addClass('td-active');
        }

            

//广告弹窗
   // $(function(){
//     if (document.cookie.indexOf('adv=1') === -1) {
//                 // 设置cookie
//                 document.cookie = 'adv=1;path=/';
//                 clearTimeout(timer);
//                 var timer=setTimeout(function(){
//                             $(".td-z-popub").animate({height:"300px"},800);
//                             clearTimeout(timer);
//                             timer=setTimeout(function(){
//                                 $(".td-z-popub").animate({height:"80"},500,function(){
//                                     $('.td-z-popub').css('display','none');
//                                     $('.td-z-popub2').css('display','block');
//                                 });

//                             },3000)                       
//                 },1000);
//     }else{               
//                 $('.td-z-popub2').css('display','block');
//             };
//     });


    if( localStorage.getItem('age')){
         $('.td-z-popub2').css('display','block');
     }else{
        localStorage.setItem('age',1)
        clearTimeout(timer);
            var timer=setTimeout(function(){
                        $(".td-z-popub").animate({height:"300px"},800);
                        clearTimeout(timer);
                        timer=setTimeout(function(){
                            $(".td-z-popub").animate({height:"80"},500,function(){
                                $('.td-z-popub').css('display','none');
                                $('.td-z-popub2').css('display','block');
                            });

                        },3000)                       
            },1000);

     }

    // if( getCookie('adv')){
    //         $('.td-z-popub2').css('display','block');
    // }else{
    //     setCookie('adv','1',1);
    //     clearTimeout(timer);
    //         var timer=setTimeout(function(){
    //                     $(".td-z-popub").animate({height:"300px"},800);
    //                     clearTimeout(timer);
    //                     timer=setTimeout(function(){
    //                         $(".td-z-popub").animate({height:"80"},500,function(){
    //                             $('.td-z-popub').css('display','none');
    //                             $('.td-z-popub2').css('display','block');
    //                         });

    //                     },3000)                       
    //         },1000);
    // }    
    
//设置
function setCookie(name,value,iDay){
    if(iDay){
        var oDate= new Date();
        oDate.setDate(oDate.getDate()+iDay);
        document.cookie=name+'='+value+'; path=/; expires'+oDate;
    }else{
        document.cookie=name+'='+value+'; path=/; ';
    }
    
}

// //获取
function getCookie(name){
    var arr=document.cookie.split('; ');
    for(var i=0; i<arr.length; i++){
        var arr2=arr[i].split('=');
        if(arr2[0] == name){
            return arr2[1];
        }
    }
    return '';
}

// //删除

function removeCookie(name,iDay){
    addCookie(name,'',-1);
}

});
