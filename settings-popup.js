// Get the modal
var modal = document.getElementById('settings');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#theme").val(localStorage["theme"] || "default");

function showSettings() {
    document.getElementById(`settings`).style.display = `block`;
    $$("#repeat_interval").value = parseInt(localStorage["repeat_interval"]) || 20;
}

$("#settings-cog").on('click', showSettings);

// settings on change events

$("#theme").on('change', ()=>{
    localStorage["theme"] = $("#theme").val();
    setColor(colorPresets[localStorage["theme"]]);
});

$("#repeat_interval").on('change', () => {
    localStorage["repeat_interval"] = $("#repeat_interval").val();
});

$("#debounce_time").on('change', () => {
    localStorage["debounce_time"] = $("#debounce_time").val();
});