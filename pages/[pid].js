const ProductDetailPage = () => {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;
}

export default ProductDetailPage;
