import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="logo">
        <img
          src="https://kaso-tto.com/wp-content/uploads/2022/08/kashidoki_logo.png"
          alt=""
        />
        <p className="text">のクローン</p>
      </div>
    </Link>
  );
};
