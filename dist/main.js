// sendFooter  

const sendFooter = () => {
    var name = document.querySelector(".name-footer").value;
    var phone = document.querySelector(".phone-footer").value;
    var email = document.querySelector(".email-footer").value;
    var content = document.querySelector(".content-footer").value;
  
    if (!name || !phone || !email || !content) {
      alert("Vui lòng nhập đủ thông tin");
    } else if (isNaN(phone)) {
      alert("Số điện thoại phải là số");
      document.querySelector(".phone-footer").value = "";
    } else {
      alert("Đăng ký thành công");
      document.querySelector(".name-footer").value = "";
      document.querySelector(".phone-footer").value = "";
      document.querySelector(".email-footer").value = "";
      document.querySelector(".content-footer").value = "";
    }
}


// check share sick
const shareSick = () => {
  var share = document.querySelector(".share").value;
  if (!share) {
    alert("Vui lòng nhập đủ thông tin");
  } else {
    alert("Chia sẻ thành công");
    document.querySelector(".share").value = "";
  }
}


// check send modal 
// const sendModal = () => {
//     var name = document.querySelector(".name-modal").value;
//     var phone = document.querySelector(".phone-modal").value;
//     var email = document.querySelector(".email-modal").value;
//     var content = document.querySelector(".content-modal").value;
    

//     if (!name || !phone || !email || !content) {
//       alert("Vui lòng nhập đủ thông tin");
//     } else if (isNaN(phone)) {
//       alert("Số điện thoại phải là số");
//       document.querySelector(".phone-modal").value = "";
//     } else {
//       alert("Gửi thông tin thành công");
//       document.querySelector(".name-modal").value = "";
//       document.querySelector(".phone-modal").value = "";
//       document.querySelector(".email-modal").value = "";
//       document.querySelector(".content-modal").value = "";
//     }
// }

// const video = document.querySelector(".custom-video__video");
// const controls = document.querySelector(".custom-video__control");

// video.addEventListener("click", function () {
//   if (controls.innerHTML === "▶") {
// 	controls.innerHTML = "| |";
// 	video.play();
//   } else {
// 	controls.innerHTML = "▶";
// 	video.pause();
//   }
// });

// video.addEventListener("mouseout", function () {
//   if (!video.paused) {
// 	controls.style.display = "none";
//   }
// });

// video.addEventListener("mouseover", function () {
//   controls.style.display = "flex";
// });

// video.addEventListener(
//   "ended",
//   function () {
// 	controls.style.display = "flex";
// 	controls.innerHTML = "▶";
//   },
//   false
// );


