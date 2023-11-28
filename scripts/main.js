// Function to show the modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      // modal.style.display = "block";
      modal.style.display = "flex";
      modal.classList.remove("hide"); 
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.add("hide");
          setTimeout(() => {
              modal.style.display = "none";
          }, 400); // The timeout should match the animation-duration
      }
    }
  }
  
  // Function to close the modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hide");
      setTimeout(() => {
          modal.style.display = "none";
      }, 400);
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.add("hide");
          setTimeout(() => {
              modal.style.display = "none";
          }, 400); // The timeout should match the animation-duration
      }
    }
  }
  
  // Event listeners for buttons to open modals
  document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-bs-target').substring(1); // Remove '#' from ID
        showModal(modalId);
    });
  });
  
  // Event listeners for buttons to close modals
  document.querySelectorAll('[data-bs-dismiss="modal"]').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal.id);
    });
  });