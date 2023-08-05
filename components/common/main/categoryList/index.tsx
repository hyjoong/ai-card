"use client";

import React from "react";
import qs from "query-string";
import { Category } from "@prisma/client";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryListProps {
  data: Category[];
}
const CategoryList = ({ data }: CategoryListProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const handleCategoryClick = (id?: string) => {
    const query = { categoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };
  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        onClick={() => handleCategoryClick(undefined)}
        className={cn(
          `flex
            items-center
            text-center
            text-xs
            md:text-sm
            px-2
            md:px-4 
            py-2
            md:py-3
            rounded-md
            bg-primary/10
            hover:opacity-75
            transition
            `,
          !categoryId ? "bg-primary/25" : "bg-primary/10"
        )}
      >
        Newest
      </button>

      {data.map((item) => (
        <button
          onClick={() => handleCategoryClick(item.id)}
          key={item.id}
          className={cn(
            `flex
            items-center
            text-center
            text-xs
            md:text-sm
            px-2
            md:px-4 
            py-2
            md:py-3
            rounded-md
            bg-primary/10
            hover:opacity-75
            transition
            `,
            item.id === categoryId ? "bg-primary/25" : "bg-primary/10"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
