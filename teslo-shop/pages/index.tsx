import { NextPage } from "next";
import { ShopLayout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";
import ProductList from "@/components/products/ProductList";

const Home: NextPage = () => {
  const { isError, isLoading, products } = useProducts("/products");

  if (isError) return <div>error</div>;

  return (
    <ShopLayout
      title={"Teslo-Shop - Home"}
      pageDescription={"Encuentra los mejores productos de Teslo aquí"}
    >
      <Typography variant="h1" component={"h1"}>
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }} component={"h2"}>
        Todos los productos
      </Typography>

      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ProductList products={products}></ProductList>
      )}
    </ShopLayout>
  );
};

export default Home;
