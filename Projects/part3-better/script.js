const getProducts = async () => {
    const url = "https://raw.githubusercontent.com/cadebehnke/cadebehnke.github.io/refs/heads/main/Projects/part3-better/json/items.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("Error fetching products:", error);
    }
};

const showWomenProducts = async () => {
    let products = await getProducts();
    let womenSection = document.getElementById("women-products");

    if (!womenSection) return;

    let womenProducts = products.filter(product => product.category === "Women");

    while (womenProducts.length < 8) {
        womenProducts = [...womenProducts, ...womenProducts].slice(0, 8);
    }

    womenProducts.forEach(product => {
        womenSection.append(getProductItem(product));
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

document.addEventListener("DOMContentLoaded", showWomenProducts);
