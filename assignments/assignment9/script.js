document.addEventListener("DOMContentLoaded", function () { 
//
    class Pizza {
        constructor(name, ingredients, sauce, cheese, price, image, description) {
            this.name = name;
            this.ingredients = ingredients;
            this.sauce = sauce;
            this.cheese = cheese;
            this.price = price;
            this.image = image;
            this.description = description;
        }

        getPizzaSection() {
            let section = document.createElement("div");
            section.classList.add("pizza-box");
            section.innerHTML = `
                <img src="${this.image}" alt="${this.name}">
                <div class="pizza-name">${this.name}</div>
            `;

            section.addEventListener("click", () => this.showModal());

            return section;
        }

        showModal() {
            document.getElementById("modal-title").textContent = this.name;
            document.getElementById("modal-ingredients").textContent = this.ingredients.join(", ");
            document.getElementById("modal-sauce").textContent = this.sauce;
            document.getElementById("modal-cheese").textContent = this.cheese;
            document.getElementById("modal-price").textContent = this.price;
            document.getElementById("modal-image").src = this.image;
            document.getElementById("modal-description").textContent = this.description;
            
            let modal = document.getElementById("pizza-modal");
            modal.classList.add("show");
        }
    }

    const pizzas = [
        new Pizza("Hawaiian", ["Ham", "Pineapple"], "Tomato Sauce", "Mozzarella", 18.5, "images/haw.png",
            "A tropical combination of sweet pineapple and savory ham on a cheesy base."),
        new Pizza("Buffalo Chicken Ranch", ["Chicken", "Buffalo Sauce"], "Ranch", "Cheddar", 20.0, "images/buf.png",
            "Spicy buffalo chicken drizzled with creamy ranch, a perfect balance of heat and cool."),
        new Pizza("Margarita", ["Basil", "Tomatoes"], "Extra Virgin Olive Oil", "Fresh Mozzarella", 19.2, "images/marg.png",
            "A classic Italian pizza with fresh basil, tomatoes, and rich mozzarella."),
        new Pizza("Pepperoni", ["Pepperoni", "Spices"], "Tomato Sauce", "Mozzarella", 17.5, "images/pep.png",
            "A timeless favorite with crispy pepperoni and melted cheese."),
        new Pizza("Veggie", ["Broccoli", "Olives", "Peppers"], "Tomato Sauce", "Parmesan", 16.0, "images/veg.png",
            "A fresh and healthy choice with a colorful mix of veggies.")
    ];

    const pizzaContainer = document.getElementById("pizza-container");

    pizzas.forEach(pizza => {
        pizzaContainer.appendChild(pizza.getPizzaSection());
    });

    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("pizza-modal").classList.remove("show");
    });
});
