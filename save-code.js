/*

format:

array of arrays
[
    [button_code, enabled, button_type],
    ...8 more
]

*/

function saveAsMcroFile() {

    let buttonDataArray = [];
    for (var i = 1; i <= 9; i++) {
        var buttonData = JSON.parse(localStorage.getItem(i) || '{"button":' + i + ',"code":"","enabled":true,"mode":"Default"}');
        buttonDataArray.push([Compile(buttonData.code), buttonData.enabled, buttonData.mode]);
    }

    return buttonDataArray;

}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}