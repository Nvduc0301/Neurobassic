// modal header

const toggleMenu = () => {
    const topMenu = document.getElementById('top-menu')
    const toggleMenuIcon = document.getElementById('toggle-topmenu-icon')
    const toggleMenuIcon2 = document.getElementById('toggle-topmenu-icon2')
    
    topMenu.classList.toggle('topmenu-expanded')
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
      document.querySelector(".phone").value = "";
    } else {
      alert("Gửi thông tin thành công");
      document.querySelector(".name").value = "";
      document.querySelector(".phone").value = "";
      document.querySelector(".email").value = "";
      document.querySelector(".content").value = "";
    }
}

// check send price
const sendPhonePrice = () => {
    var phone = document.querySelector(".phone-price").value;
    if (!phone) {
        alert("Vui lòng nhập số điện thoại");
      } else if (isNaN(phone)) {
        alert("Số điện thoại phải là số");
        document.querySelector(".phone-price").value = "";
      } else {
        alert("Gửi thông tin thành công");
        document.querySelector(".phone-price").value = "";
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
  function changeImagePrice(element, fileName) {
    let img = document.querySelector("#img-price")
    img.setAttribute('src', fileName)
    // Lấy tất cả các ô
    document.querySelector(".detailPrice").classList.add("red");
    const detailPrices = document.querySelectorAll(".detailPrice");
    detailPrices.forEach(detailPrice => {
      detailPrice.classList.remove("red");
    });
    element.classList.add("red");

}

// modal click sign

const setupModal = () => {
  const buyBtns = document.querySelectorAll('.btn-sign');
  const modal = document.querySelector('.js-modal');
  const modalcontainer = document.querySelector('.js-modal-container');
  const modalclose = document.querySelector('.js-modal-close');

  const showBuyTickets = () => {
    modal.classList.add('flex');
    modal.classList.remove('hidden')
  };

  const hideBuyTickets = () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');

  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  buyBtns.forEach((buyBtn) => {
    buyBtn.onclick = showBuyTickets;
  });

  modalclose.onclick = hideBuyTickets;
  modal.onclick = hideBuyTickets;
  modalcontainer.onclick = stopPropagation; 
};

setupModal();




