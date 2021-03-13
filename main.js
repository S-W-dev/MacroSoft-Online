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

$$a('.unsaved-icon').forEach(elem => {
elem.style.visibility = "hidden";
});

setInterval(()=>{
    //console.log($$a('.unsaved-icon')[currentButton]);
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
        editor.setValue(reader.result);
        reader = new FileReader();
    }

    advanced_editor.setValue(Compile(editor.getValue()));
}, 100);

function setColor({
    color1 = "#000000",
    color2 = "#000000"
} = colorPresets[localStorage["theme"] || "default"]) {
    $$('main').style.backgroundImage = console.logAndReturn(`linear-gradient(315deg, ${color1} 0%, ${color2} 100%)`);
}

let colorPresets = {
    Default: {
        color1: "#65dfc9",
        color2: "#6cdbeb"
    },
    RedBlack: {
        color2: "#b82e1f"
    },
    USA: {
        color1: "#ffaaaa",
        color2: "#aaaaff"
    },
    Light: {
        color1: "#eee",
        color2: "#fff"
    },
    Dark: {
        color2: "#2D3436"
    },
    "Dark Pink": {
        color2: "#E84393"
    },
    Christmas: {
        color1: "#ff0000",
        color2: "#00ff00"
    }
};

let themeBox = $$('#theme');

Object.keys(colorPresets).forEach(elem => {
    themeBox.add(new Option(elem))
});

function $$() {return document.querySelector(...arguments);}
function $$a() {if (Array.isArray(arguments[0])) {
    var x = [];
    arguments[0].forEach(elem => x = [...x, ...$$a(elem)])
    return x;
} else {
    return document.querySelectorAll(...arguments);
}}
console.logAndReturn = (e) => {return console.log(e), e;}

setColor();

// $(".docs").resizeable({
//     handles: 'n,w,s,e',
//     minWidth: 200,
//     maxWidth: 1000
// })