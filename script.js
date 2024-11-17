document.addEventListener('DOMContentLoaded', () => {
  // Open and close start menu
  const startButton = document.getElementById('start-button');
  const startMenuItems = document.querySelector('.start-menu-items');
  const overlay = document.getElementById('overlay');

  startButton.addEventListener('click', () => {
    startMenuItems.style.display = startMenuItems.style.display === 'block' ? 'none' : 'block';
    overlay.style.display = startMenuItems.style.display === 'block' ? 'block' : 'none';
  });

  overlay.addEventListener('click', () => {
    startMenuItems.style.display = 'none';
    overlay.style.display = 'none';
  });

  // Window interactions
  const openNewWindowButton = document.getElementById('open-new-window');
  const newWindow = document.createElement('div');
  
  // Example of dynamically adding a new window
  openNewWindowButton.addEventListener('click', () => {
    newWindow.classList.add('window');
    newWindow.innerHTML = `
      <div class="window-header">
        <span>New Window</span>
        <button class="close-btn">X</button>
      </div>
      <div class="window-content">
        <p>This is a new window!</p>
      </div>
    `;
    document.body.appendChild(newWindow);

    // Close window functionality
    const closeButton = newWindow.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
      newWindow.remove();
    });
  });

  // Make windows draggable
  const allWindows = document.querySelectorAll('.window');
  allWindows.forEach(window => {
    makeDraggable(window);
  });

  function makeDraggable(windowElement) {
    let isDragging = false;
    let offsetX, offsetY;

    windowElement.querySelector('.window-header').addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - windowElement.offsetLeft;
      offsetY = e.clientY - windowElement.offsetTop;
      windowElement.style.zIndex = '101'; // Bring to front when dragged
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        windowElement.style.left = `${e.clientX - offsetX}px`;
        windowElement.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      windowElement.style.zIndex = ''; // Reset zIndex
    });
  }
});
