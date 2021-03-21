class Marketplace {

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    displayProducts(products = this.products) {
        products.forEach(elem => {
            if ($$(".market-item#m"+elem.id)==null)
            $('.marketplace').append($(
                `
                    <div id="m${elem.id}" class="market-item">
                        <div class="market-item-content">
                            <img class="market-item-image" src="${elem.img}"/>
                            <div class="market-item-data">
                                <h5 class="market-item-name"><b>${elem.name}</b></h5>
                                <h6 class="market-item-author text-secondary">${elem.author}</h6>
                                <p class="market-item-desc">${elem.desc}</p>
                            </div>
                        </div>
                        <button type="button" id="download" onclick='LoadData(JSON.stringify(${JSON.stringify(elem.code)}));Load(currentButton);'>Download</button>
                    </div>
                `
            ));
        });
    }

    showItemsWhere(obj) {
        let match = [];
        Object.keys(obj).forEach(elem => {
            this.products.forEach(product => {
                if (product[elem] == obj[elem]) match.push(product);
            })
        });
        return match;
    }

}

class Product {
    constructor({
            id,
            type,
            name,
            author_uid,
            author,
            img,
            code,
            description
        }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.author_uid = author_uid;
        this.author = author;
        this.desc = description;
        this.img = "https://concretegames.net/" +  (img || "DefaultUser.png");
        try {
            this.code = JSON.parse(code);
        } catch (x) {
            this.code = code;
        }
    }
}

let market = new Marketplace();

function getSingleButtonCode(b) {
    var x = saveAsMcroFile();
    x.button_data = [x.button_data[b]];
    return x;
}

function hideAll() {
    $$a('.menu').forEach(elem => elem.style.display = "none");
    $$a('.market-item').forEach(elem => elem.remove());
}

function SubmitFormButton() {

    let setVals = {
        "input[name='author']": {
            key: 'value',
            val: Array.isArray(userSessionData) ? 'User' : userSessionData.userUid
        },
        "input[name='author_uid']": {
            key: 'value',
            val: Array.isArray(userSessionData) ? '-1' : userSessionData.userId
        },
        "input[name='image']": {
            key: 'value',
            val: "https://concretegames.net" + Array.isArray(userSessionData) ? '/uploads/DefaultUser.png' : userSessionData.img
        },
        "input[name='type']": {
            key: 'value',
            val: $("form").find("option:selected").val()
        }
    }

    Object.keys(setVals).forEach(elem => $$a(elem).forEach(elem1 => {elem1[setVals[elem].key]=setVals[elem].val;console.log(elem1[setVals[elem].key])}));
    
    if ($$('#create_type').value == "0") {
        $$('#code_box_create').value = JSON.stringify(saveAsMcroFile());
    } else {
        $$('#code_box_create').value = JSON.stringify(getSingleButtonCode(parseInt($('#keySelection').val())));
    }

    setTimeout(() => {
        $$('#submitButton').click();
    }, 100);
    
}

setInterval(()=>{

    $$a('#keySelection-box').forEach((elem, i) => {
        elem.style.display = $$a('#create_type')[i].value == "0" ? "none" : "block";
    });

}, 100);