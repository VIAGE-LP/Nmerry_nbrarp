// youtube auto play
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('movie__content', {
        height: '450',
        width: '800',
        videoId: 'mMiQXxXMKQc',
        //events: {
        //'onReady': onPlayerReady,
        //'onStateChange': onPlayerStateChange
        //},
        playerVars: {
            'playsinline': 1,
            'loop': 1,
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();

}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 36000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();

}

//acd PC
$(function () {
    $('#nmerry .acd').hide(); //acd繧帝國縺�
    $('#nmerry .acd__btn').click(function () {
        //繧ｯ繝ｪ繝�け縺輔ｌ縺歛cd-btn縺梧戟縺｣縺ｦ縺�ｋboxname縺ｫ蟇ｾ蠢懊＠縺櫑D繧呈戟縺､acd繧帝幕髢峨☆繧�
        $('#' + $(this).data('boxname')).animate({ height: 'toggle' });
        //繧ｯ繝ｪ繝�け縺輔ｌ縺歛cd-btn縺ｨ蜷後§boxname繧呈戟縺､繝懊ち繝ｳ縺ｫ髢九け繝ｩ繧ｹ繧偵▽縺代ｋ�磯｣蜍輔☆繧具ｼ�
        $('[data-boxname="' + $(this).data('boxname') + '"]').toggleClass('acd__btn--open');
    });

    //scroll

    $('a[href^="#"]').click(function (e) {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        if ($(this).hasClass('acd__back')) {
            position = target.offset().top - $('.acd__btn').height();
            $('body').animate({ scrollTop: targetY }, 400, 'swing');
        }
    });
});


//acd SP
$(function () {
    $('#sp_nmerry .acd').hide();
    $('#sp_nmerry .acd__btn').click(function () {
        $('#' + $(this).data('boxname')).animate({ height: 'toggle' });
        $('[data-boxname="' + $(this).data('boxname') + '"]').toggleClass('acd__btn--open');
    });

    //scroll

    $('a[href^="#"]').click(function (e) {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        if ($(this).hasClass('acd__back')) {
            position = target.offset().top - $('.acd__btn').height();
            $('body').animate({ scrollTop: targetY }, 400, 'swing');
        }
    });
});