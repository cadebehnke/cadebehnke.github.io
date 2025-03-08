const getProducts = async () => {
    const url = "https://cadebehnke.github.io/blob/main/Projects/json/items.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showProducts = async () => {
    let products = await getProducts();
    let menSection = document.getElementById("men-products");
    let womenSection = document.getElementById("women-products");
    let saleSection = document.getElementById("sale-products");

    products.forEach((product) => {
        if (product.category === "Men") {
            menSection.append(getProductItem(product));
        } else if (product.category === "Women") {
            womenSection.append(getProductItem(product));
        } else if (product.category === "Sale") {
            saleSection.append(getProductItem(product));
        }
    });
};

const getProductItem = (product) => {
    let section = document.createElement("section");
    section.classList.add("product-item");

    let img = document.createElement("img");
    img.src = product.img_name;
    img.alt = product.name;
    section.append(img);

    let h3 = document.createElement("h3");
    h3.innerText = product.name;
    section.append(h3);

    let ul = document.createElement("ul");
    section.append(ul);
    ul.append(getLi(`Price: ${product.price}`));
    ul.append(getLi(product.description));

    return section;
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

document.addEventListener("DOMContentLoaded", showProducts);



