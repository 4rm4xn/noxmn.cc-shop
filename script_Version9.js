function openModal(title, desc) {
  document.getElementById('purchaseModal').style.display = 'block';
  document.getElementById('modalItemTitle').innerText = title;
  document.getElementById('modalItemDesc').innerText = desc;
}
function closeModal() {
  document.getElementById('purchaseModal').style.display = 'none';
}
window.onclick = function(event) {
  var modalBg = document.getElementById('purchaseModal');
  if (event.target == modalBg) modalBg.style.display = "none";
};
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("purchaseForm");
  var status = document.getElementById("purchaseStatus");
  if(form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      // Simulated automation
      status.textContent = "Success! Access instructions have been sent to your email.";
      setTimeout(function() {
        status.textContent = "";
        closeModal();
        form.reset();
      }, 2500);
    };
  }
});