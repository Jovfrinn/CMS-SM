  //   BACK TO TOP BUTTON
const backToTop = document.getElementById('backTotop');
backToTop.addEventListener('click', () =>  window.scrollTo({top: 0, behavior: 'smooth'}));
    
  window.onscroll = function() {
      if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  const burger = document.querySelector('.menu-button')
  const x = document.querySelector('.btn-x')
  sidebar.style.display = 'flex'
  burger.classList.add('d-none')
  x.addEventListener('click',() => burger.classList.remove('d-none'))
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}




function startMarquee() {
  let marquee = document.getElementById("marqueeText"); // Elemen teks yang akan berjalan
  let containerWidth =
    document.getElementById("marqueeContainer").offsetWidth; // Lebar container
  let textWidth = marquee.offsetWidth; // Lebar teks
  let startPos = containerWidth; // Posisi awal teks (kanan container)
  let endPos = -textWidth; // Posisi akhir teks (ketika teks sudah tidak terlihat)

  // Fungsi untuk menggerakkan teks
  function marqueeMove() {
    if (startPos <= endPos) {
      // Jika teks sudah tidak terlihat
      startPos = containerWidth; // Kembalikan teks ke posisi awal
    } else {
      startPos--; // Bergerak ke kiri
    }
    marquee.style.left = startPos + "px"; // Update posisi teks
  }

  setInterval(marqueeMove, 20); // Atur interval pemanggilan fungsi marqueeMove
}

startMarquee(); // Memulai animasi marquee