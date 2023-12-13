function calculateAge() {
    var ageId = document.getElementById("age").value;
    var name = document.getElementById("name").value; 
    var result = document.getElementById("resultText");

    // Thay đổi nội dung
    result.innerHTML = `Xin chào ${name}, năm nay bạn đã ${ageId} tuổi rồi.`;

    // Hiển thị phần kết quả khi nhấn nút
    result.style.display = "block";
}
