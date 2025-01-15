//抓取頁面物件
const wheel_btn = document.querySelector(".wheel_btn_text");
const wheel_rotate = document.querySelector(".wheel_btn_ly");

//獎項機率設定
const prob = [80, 20] //獎項機率，80%機率抽到$300，20%機率抽到$200
const num = Math.random() * 99;  //0~99 共100個數字，取一個 0~99之間的隨機亂數。

$(wheel_btn).on("click", function () {
    wheel_rotate.style.transition = "all 1s ease"; //指針轉速

    // 80%機率抽到$300 隨機亂數num 落在 0 ~ 79 之間 (0~79共80個數字，隨機亂數num有80%的機率會掉到這個區間)
    if ((0 <= num) && (num < prob[0])) {
        wheel_rotate.style.transform = `rotate(${380 + 720}deg)`; //依照設計師給的圖去算希望指針指到該獎項的角度，這個角度再多加兩圈720度，讓轉動時視覺上有旋轉感。
        copyCode("25N300LUCK", 300);

    // 20%機率抽到$200 隨機亂數num 落在 80 ~ 99 之間 (80~99共20個數字，隨機亂數num有20%的機率會掉到這個區間)
    } else if ((prob[0] <= num) && (num <= 99)) {
        wheel_rotate.style.transform = `rotate(${320 + 720}deg)`;
        copyCode("N200LUCK25", 200);
    };
});

let first_click = true;
function copyCode(couponcode, money) {
    navigator.clipboard.writeText(couponcode);
    // 判斷是否第一次按抽獎按鈕，第一次要等指針rotate完再跳出提醒視窗，約1秒，抽過之後再按抽獎按鈕就不會有指針轉動效果，會直接跳出提醒視窗。
    if (first_click) {
        setTimeout(() => {
            confirm(`恭喜您獲得$${money}折扣!\n您已成功複製折扣碼：${couponcode}\n結帳時請於購物車輸入，\n即享活動優惠折扣＋整單再折TWD$${money}`);
            first_click = false;
        }, 1000)
    } else {
        confirm(`恭喜您獲得$${money}折扣!\n您已成功複製折扣碼：${couponcode}\n結帳時請於購物車輸入，\n即享活動優惠折扣＋整單再折TWD$${money}`);
    }
}