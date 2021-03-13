
let components = {
    0: ['.editor.market'],
    1: ['.editor.basic'],
    2: ['.editor.advanced']
}

function setEditor(e = Storage.get("editormode") || "0") {
    Object.keys(components).forEach(elem => components[elem].forEach(elem => console.logAndReturn($$(elem)).style.display = "none"));
    components[e].forEach(elem => $$(elem).style = "");
}