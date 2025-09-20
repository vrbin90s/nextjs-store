import ProductsContainer from "@/components/products/ProductsContainer";

const ProdutsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {

  const { layout = "grid", search = "" } = await searchParams;

  return <ProductsContainer layout={ layout } search={ search } />
};

export default ProdutsPage;