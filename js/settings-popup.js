// Get the modal
var modal = document.getElementById('settings');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#theme").val(Storage.get("theme") || "default");

$$("#editormode").add(new Option("Market", "0", true));
$$("#editormode").add(new Option("Basic (drag & drop)", "1"));
$$("#editormode").add(new Option("Advanced", "2"));

$("#editormode").val(Storage.get("editormode") || "0");

function showSettings() {
    document.getElementById(`settings`).style.display = `block`;
    $$("#repeat_interval").value = parseInt(Storage.get("repeat_interval")) || 20;
    $$("#debounce_time").value = parseInt(Storage.get("debounce_time")) || 100;
}

$("#settings-cog").on('click', showSettings);

// settings on change events

$("#theme").on('change', ()=>{
    Storage.set("theme", $("#theme").val());
    setColor(colorPresets[Storage.get("theme")]);
});

$("#editormode").on('change', () => {
    Storage.set("editormode", $("#editormode").val());
    setEditor(Storage.get("editormode"));
});

$("#repeat_interval").on('change', () => {
    Storage.set("repeat_interval", $("#repeat_interval").val());
});

$("#debounce_time").on('change', () => {
    Storage.set("debounce_time", $("#debounce_time").val());
});