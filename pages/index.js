const HomePage = ({ products }) => {
  const { list } = products;
  return (
    <div>
      {list.map((product, index) => {
        return <p>{product.name}</p>;
      })}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default HomePage;
