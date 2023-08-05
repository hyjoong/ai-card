import React from "react";
import SearchInput from "@/components/common/searchInput";
import prismadb from "@/lib/prismadb";
import CategoryList from "@/components/common/main/categoryList";

const RootPage = async () => {
  const categories = await prismadb.category.findMany();
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <CategoryList data={categories} />
    </div>
  );
};

export default RootPage;
