import Layout from "@common/components/Layout";

const HomePage = ({ products }) => {
  const { list } = products;
  return (
    <Layout>
      <div>
        {list.map((product, index) => {
          return <p>{product.name}</p>;
        })}
      </div>
    </Layout>
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
