const getProducts = async () => {
    const url = "https://raw.githubusercontent.com/cadebehnke/cadebehnke.github.io/main/Projects/part3-better/json/items.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
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

    let ratingDiv = document.createElement("div");
    ratingDiv.classList.add("rating");
    ratingDiv.innerHTML = getStars(product.rating);
    section.append(ratingDiv);

    return section;
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

const getStars = (rating) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "⭐" : "☆";
    }
    return `<span class="stars">${stars} (${rating.toFixed(1)})</span>`;
};

document.addEventListener("DOMContentLoaded", showWomenProducts);

const contactForm = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const isSuccess = Math.random() > 0.5; 

    if (isSuccess) {
        responseMessage.textContent = 'Message sent successfully!';
        responseMessage.classList.remove('error');
        responseMessage.classList.add('success');
        responseMessage.style.display = 'block';
        
        contactForm.reset();
    } else {
        responseMessage.textContent = 'Error: Failed to send the message. Please try again later.';
        responseMessage.classList.remove('success');
        responseMessage.classList.add('error');
        responseMessage.style.display = 'block';
    }
});


