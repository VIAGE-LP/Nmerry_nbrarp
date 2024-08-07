$(document).ready(function () {
    $('a[href="#size"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        }, 900);
    });

    //copy折扣碼 
    function copybtn(couponcode) {
        // 複製（利用 Clipboard API 中的寫入功能）
        navigator.clipboard.writeText(couponcode);
        // 提醒視窗
        confirm(`恭喜您搶到「限量折扣碼」!\n您已成功複製折扣碼，請於購物車「優惠代碼」欄位輸入\n即可享優惠金額再折$100元。\n優惠代碼 : ${couponcode}`)
    }

    $(".copybtn").on("click", function () {
        copybtn("24ns08ss");
    });

});