let myCodeMirror = CodeMirror.fromTextArea(document.getElementById('editor'), {
    lineNumbers: true
});

$(document).on('click','.button', ()=>{
    console.log($(this));
})