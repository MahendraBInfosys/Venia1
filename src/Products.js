import { useEffect, useState } from "react";

function Products(props) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [lastPostIndex, setLastPostIndex] = useState(0);
    const [categories, setCategories] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [filteredProductsByCategory, setFilteredProductsByCategory] = useState([]); 

    const perPage = 10;

    const { showCategoryToggle } = props;

    if (showCategoryToggle) {
        document.querySelector(".products-categories").style.display = "block";
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setLastPostIndex(lastPostIndex);
        if ((categories.length === 0)) {
            updateProducts(products, lastPostIndex);
        } else {
            updateProducts(filteredProductsByCategory, lastPostIndex);
        }
    }, [lastPostIndex]);

    useEffect(() => {
        if (categories.length > 0) {
            filterProductsByCategories(categories);
        }
    }, [categories]);

    function getProducts() {
        document.querySelector(".loader").style.display = "block";
        document.getElementById("error").style.display = "none";
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                const newProducts = data.slice(0, perPage);
                setFilteredProducts(newProducts);
                document.querySelector(".loader").style.display = "none";
            }).catch((error) => {
                document.getElementById("error").innerText = "Something went wrong";
                document.getElementById("error").style.display = "block";
            });
    }

    function updateProducts(data, from) {
        const newProducts = data.slice(from, from + perPage);
        setFilteredProducts(newProducts);
        document.querySelector(".loader").style.display = "none";
    }

    function filterProductsByCategories(categories) {
        document.querySelector(".loader").style.display = "block";
        setFilteredProductsByCategory([]);
        const newProducts = products.filter((product) => categories.includes(product.category));
        setFilteredProductsByCategory(newProducts);
        updateProducts(newProducts, 0);
        setLastPostIndex(0);
        document.querySelector(".loader").style.display = "none";
    }

    const addMore = () => {
        setLastPostIndex(lastPostIndex + perPage);
        document.querySelector(".loader").style.display = "block";
    }

    const checkProducts = (e) => {
        setSortBy("");
        if (e.target.checked) {
            setCategories([...categories, e.target.value]);
        } else {
            setCategories(categories.filter((item) => item !== e.target.value));
        }
    }

    const sortByPrice = (e) => {
        const updatedProducts = filteredProductsByCategory.length ? filteredProductsByCategory : products;
        let newProducts = updatedProducts;
        if (e.target.value === "Low-Price") {
            newProducts = updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        } else if (e.target.value === "High-Price") {
            newProducts = updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else {
            newProducts = updatedProducts.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)); 
        }
        updateProducts(newProducts, 0);
        setSortBy(e.target.value);
        setLastPostIndex(0);
    };

    const closeCategoryToggle = () => {
        document.querySelector(".products-categories").style.display = "none";
    } 

    return (
      <div className="products">
        <div className="products-filter-section">
          <div className="products-categories-section">
            <p className="products-ordered-list">Clothing / Men's / Outerwear</p>
            <div className="products-categories">
                <span>Filters</span><div className="cross-bar" onClick={closeCategoryToggle}>X</div>
                <hr />
                <p>Categories</p>
                <ul>
                    <li>
                        <input type="checkbox" value="jewelery" onChange={(e) => checkProducts(e)} />
                        <label>Jewellery</label>
                    </li>
                    <li>
                        <input type="checkbox" value="electronics" onChange={(e) => checkProducts(e)} />
                        <label>Electronics</label>
                    </li>
                    <li>
                        <input type="checkbox" value="men's clothing" onChange={(e) => checkProducts(e)} />
                        <label>Men's Clothing</label>
                    </li>
                    <li>
                        <input type="checkbox" value="women's clothing" onChange={(e) => checkProducts(e)} />
                        <label>Women's Clothing</label>
                    </li>
                </ul>
                <hr />
            </div>
          </div>

        </div>
        <div className="products-list-section"> 
            <div id="error" /> 
            <div className="price-filter">
                <select value={sortBy} onChange={(e) => sortByPrice(e)}>
                    <option value="">Sort by Price</option>
                    <option value="Low-Price">Price - Low to High</option>
                    <option value="High-Price">Price - High to Low</option>
                </select>
            </div> 
            <div className="filter-and-sort-section">
                <img src="./up-down.png" width="12px" height="12px" /> <a href="#"> Filter Products </a> &nbsp;
                <img src="./up-down.png" width="12px" height="12px" /> <a href="#"> Sort Products </a>
            </div>

            <div className="results">
                <p>{ filteredProducts.length } Results</p>
            </div>  
            <div className="products-list">
                {
                    filteredProducts.map((product) => (
                    <div className="col-4" key={product.id}>
                        <img src={product.image} alt={product.title}></img>
                        <p>{product.title}</p>
                        <span>${product.price}</span>
                    </div>
                ))}
            </div>
            
            { filteredProducts.length === perPage && (
                <div className="add-more-section">
                    <button className="add-more-button" onClick={addMore}>
                        Add More
                    </button>
                </div>
            )}
            <div className="loader"></div>
        </div>
      </div>
    );
  }
  
  export default Products;


  