document.addEventListener("DOMContentLoaded", function(){
// Hàm cập nhật số lượng ký tự
    function a() {
    // Lấy giá trị từ textarea
        const text = document.getElementById("user-input").value;
        // Đếm số lượng ký tự
        const slkt = text.length;
        // Cập nhật số lượng ký tự vào thẻ span
        document.getElementById("slkt").innerText = slkt;
    }
// Lắng nghe sự kiện 'input' trên thẻ textarea
document.getElementById("user-input").addEventListener("input", a)
});

/*
document.addEventListener("DOMContentLoaded", function(){
//xóa các kí tự đã nhập
    function xoa(){
        document.getElementById("user-input").value="";
    }
document.getElementById("clear").addEventListener("click", xoa)
});
*/

function xoa(){
    document.getElementById("user-input").value="";
}