  const products = [
    { id: 1, name: "Product 1", price: "$20", description: "A great product for your needs." },
    { id: 2, name: "Product 2", price: "$30", description: "A high-quality item you can trust." },
    { id: 3, name: "Product 3", price: "$15", description: "Affordable and reliable." },
    { id: 4, name: "Product 4", price: "$50", description: "Luxury and comfort combined." }
  ];

  
  function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; 

    products.map(product => {
      
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

     
      const name = document.createElement("h3");
      name.textContent = product.name;

      
      const price = document.createElement("p");
      price.textContent = product.price;

      
      const description = document.createElement("p");
      description.textContent = product.description;

      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");

     
      deleteButton.addEventListener("click", () => {
        
        const updatedProducts = products.filter(p => p.id !== product.id);
       
        products.length = 0;
        products.push(...updatedProducts);
       
        renderProducts();
      });

     
      productCard.appendChild(name);
      productCard.appendChild(price);
      productCard.appendChild(description);
      productCard.appendChild(deleteButton);

      
      container.appendChild(productCard);
    });
  }

  
  renderProducts();