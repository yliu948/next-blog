"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  //console.log(cat);
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}&cat=${cat || ""}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}&cat=${cat || ""}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
