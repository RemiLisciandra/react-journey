"use client";

import MainLayout from "./components/layout/MainLayout";
import { ItemsList } from "./components/item/ItemsList";
import { DataList } from "data/DataList";
import { Item } from "./components/item/Item";
import { useSearchParams } from "next/navigation";

const Home = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");

  const sortedData = [...DataList].sort((a, b) => {
    if (a.category.toLowerCase() === b.category.toLowerCase()) {
      return a.name.localeCompare(b.name);
    }
    return a.category.localeCompare(b.category);
  });

  let isAppliedFilter = search !== null;

  const filteredData = isAppliedFilter
    ? sortedData.filter(
        (data) => data.category.toLowerCase() === search.toLowerCase()
      )
    : sortedData;

  return (
    <>
      <MainLayout>
        <ItemsList>
          {filteredData.map((data) => (
            <Item key={data.name} data={data} hideCategory={isAppliedFilter} />
          ))}
        </ItemsList>
      </MainLayout>
    </>
  );
};

export default Home;
