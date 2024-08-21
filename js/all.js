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


    //draw popup視窗的copy折扣碼
    function popup_copy() {
        navigator.clipboard.writeText("202408SS");
        confirm(`恭喜您成功複製轉盤折扣碼！\n請於購物車「優惠代碼」欄位輸入，\n即享最高會員優惠後再折$200元\n優惠代碼：202408SS`)
    }

    const Urlhash = location.hash;
    if (Urlhash == "#draw") {
        let drawModal = new bootstrap.Modal(document.getElementById("draw_popup"));
        //一進入畫面就顯示 draw popup
        drawModal.show();
        setTimeout(() => {
            $("#draw_gif").attr("src", "img/popup_copy.png");
            $("#draw_gif").css("cursor", "pointer");
            $("#draw_gif").on("click", function () {
                popup_copy();
                drawModal.hide();
            });
        }, 6000);
    } 

});