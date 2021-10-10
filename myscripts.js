window.onload = function() {
  // Nav Buttons
  var navButtons = document.querySelectorAll('nav > div')
  for (var i = 0; i < navButtons.length; i++) {
    var button = navButtons[i]
    button.onclick = function() {
      showSection(this)
    }
  }

  
}

// Nav Buttons
function showSection(element) {
  // Hide Current Section
  var currentSection = document.querySelector('.display')
  currentSection.classList.remove('display')
  // Show New Section
  var sectionId = element.textContent.toLowerCase()
  document.querySelector(`#${sectionId}`).classList.add('display')

  // Grey Current Button 
  var currentButton = document.querySelector('.white-border')
  currentButton.classList.remove('white-border')
  // White Clicked Button
  element.classList.add('white-border')
}