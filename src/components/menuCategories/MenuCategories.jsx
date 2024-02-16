import React from "react";
import Link from "next/link";
import styles from "./menuCategories.module.css";
import prisma from "@/utils/connect";
import { NEXT_URL } from "@/utils/config";

const getData = async () => {
  const res = await fetch(`${NEXT_URL}/api/categories`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const MenuCategories = async () => {
  //const data = await getData();
  //const data = await prisma.category.findMany();
  return (
    <div className={styles.categoryList}>
      {/* {data?.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}
          key={item._id}
        >
          {item.title}
        </Link>
      ))} */}
    </div>
  );
};

export default MenuCategories;
