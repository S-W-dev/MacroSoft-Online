let myCodeMirror = CodeMirror.fromTextArea(document.getElementById('editor'), {
    lineNumbers: true
});
$(document).on('click','.button', (event)=>{
    var target = event.target;
    s = event.target;
    if (event.target.toString().includes("Heading") || event.target.toString().includes("Image")) {
        target = event.target.parentElement;
    } 
    SelectButton(target.id);
});

function SelectButton(id) {

}