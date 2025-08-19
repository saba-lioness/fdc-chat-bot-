const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const headings = document.querySelectorAll('.center-text.tight-heading');
const messageBox = document.getElementById('messageBox');
const sendBtn = document.getElementById('sendBtn');
const chatOutput = document.getElementById('chatOutput'); // Make sure your chat area has this id

// Hide headings only when the conversation starts (first user message)
if (sendBtn && messageBox && chatOutput) {
  sendBtn.addEventListener('click', function() {
    if (
      messageBox.value.trim() !== "" &&
      chatOutput.children.length === 0 // No messages yet
    ) {
      headings.forEach(h => h.style.display = 'none');
    }
  });
}

// Menu open/close logic
if (menuBtn && dropdownMenu) {
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  // Hide menu when clicking outside
  document.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
  });

  // Prevent menu from closing when clicking inside the menu
  dropdownMenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}