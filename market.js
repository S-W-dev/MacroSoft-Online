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
                            <button type="button" id="download">Download</button>
                        </div>
                        <div class="market-item-data">
                            <h4><b>${elem.name}</b></h4>
                            <h5>${elem.author}</h5>
                            <p>${elem.desc}</p>
                        </div>
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


$(".market-item-single button").on('click', (e)=>{

    e.css({"display": "none"});

});