
let components = {
    0: ['.editor.market'],
    1: ['.editor.basic', '#markettab', '.settings'],
    2: ['.editor.advanced', '#markettab', '.settings']
}

function setEditor(e = Storage.get("editormode") || "0") {
    Object.keys(components).forEach(elem => components[elem].forEach(elem => console.logAndReturn($$(elem)).style.display = "none"));
    components[e].forEach(elem => $$(elem).style = "");
}

const GUTTER_SIZE = 30;

const gutterStyle = dimension => ({
    'flex-basis': `${GUTTER_SIZE}px`,
});

const elementStyle = (dimension, size) => ({
    'flex-basis': `calc(${size}% - ${GUTTER_SIZE}px)`,
})

Split(['#one', '#two'], {
    sizes: [500, 150],
    minSize: 300,
    elementStyle,
    gutterStyle
});

$(".gutter").on('mouseup', () => window.dispatchEvent(new Event('resize')));
$(".gutter").on('mousedown', () => window.dispatchEvent(new Event('resize')));
$(".gutter").on('mousemove', () => window.dispatchEvent(new Event('resize')));

if (localStorage["editormode"] == "1") {
    setEditor(0);
    setEditor(1);
}