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


// history modal
const historyTitleDeposit = document.getElementById('history-title-deposit');
const historyTitleWithdraw = document.getElementById('history-title-withdraw');
const historyTitleBonus = document.getElementById('history-title-bonus');
historyTitleDeposit.style.display = 'block';
historyTitleWithdraw.style.display = 'none';
historyTitleBonus.style.display = 'none';

const tabDeposit = document.getElementById('tab-deposit');
const tabWithdraw = document.getElementById('tab-withdraw');
const tabBonus = document.getElementById('tab-bonus');
tabDeposit.classList.add('active');
tabWithdraw.classList.remove('active');
tabBonus.classList.remove('active');

const historyContentDeposit = document.getElementById('history-content-deposit');
const historyContentWithdraw = document.getElementById('history-content-withdraw');
const historyContentBonus = document.getElementById('history-content-bonus');
historyContentDeposit.style.display = 'block';
historyContentWithdraw.style.display = 'none';
historyContentBonus.style.display = 'none';

tabDeposit.addEventListener('click', function () {
  historyTitleDeposit.style.display = 'block';
  historyTitleWithdraw.style.display = 'none';
  historyTitleBonus.style.display = 'none';
  
  tabDeposit.classList.add('active');
  tabWithdraw.classList.remove('active');
  tabBonus.classList.remove('active');
  
  historyContentDeposit.style.display = 'block';
  historyContentWithdraw.style.display = 'none';
  historyContentBonus.style.display = 'none';
})

tabWithdraw.addEventListener('click', function () {
  historyTitleDeposit.style.display = 'none';
  historyTitleWithdraw.style.display = 'block';
  historyTitleBonus.style.display = 'none';
  
  tabDeposit.classList.remove('active');
  tabWithdraw.classList.add('active');
  tabBonus.classList.remove('active');
  
  historyContentDeposit.style.display = 'none';
  historyContentWithdraw.style.display = 'block';
  historyContentBonus.style.display = 'none';
})

tabBonus.addEventListener('click', function () {
  historyTitleDeposit.style.display = 'none';
  historyTitleWithdraw.style.display = 'none';
  historyTitleBonus.style.display = 'block';
  
  tabDeposit.classList.remove('active');
  tabWithdraw.classList.remove('active');
  tabBonus.classList.add('active');
  
  historyContentDeposit.style.display = 'none';
  historyContentWithdraw.style.display = 'none';
  historyContentBonus.style.display = 'block';
})
// history modal end