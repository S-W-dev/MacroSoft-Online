let editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-c++src",
    lineWrapping: true,
    autocorrect: true,
    spellcheck: true,
    foldCode: true,
    scrollPastEnd: true,
    continueComments: true,
    foldGutter: true,
    scrollbarStyle: "simple",
    keyMap: "sublime",
    gutter: [
        "CodeMirror-foldgutter"
    ]
});
let advanced_editor = CodeMirror.fromTextArea(document.getElementById('advanced'), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-c++src",
    lineWrapping: true,
    autocorrect: true,
    spellcheck: true,
    foldCode: true,
    scrollPastEnd: true,
    continueComments: true,
    foldGutter: true,
    scrollbarStyle: "simple",
    keyMap: "sublime",
    gutter: [
        "CodeMirror-foldgutter"
    ],
    readOnly: "nocursor",
    firstLineNumber: 0
});
CodeMirror.commands.loadFile = () => {
    LoadFromFile();
}

CodeMirror.commands.save = () => {
    Save(currentButton);
}

Load(1);
setEditor(0);

var reader = new FileReader()
var currentButton = 1;
var old_val = editor.getValue();
var descriptions = {
    "Default": "The default button works like a normal button. When you press it down it does the action a single time.",
    "Toggle": "When toggled, this button type will repeat the action at a set interval until cancelled.",
    "Hold": "The hold button repeats the action at a set interval while its held down."
}

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
    $("#" + obj.mode).click();
}

function LoadFromFile() {
    document.querySelector('#upload').value = null;
    $('#upload').click();
}

function Compile(code) {
    return "Compiled:\n"+code;
}

function setEditor(i) {
    document.getElementsByClassName('editor')[i].style = "";
    document.getElementsByClassName('editor')[(i>0)?0:1].style.display = "none";
}

setInterval(()=>{
    if (editor.getValue() != old_val) {
        document.querySelector("#unsaved").style = "";
    } else {
        document.querySelector("#unsaved").style.display = "none";
    }

    if (document.querySelector('#upload').value != "") {
        reader.readAsText(document.querySelector('#upload').files[0]);
        document.querySelector('#upload').value = "";
    }

    if (reader.result != null) {
        editor.setValue(reader.result);
        reader = new FileReader();
    }

    advanced_editor.setValue(Compile(editor.getValue()));
}, 100);

$(document).on('click', '.button', (event) => {
    var target = event.target;
    s = event.target;
    if (event.target.toString().includes("Heading") || event.target.toString().includes("Image")) {
        target = event.target.parentElement;
    }
    SelectButton(target.id);
});

$(document).on('click', '#CG', () => {
    location.href = "https://concretegames.net/"
});


$(document).on('change', ['#Default', '#Toggle', '#Hold'], () => {
    var checked = document.querySelector('input[name="mode"]:checked').id;
    document.querySelector('#desc').innerHTML = descriptions[checked];

    Save(currentButton);
});