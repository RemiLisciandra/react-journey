"use client";

import MainLayout from "./components/layout/MainLayout";
import { ItemsList } from "./components/item/ItemsList";
import { DataList } from "data/DataList";
import { Item } from "./components/item/Item";

const Home = () => {
  return (
    <>
      <MainLayout>
        <ItemsList>
          {DataList.map((data) => (
            <Item key={data.name} data={data} />
          ))}
        </ItemsList>
      </MainLayout>
    </>
  );
};

export default Home;
