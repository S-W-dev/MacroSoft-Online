class Marketplace {

    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    displayProducts(products = this.products) {
        products.forEach(elem => {
            $('.marketplace').append($(
                `
                    <div class="market-item">
                        <div class="market-item-content">
                            <img class="market-item-image" src="${elem.img}"/>
                            <div class="market-item-data">
                                <h5 class="market-item-name"><b>${elem.name}</b></h5>
                                <h6 class="market-item-author text-secondary">${elem.author}</h6>
                                <p class="market-item-desc">${elem.desc}</p>
                            </div>
                        </div>
                        <button type="button" id="download">Download</button>
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
        this.img = img || "https://concretegames.net/uploads/" + (/*img ? author_uid : */"DefaultUser.png");
        this.code = JSON.parse(code);
    }
}

let market = new Marketplace();


$(".market-item-single button").on('click', ()=>{

    $("#menu1").css({"display": "none"});

});