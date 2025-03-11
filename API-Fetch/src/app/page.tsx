const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log("Error");
  }
};

const Products = async () => {
  const products = await fetchData();
  return (
    <div className="bg-white text-black min-h-screen">
      <button className="bg-black text-white p-[10px] text-[16px] font-[700] mt-[20px] ml-[50px]">
        Show All Products
      </button>

      <div className="grid grid-cols-4 gap-4 p-[50px]">
        {products.map((product: any) => (
          <div
            className="border border-black rounded-lg flex flex-col justify-between bg-white"
            key={product.id}>
            <img
              src={product.thumbnail}
              className="w-full bg-cover rounded-lg h-[200px]"
            />
            <h1 className="text-[20px] p-[10px] font-[900]">{product.title}</h1>
            <p className="text-[14px] p-[10px]">{product.description}</p>
            <button className="bottom-0 text-[16px] font-[700] bg-black text-white p-[5px]">
              Buy For {product.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
