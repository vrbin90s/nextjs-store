import ProductsContainer from "@/components/products/ProductsContainer";

const ProdutsPage = ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) => {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={ layout } search={ search } />
};

export default ProdutsPage;
