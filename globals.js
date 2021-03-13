

let reader = new FileReader()
let currentButton = 1;
let old_val = editor.getValue();
let descriptions = {
    "Default": "The default button works like a normal button. When you press it down it does the action a single time.",
    "Toggle": "When toggled, this button type will repeat the action at a set interval until cancelled.",
    "Hold": "The hold button repeats the action at a set interval while its held down."
}
let themeBox = $$('#theme');


function SelectButton(id) {

    Save(currentButton);

    currentButton = id;

    Load(currentButton);
}

function Save(currentButton) {
    localStorage.setItem(currentButton, JSON.stringify({
        button: currentButton,
        code: editor.getValue(),
        enabled: $("#Enabled").is(":checked"),
        mode: document.querySelector('input[name="mode"]:checked').id
    }));
    old_val = editor.getValue();
}

function Load(id) {
    document.querySelector('num').innerHTML = id;

    var obj = JSON.parse(localStorage.getItem(id) || '{"button":' + id + ',"code":"","enabled":true,"mode":"Default"}');

    old_val = obj.code;

    editor.setValue(obj.code);
    $("#Enabled").prop('checked', obj.enabled);
    $("#" + obj.mode).prop('checked', true);
}

function LoadFromFile() {
    document.querySelector('#upload').value = null;
    $('#upload').click();
}

function Compile(code) {
    return "Compiled:\n" + code;
}

function setEditor(i) {
    document.getElementsByClassName('editor')[i].style = "";
    document.getElementsByClassName('editor')[(i > 0) ? 0 : 1].style.display = "none";
}

function setColor({
    color1 = "#000000",
    color2 = "#000000"
} = colorPresets[localStorage["theme"] || "default"]) {
    $$('main').style.backgroundImage = console.logAndReturn(`linear-gradient(315deg, ${color1} 0%, ${color2} 100%)`);
}
function $$() {
    return document.querySelector(...arguments);
}

function $$a() {
    if (Array.isArray(arguments[0])) {
        var x = [];
        arguments[0].forEach(elem => x = [...x, ...$$a(elem)])
        return x;
    } else {
        return document.querySelectorAll(...arguments);
    }
}

console.logAndReturn = (e) => {
    return console.log(e), e;
}

function LoadData(data) {
    data = JSON.parse(data);
    Storage.set("repeat_interval", data["repeat_interval"]);
    Storage.set("debounce_time", data["debounce_time"]);
    Storage.set("custom", data["custom"]);
    if (data.button_data.length == 1) {
        editor.setValue(data.button_data[0].code);
        $("#Enabled").prop('checked', data.button_data[0].enabled);
        $("#" + data.button_data[0].type).prop('checked', true);
        Save(currentButton);
    } else {
        data.button_data.forEach((elem, index) => {
            localStorage.setItem(index+1, JSON.stringify({
                button: index+1,
                code: elem.code,
                enabled: elem.enabled,
                mode: elem.type
            }));
        });
    }
}

/*
0 for local
1 for public
*/
let StorageMode = 0;

class Storage {

    static set(key, val) {
        if (StorageMode == 0) return localStorage[key] = val, undefined;
        if (StorageMode == 1) return this.setPublic(key, val), undefined;
    }

    static get(key) {
        if (StorageMode == 0) return localStorage[key];
        if (StorageMode == 1) return this.getPublic(key);
    }

    static setPublic(key, val) {

    }

    static getPublic(key) {

    }

}

