const getProducts = async () => {
    const url = "https://github.com/cadebehnke/cadebehnke.github.io/blob/main/Projects/part3-better/json/items.json";

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

    if (!womenSection) return; // Ensure this script only runs on the women page

    // Filter only the women’s products
    let womenProducts = products.filter(product => product.category === "Women");

    // Make sure we have exactly 8 items (if fewer, duplicate existing ones)
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
