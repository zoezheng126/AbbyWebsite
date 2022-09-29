document.getElementById('playvideo').onclick = function () {
    document.getElementById('bvideo').play();
};

document.getElementById('pausevideo').onclick = function () {
    document.getElementById('bvideo').pause();
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    // document.getElementById("wrapHead").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "60px 10px";
    // document.getElementById("wrapHead").style.fontSize = "40px";
  }
}

var modal = document.getElementById("mymodal");
var button = document.getElementById("btntomodal");
var shutdown = document.getElementsByClassName("close")[0];
button.onclick = function() {
  modal.style.display = "block";
}
shutdown.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}