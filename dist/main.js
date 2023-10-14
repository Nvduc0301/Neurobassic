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

// coutdown
function countTime(hours, minutes, seconds) {
	var hoursDiv =  document.getElementById("hours") 
	var minutesDiv =  document.getElementById("minutes") 
	var secondsDiv =  document.getElementById("seconds") 

	var totalMilliseconds = ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;
  
	var countdown = setInterval(function() {
	  totalMilliseconds -= 1000;
  
	  if (totalMilliseconds <= 0) {
		clearInterval(countdown);
		hoursDiv.innerHTML = "00";
		minutesDiv.innerHTML = "00";
		secondsDiv.innerHTML = "00";
		console.log("Time is up!");
	  } else {
		var hoursLeft = Math.floor(totalMilliseconds / (1000 * 60 * 60));
		var minutesLeft = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
		var secondsLeft = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);
  
		document.getElementById("hours").innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
		document.getElementById("minutes").innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
		document.getElementById("seconds").innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
	  }
	}, 1000);
} 

countTime(6, 0, 0);

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

// check send modal 
const sendModal = () => {
    var name = document.querySelector(".name-modal").value;
    var phone = document.querySelector(".phone-modal").value;
    var email = document.querySelector(".email-modal").value;
    var content = document.querySelector(".content-modal").value;
    

    if (!name || !phone || !email || !content) {
      alert("Vui lòng nhập đủ thông tin");
    } else if (isNaN(phone)) {
      alert("Số điện thoại phải là số");
      document.querySelector(".phone-modal").value = "";
    } else {
      alert("Gửi thông tin thành công");
      document.querySelector(".name-modal").value = "";
      document.querySelector(".phone-modal").value = "";
      document.querySelector(".email-modal").value = "";
      document.querySelector(".content-modal").value = "";
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

