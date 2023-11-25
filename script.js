function generateRandomNumber() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    // Kiểm tra nếu giá trị tối thiểu lớn hơn giá trị tối đa
    console.log(min, max);
    console.log("%ccờ bạc ít thoi!", "color: red" + "; font-size: 20px");
    if (min >= max) {
        alert("Giá trị tối thiểu phải nhỏ hơn giá trị tối đa");
        return;
    }
    //hàm random
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = "Số ngẫu nhiên là: " + randomNumber;
}