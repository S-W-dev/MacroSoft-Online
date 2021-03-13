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
let advanced_editor = CodeMirror.fromTextArea(document.getElementById('custom'), {
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
CodeMirror.commands.loadFile = () => {
    LoadFromFile();
}
CodeMirror.commands.save = () => {
    Save(currentButton);
}