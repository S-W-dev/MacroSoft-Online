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

$("#openMyStuff").on('click', () => {
    $$a('#menu1').forEach(elem => elem.style.display = 'none');
    $$a('#myStuff').forEach(elem => elem.style.display = 'block');
});
