// A mock function to mimic making an async request for data
export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    const response=await fetch('http://localhost:8080/products?id='+id)
    const data=await response.json();
    resolve({data})
  }
  );
}
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    const response=await fetch('http://localhost:8080/products')
    const data=await response.json();

   
    resolve({data})
    console.log({data})
  }
  );
}
export function fetchCategories() {
  return new Promise(async (resolve) =>{
    const response=await fetch('http://localhost:8080/category')
    const data=await response.json();
    resolve({data})
  }
  );
}
export function fetchBrands() {
  return new Promise(async (resolve) =>{
    const response=await fetch('http://localhost:8080/brands')
    const data=await response.json();
    resolve({data})
  }
  );
}

export function fetchProductsByFilter(filter,sort,pagination) {
  let queryString='';
  for(let key in filter){
  // if(key!=='_order'&& key!=='_sort') queryString+=`${key}=${filter[key]}&`;
  // else if(key==='_order' && filter[key]=='desc') queryString+=`_sort=-${filter._sort}&`;
  // else if(filter[key]==='asc') queryString+=`_sort=${filter._sort}&`;
  const categoryValues=filter[key];
  if(categoryValues.length>0){
    const lastCategoryValue=categoryValues[categoryValues.length-1]
    queryString+=`${key}=${lastCategoryValue}&`
  }
}
for(let key in sort){
  if(key==='_order' && sort[key]==='desc') queryString+=`_sort=-${sort._sort}&`;
  else if(filter[key]==='asc') queryString+=`_sort=${sort._sort}&`;
}

for(let key in pagination){

  queryString+=`${key}=${pagination[key]}&`;
}


  return new Promise(async (resolve) =>{
    const response=await fetch('http://localhost:8080/products?'+queryString)
    const data=await response.json();
    resolve({data})
  }
  );
}


