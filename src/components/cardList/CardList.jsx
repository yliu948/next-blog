{
  //import React from "react";
  // import styles from "./cardList.module.css";
  // import Pagination from "../pagination/Pagination";
  // import Image from "next/image";
  // import Card from "../card/Card";
  // import { NEXT_URL } from "@/utils/config";
  // const getData = async (page, cat) => {
  //   const res = await fetch(
  //     `${NEXT_URL}/api/posts?page=${page}&cat=${cat || ""}`,
  //     {
  //       cache: "no-store",
  //     }
  //   );
  //   if (!res.ok) {
  //     throw new Error("Failed");
  //   }
  //   return res.json();
  // };
  // const CardList = async ({ page, cat }) => {
  //   const { posts, count } = await getData(page, cat);
  //   const POST_PER_PAGE = 2;
  //   const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  //   const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  //   return (
  //     <div className={styles.container}>
  //       <h1 className={styles.title}>Recent Posts</h1>
  //       <div className={styles.posts}>
  //         {posts?.map((item) => (
  //           <Card item={item} key={item._id} />
  //         ))}
  //       </div>
  //       <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
  //     </div>
  //   );
  // };
  // export default CardList;
}

import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import prisma from "@/utils/connect";

const CardList = async ({ page, cat }) => {
  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  const posts = await prisma.post.findMany(query);
  const count = await prisma.post.count({ where: query.where });

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
