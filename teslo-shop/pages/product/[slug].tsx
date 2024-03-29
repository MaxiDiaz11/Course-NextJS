import React from "react";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ProductSizeSelector, ProductSlideShow } from "@/components/products";
import { ItemCounter } from "@/components/ui";
import { IProduct } from "@/interfaces";
import { GetServerSideProps, NextPage } from "next";
import { dbProducts } from "@/database";

interface Props {
  product: IProduct;
}
const ProductPage: NextPage<Props> = ({ product }) => {
  //! Primera estrategia
  // const router = useRouter();
  // const { products: product, isLoading } = useProducts<IProduct>(
  //   `/products/${router.query.slug}`
  // );

  //! Segunda estrategia
  // getServerSideProps

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* SlideShow */}
          <ProductSlideShow images={product.images}></ProductSlideShow>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={"flex"} flexDirection={"column"}>
            {/* Titulos */}
            <Typography variant="h1" component={"h1"}>
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component={"h2"}>
              ${product.price}
            </Typography>
            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter></ItemCounter>
              <ProductSizeSelector
                // selectedSize={product.sizes[0]}
                sizes={product.sizes}
              ></ProductSizeSelector>
            </Box>
            {/* Agregar al carrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>
            {/* <Chip label="No hay disponibles" color="error" variant="outlined" /> */}

            {/* Descripcion */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const product = await dbProducts.getProductsBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
