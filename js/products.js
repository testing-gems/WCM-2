// Get products 
const getProducts = async () => {
    try {
        const results = await fetch('data/products.json');
        const data = await results.json();
        const products = data.products;
        return products;
    } catch (error) {
        console.log(error)
    }
};

// Load products 
window.addEventListener('DOMContentLoaded', async () => {
     const products = await getProducts();
     displayProductItems(products);
 });


const categoryCenter = document.querySelector('.category__center');


 // Display products 
 const displayProductItems = items => {
     let displayProduct = items.map(product=>
        `<div class="product category__product">
            <div class="product__header">
                <img src=${product.image} alt="product">
            </div>
            <div class="product__footer">
                <h3>${product.title}</h3>
            <div class="product__price">
                <h4>$${product.price}</h4>
            </div>
            <a href="#"><button type="submit" class="product__btn">ADD <i class="fas fa-shopping-cart"
                            aria-hidden="true"></i> </button></a>
        </div>
        <ul>
            <li>
                <a data-tip="Quick View" data-place="left" href="#">
                  <i class="far fa-eye"></i>
                </a>
              </li>
              <li>
                <a data-tip="Add To Wishlist" data-place="left" href="#">
                    <i class="far fa-heart"></i>
                </a>
              </li>
        </ul>
      </div>` 
    );
    displayProduct = displayProduct.join('');
    if (categoryCenter){
        categoryCenter.innerHTML = displayProduct;
    }
 }

 // Filtering 
 const filterBtn = document.querySelectorAll('.filter-btn');
 const categoryContainer = document.getElementById('category');

 if(categoryContainer){
    categoryContainer.addEventListener('click', async (e) => {
        const target = e.target.closest('.section__title');
        if (!target) return; 
        
        const id = target.dataset.id; 
        const products = await getProducts();
        
        if(id){
            // remove active from buttons
            Array.from(filterBtn).forEach( (btn) => {
                btn.classList.remove('active');
            } );
            target.classList.add('active');

            // load products
            let menuCategory = products.filter( (product) => {
                if(product.category === id){
                    return product;

                }
            });
            if (id === 'Todos'){
                displayProductItems(products);
            } else {
                displayProductItems(menuCategory);
            } 
        }
    
    });
 }


