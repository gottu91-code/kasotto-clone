import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Frame } from "./Frame";
import { SectionTitle } from "./SectionTitle";

const SSectionNewRealtor = styled.section``;
const SNewRealtorList = styled.div`
  margin-top: 20px;
  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 30px;
    @media (max-width: 767px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 428px) {
      grid-template-columns: repeat(2, 1fr);
    }
    li {
      .title {
        font-size: 1.1rem;
        border-bottom: 1px solid #eee;
        padding: 4px 0;
        margin-bottom: 4px;
      }
      .img {
        border-radius: 4px;
        overflow: hidden;
      }
      .text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
`;

export const SectionNewRealtor = ({ setIsLoading }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://54.238.199.111/wp-json/wp/v2/realtor");
      const data = await res.json();
      setPosts([...posts, ...data]);
    };
    fetchPosts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <SSectionNewRealtor>
      <Frame>
        <SectionTitle
          jaText="新着管理会社情報"
          subText="別サーバーのwpから投稿情報を引っ張ってきて表示しています。"
        />
        <SNewRealtorList>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  to={`/realtor?post_id=${post.id}`}
                  state={{ post_id: post.id }}
                >
                  <div className="img">
                    <img src={post.thumbnail_url} alt="" />
                  </div>
                  <p className="title">{post.title.rendered}</p>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
        </SNewRealtorList>
      </Frame>
    </SSectionNewRealtor>
  );
};
