// modal header

const toggleMenu = () => {
    const topMenu = document.getElementById('nvd-top-menu')
    const toggleMenuIcon = document.getElementById('nvd-toggle-top-menu-icon')
    const toggleMenuIcon2 = document.getElementById('nvd-toggle-top-menu-icon2')
    
    topMenu.classList.toggle('nvd-topmenu-expanded')
    topMenu.classList.toggle('hidden')
    toggleMenuIcon.classList.toggle('hidden')
    toggleMenuIcon2.classList.toggle('hidden')
}

// hide phone header
const hidePhoneText = () => {
    const phoneText = document.getElementById("phone-text");    
  
    if (window.innerWidth < 1024) {
      phoneText.innerText = "1900 1806";
    } else {
      phoneText.innerText = "Gọi 1900 1806";
    }
  }
window.addEventListener("resize", hidePhoneText);
document.addEventListener("DOMContentLoaded", hidePhoneText);

// check send intro
const send = () => {
    var name = document.querySelector(".name").value;
  var phone = document.querySelector(".phone").value;
  var email = document.querySelector(".email").value;
  var content = document.querySelector(".content").value;
  
    if (!name || !phone || !email || !content) {
      alert("Vui lòng nhập đủ thông tin");
    } else if (isNaN(phone)) {
      alert("Số điện thoại phải là số");
    } else {
      alert("Gửi thông tin thành công");
    }
}

// check send price
const sendPhonePrice = () => {
    var phone = document.querySelector(".phone-price").value;
    if (!phone) {
        alert("Vui lòng nhập số điện thoại");
      } else if (isNaN(phone)) {
        alert("Số điện thoại phải là số");
      } else {
        alert("Gửi thông tin thành công");
      }
}


// check send footer
const sendFooter = () => {
    var name = document.querySelector(".name-footer").value;
    var phone = document.querySelector(".phone-footer").value;
    var email = document.querySelector(".email-footer").value;
    var content = document.querySelector(".content-footer").value;
  
    if (!name || !phone || !email || !content) {
      alert("Vui lòng nhập đủ thông tin");
    } else if (isNaN(phone)) {
      alert("Số điện thoại phải là số");
    } else {
      alert("Gửi thông tin thành công");
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
    } else {
      alert("Gửi thông tin thành công");
    }
}

// Change img feel
function changeImage(fileName, name, title) {
  let img = document.querySelector("#bannerImgFeel")
  img.setAttribute('src', fileName)

  var nameUser = document.querySelector("#nameUserFeel")
  nameUser.innerText = name

  var titleFeel = document.querySelector("#titleFeel")
  titleFeel.innerText = title
}

// Change img price
function changeImagePrice(fileName, event) {
  let img = document.querySelector("#img-price")
  img.setAttribute('src', fileName)

  var items = document.querySelectorAll(".detailPrice")

      for (var i = 0; i < items.length; i++)    
        if (items[i] === event.target) {
          items[i].classList.add('red');
        } else {
          items[i].classList.remove('red');
        }   
  // priceCombo.classList.toggle('text-[#3EED8B]')
}

// const setupModal = () => { 
//   const buyBtns = document.querySelectorAll('.btn-sign'); 
//   const modal = document.querySelector('.js-modal'); 
//   const modalcontainer = document.querySelector('.js-modal-container'); 
//   const modalclose = document.querySelector('.js-modal-close');

// function showBuyTickets(){ 
//   modal.classList.add('open'); 
// }

// function hideBuyTickets(){ 
//   modal.classList.remove('open'); 
// }

// function stopPropagation(event){
//    event.stopPropagation(); 
// }

// buyBtns.forEach(function(buyBtn){
//    buyBtn.onclick = showBuyTickets; 
// });

// modalclose.onclick = hideBuyTickets;
// modal.onclick = hideBuyTickets; 
// modalcontainer.onclick = stopPropagation; 
// }

// setupModal();




