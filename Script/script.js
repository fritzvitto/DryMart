
function openOverlay(element) {
  var overlay = document.getElementById('overlay');
  var overlayCard = document.getElementById('overlayCard');

  var imgSrc = element.querySelector('img').src;
  var h4Text = element.querySelector('h4').textContent;
  var pText = element.querySelector('p').textContent;
  var h3Text = element.querySelector('h3').textContent;


  overlayCard.innerHTML = 
      '<img src="' + imgSrc + '">' +
      '<h4 class="overlayTitle">' + h4Text + '</h4>' +
      '<h4 class="additionalText">Description</h4>' + 
      '<p class="overlayP">' + pText + '<p class="overlayP">A rich, creamy cleanser that gently removes impurities while nourishing your skin, leaving it feeling soft and smooth.</p>'  +  
      '<h3 class="overlayH3">' + h3Text + '</h3>'+'<a href=""><button class="cartBtn">Close</button></a>' ;

  overlay.style.display = 'flex';
}
window.onload = function() {
  document.getElementById("prodContainer").className += " load";
  document.getElementById("prodContainer1").className += " load";
  document.getElementById("prodContainer2").className += " load";
}


document.getElementById('openBtn').onclick = function() {
  document.getElementById('backgroundOverlay').style.display = 'block';
  document.getElementById('infoCard').style.display = 'block';
};

document.getElementById('closeBtn').onclick = function() {
  document.getElementById('backgroundOverlay').style.display = 'none';
  document.getElementById('infoCard').style.display = 'none';
};

var sidebar = document.getElementById('sideBar');
var toggleButton = document.getElementById('toggleButton');


document.addEventListener('DOMContentLoaded', function() {
  var sidebar = document.getElementById('sideBar');
  var toggleButton = document.getElementById('toggleButton');

  if (sidebar && toggleButton) {
    toggleButton.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
      var isClickInside = sidebar.contains(event.target) || toggleButton.contains(event.target);

      if (!isClickInside && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  }
});





window.onclick = function(event) {
  var overlay = document.getElementById('overlay');
  if (event.target == overlay) {
      overlay.style.display = 'none';
  }
  var overlay = document.getElementById('overlay1');
  if (event.target == overlay) {
      overlay.style.display = 'none';
  }
}


