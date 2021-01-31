let editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-c++src"
});
$(document).on('click','.button', (event)=>{
    var target = event.target;
    s = event.target;
    if (event.target.toString().includes("Heading") || event.target.toString().includes("Image")) {
        target = event.target.parentElement;
    } 
    SelectButton(target.id);
});

let currentButton = 1;

Load(currentButton);

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
}

function Load(id) {
    document.querySelector('num').innerHTML = id;

    var obj = JSON.parse(localStorage.getItem(id) || '{"button":' + id + ',"code":"","enabled":true,"mode":"Default"}');

    editor.setValue(obj.code);
    $("#Enabled").prop('checked', obj.enabled);
    $("#" + obj.mode).click();
}

let descriptions = {
    "Default": "The default button works like a normal button. When you press it down it does the action a single time.",
    "Toggle": "When toggled, this button type will repeat the action at a set interval until cancelled.",
    "Hold": "The hold button repeats the action at a set interval while its held down."
}

function loop() {
    var checked = document.querySelector('input[name="mode"]:checked').id;
    document.querySelector('#desc').innerHTML = descriptions[checked];

    Save(currentButton);
}

setInterval(loop, 100);