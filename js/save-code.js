/*

format:

array of arrays
[
    [button_code, enabled, button_type],
    ...8 more
]

*/

function saveAsMcroFile() {
    
    let version = 1;

    let repeat_interval = parseInt(localStorage["repeat_interval"]) || 100;
    if (repeat_interval < 1 || repeat_interval > 1000) repeat_interval = 100;

    let debounce_time = parseInt(localStorage["debounce_time"]) || 20;
    if (debounce_time < 1 || debounce_time > 1000) debounce_time = 20;

    let custom = localStorage["custom"] || "";

    let button_data = [];
    for (var i = 1; i <= 9; i++) {
        var buttonData = JSON.parse(localStorage.getItem(i) || '{"button":' + i + ',"code":"","enabled":true,"mode":"Default"}');
        button_data.push({code: Compile(buttonData.code), enabled: buttonData.enabled, type: buttonData.mode});
    }

    return {version, repeat_interval, debounce_time, custom, button_data};

}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    alert("Ensure that you have installed the MacroPad Software, and then launch the downloaded file to update your MacroPad!");
}