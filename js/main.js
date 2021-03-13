$$a('.unsaved-icon').forEach(elem => {
elem.style.visibility = "hidden";
});

Object.keys(colorPresets).forEach(elem => {
    themeBox.add(new Option(elem))
});

Load(1);
advanced_editor.setValue(localStorage["custom"] || "");
$$("#repeat_interval").value = parseInt(localStorage["repeat_interval"]) || 100;
$$("#debounce_time").value = parseInt(localStorage["debounce_time"]) || 20;
var checked = document.querySelector('input[name="mode"]:checked').id;
document.querySelector('#desc').innerHTML = descriptions[checked];

setInterval(()=>{
    localStorage["custom"] = advanced_editor.getValue();

    if (editor.getValue() != old_val) {
        document.querySelector("#unsaved").style = "";
        $$a('.unsaved-icon')[currentButton-1].style = "";
    } else {
        document.querySelector("#unsaved").style.visibility = "hidden";
        $$a('.unsaved-icon')[currentButton - 1].style.visibility = "hidden";
    }

    if (document.querySelector('#upload').value != "") {
        reader.readAsText(document.querySelector('#upload').files[0]);
        document.querySelector('#upload').value = "";
    }

    if (reader.result != null) {
        LoadData(reader.result);
        reader = new FileReader();
    }

    advanced_editor.refresh();
    editor.refresh();
}, 100);

setColor();
setEditor();