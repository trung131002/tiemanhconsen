// Lấy tên gói chụp từ localStorage
const packageName = localStorage.getItem('selectedPackage');
        
// Hiển thị thông tin gói chụp
document.getElementById('packageInfo').innerText = `${packageName}`;

// chuyển về trang chủ
function goToIndex() {
    // Chuyển hướng về index.html
    window.location.href = 'index.html';
}