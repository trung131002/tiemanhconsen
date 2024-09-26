const phoneNumber = document.getElementsByClassName("phone")

// When I click on the phone number, it will copy the phone number to the clipboard

for (let i = 0; i < phoneNumber.length; i++) {
  phoneNumber[i].addEventListener("click", function () {
    const phoneValue = phoneNumber[i].innerText
    navigator.clipboard.writeText(phoneValue)
    alert("Phone number copied to clipboard!")
  })
}

// slide show 
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Thay đổi hình ảnh mỗi 3 giây
}

function plusSlides(n) {
    slideIndex += n - 1; // Điều chỉnh chỉ số để phù hợp với chuyển động
    showSlides();
}

// more information
function goToInformation(packageName) {
    // Lưu tên gói chụp vào localStorage
    localStorage.setItem('selectedPackage', packageName);
    // Chuyển hướng đến trang information.html
    window.location.href = 'information.html';
}