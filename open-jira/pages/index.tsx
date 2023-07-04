import React from "react";
import { NextPage } from "next";
import { Card, CardHeader, Grid } from "@mui/material";
import Layout from "@/components/layouts/Layout";
import { EntryList, NewEntry } from "@/components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes"></CardHeader>
            {/* Agregar una nueva entrada */}
            {/* Listado de las entradas */}
            <NewEntry></NewEntry>
            <EntryList status="pending"></EntryList>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En progreso"></CardHeader>
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas"></CardHeader>
            <EntryList status="finished"></EntryList>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
