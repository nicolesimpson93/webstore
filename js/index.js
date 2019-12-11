/******* GLOBAL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

// An Object holds multiple variables (properties) together

const products = [
    {
      name: `Body Bloom`,
      instr: { firstname: `Ryan`, lastname: `Bailey`  },
      code: `9987S9JN1`,
      start: `Fall 2019`,
      numWks: 15,
      incBrks: `Yes`,
      duration: `3hr, 0min`,
      cost: 35,
      qty: 12,
      category: `health`
    },{
      name: `Avacado Mask`,
      code: `991NSH71K`,
      instr: { firstname: `Nastaran`, lastname: `Dadashi`  },
      start: `Fall 2019`,
      numWks: 15,
      incBrks: `Yes`,
      duration: `2hr, 40min`,
      cost: 20, 
      qty: 1,
      category: `health`
    },{
      name: `Deluxe Mix`,
      code: `09CM86K27`,
      instr: { firstname: `R`, lastname: `P`  },
      start: `Fall 2019`,
      numWks: 22,
      incBrks: `Yes`,
      duration: `3hr, 00min`,
      cost: 30, 
      qty: 4,
      category: `body`
    },{
      name: `Interface Development`,
      code: `EKS9KM367`,
      instr: { firstname: `R`, lastname: `P`  },
      start: `Fall 2019`,
      numWks: 22,
      incBrks: `Yes`,
      duration: `3hr, 00min`,
      cost: 35, 
      qty: 4,
      category: `body`
    },{
      name: `Interface Development`,
      code: `289NDB893`,
      instr: { firstname: `R`, lastname: `P`  },
      start: `Fall 2019`,
      numWks: 22,
      incBrks: `Yes`,
      duration: `3hr, 00min`,
      cost: 14, 
      qty: 4,
      category: `body`
    }
  ]
  
  
  /************* FUNCTIONS *************/
  // Stored functions that will run as part of this application
  
  
  function isInStock(prod) {
    if (prod.qty > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function isInThisCategory(prod) {
    // The variable "this" is filled with the 2nd filter argument
    if (this == 'all') {
      return true;
    } else if (prod.category == this) {
      return true;
    } else {
      return false;
    }
  }
  
  function isMatchingName(prod) {
    // Trim the input of white space, then uppercase it, then check if it's included
    if (prod.name.toUpperCase().includes(this.trim().toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }
  
  
  // Function: getProductAsHtmlString
  // Parameters: product:Object
  // Return: String of HTML (<article>)
  function getProductAsHtmlString(product) {
  
    // If the cost of a product is less than $22, tell the user this is a "SALE!"
  
    let SALE;
  
    if (product.cost < 22) {
      SALE = `<small class="callout urgent">SALE!</small>`;
    }
  
    return `<article class="product ${product.category}">
              <h3>${product.name} ${SALE}</h3>
              <ul>
                <li>Product Code: <strong>${product.code}</strong></li>
                <li>Instructor: <strong>${product.instr.lastname}, ${product.instr.firstname}</strong></li>
                <li>Start: <strong>${product.start}</strong></li>
                <li class="product-weeks">
                  Weeks: <strong>${product.numWks}</strong>
                  <ul>
                    <li>Includes Break: <strong>${product.incBrks}</strong></li>
                  </ul>
                </li>
                <li>Duration: <strong>${product.duration}</strong></li>
              </ul>
              <div class="product-cost">${product.cost}</div>
            </article>`;
  }
  
  function renderProducts(arrToRender) {
    // Connect each Object from the incoming Array to an HTML template
    const arrOfHtmlProducts = arrToRender.map(getProductAsHtmlString);
    const strOfHtmlProducts = arrOfHtmlProducts.join(`\n`);
  
    document.getElementById('products').innerHTML = strOfHtmlProducts;  
  }
  
  
  function toggleProductLayout(event) {
    document.getElementById('products').classList.toggle('grid-view');
  }
  
  function loadProductCategory(event) {
    // Runs every time the dropdown changes
    const categoryImSearchingFor = event.target.value; // Get the new option from the dropdown/select
    renderProducts(products.filter(isInThisCategory, categoryImSearchingFor)); // Print only courses in a category
  }
  
  function loadProductByName(event) {
    const nameImSearchingFor = event.target.value; // Get the value from the field
    renderProducts(products.filter(isMatchingName, nameImSearchingFor));
  }
  
  
  /************* EXECUTABLE *************/
  // Execute functions that will access data
  // document.getElementById('products').innerHTML = getCourseAsHtmlString(products[0])
  // document.getElementById('products').innerHTML += getCourseAsHtmlString(products[1])
  
  
  renderProducts(products); // Print the full set of courses
  //renderCourses(courses.filter(isInStock));  //  Print only courses in stock
  
  document.getElementById('toggleView').addEventListener('click', toggleProductLayout);
  document.getElementById('productCategory').addEventListener('change', loadProductCategory);
  document.getElementById('producteName').addEventListener('input', loadProductByName);