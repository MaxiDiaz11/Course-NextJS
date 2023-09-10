import { ShopLayout } from "@/components/layouts";
import ProductList from "@/components/products/ProductList";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { Typography } from "@mui/material";
import { NextPage } from "next";

interface Props {}

const Men: NextPage<Props> = ({}) => {
  const { isError, isLoading, products } = useProducts("/products?gender=men");

  if (isError) return <div>error</div>;

  return (
    <ShopLayout title={"Men"} pageDescription={"Men products"}>
      <Typography variant="h1" component={"h1"}>
        Hombres
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }} component={"h2"}>
        Todos los productos para hombres
      </Typography>

      {isLoading ? (
        <FullScreenLoading />
      ) : (
        <ProductList products={products}></ProductList>
      )}
    </ShopLayout>
  );
};

export default Men;
