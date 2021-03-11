// Get the modal
var modal = document.getElementById('settings');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showSettings() {
    document.getElementById(`settings`).style.display = `block`;
}

$("#settings-cog").on('click', showSettings);