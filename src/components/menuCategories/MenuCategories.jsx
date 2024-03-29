import React from "react";
import Link from "next/link";
import styles from "./menuCategories.module.css";
import prisma from "@/utils/connect";

const MenuCategories = async () => {
  const data = await prisma.category.findMany();
  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          className={`${styles.categoryItem} ${styles[item.slug]}`}
          key={item._id}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
