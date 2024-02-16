import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import prisma from "@/utils/connect";

//cat can be none
// const getData = async (page, cat) => {
//   const res = await fetch(
//     `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CardList = async ({ page, cat }) => {
  //const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };
  // const { posts, count } = await prisma.$transaction([
  //   prisma.post.findMany(query),
  //   prisma.post.count({ where: query.where }),
  // ]);

  const posts = await prisma.post.findMany(query);
  const count = await prisma.post.count({ where: query.where });

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  //console.log(typeof posts);
  //console.log(posts);

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
