import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "./Btn";
import { Frame } from "./Frame";

const SRealtor = styled.div`
  .realtor_container {
    max-width: 700px;
    margin-inline: auto;
    .img {
      border-radius: 8px;
      overflow: hidden;
    }
    .title {
      font-size: 1.6rem;
      border-bottom: 1px solid #eee;
      padding: 10px 0;
      @media (max-width: 428px) {
        font-size: 1.3rem;
      }
    }
    .text {
      margin-top: 10px;
      line-height: 1.8;
      margin-bottom: 50px;
      @media (max-width: 428px) {
        margin-bottom: 40px;
      }
    }
  }
`;

export const Realtor = () => {
  const location = useLocation();
  const { post_id } = location.state;
  const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        `http://54.238.199.111/wp-json/wp/v2/realtor/${post_id}`
      );
      const data = await res.json();
      setPost(data);
    };
    fetchPosts();
  }, []);

  return (
    <SRealtor>
      <Frame>
        {post && (
          <div className="realtor_container">
            <div className="img">
              <img src={post.thumbnail_url} alt="" />
            </div>
            <p className="title">{post.title.rendered}</p>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
            <Btn to={"/"}>TOPへ戻る</Btn>
          </div>
        )}
      </Frame>
    </SRealtor>
  );
};
