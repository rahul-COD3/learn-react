function Key() {
  const products = ["Apple", "lichi", "mongo", "vinod", "mayank", "mayank"];
  const productList = products.map((products) => <h3>{products}</h3>);
  return <div>{productList}</div>;
}

export default Key;
