import fs from "fs/promises";
import path from "path";

const HomePage = (props) => {
  const products = props.products;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
