$(document).ready(function () {
    // 定义点击事件处理程序
    function scrollToSize(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#size').offset().top
        }, 900);
    }
    $('a[href="#size"]').click(scrollToSize);
    $('.coupon_btn').click(scrollToSize);

    // copy折扣碼函式
    function copybtn(money, couponcode) {
        // 複製（利用 Clipboard API 中的寫入功能）
        navigator.clipboard.writeText(couponcode);
        // 提醒視窗
        confirm(`恭喜您成功複製折扣碼！\n期間內不限方案，\n請於購物車「優惠代碼」欄位輸入 即可享優惠金額再折${money}元\n優惠代碼:${couponcode}`);
    }

    $(".copybtn").on("click", function () {
        copybtn(80, "nbra24ss");
    });

    // $(".coupon_200").on("click", function () {
    //     copybtn(200, "200N2406");
    // });
    // $(".coupon_150").on("click", function () {
    //     copybtn(150, "150N2406","");
    // });
    // $(".coupon_100").on("click", function () {
    //     copybtn(100, "100N2406","");
    // });


    //時間到隱藏素材
    const currentDate = new Date();
    const event_end = new Date('2024/07/10 23:59:59');
    if(currentDate >= event_end){
        $(".event2_hide").hide();
    }

});