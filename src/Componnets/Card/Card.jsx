import "./card.scss";

import rd from "../../assets/rd.png";
import cr7 from "../../assets/cr7.jpg";
import cr77 from "../../assets/cr77.jpg";
import cr78 from "../../assets/cr78.jpg";

import { AiOutlineGithub } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Card = () => {
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="card">
      <div className="subCard">
        <div className="cardIcon">
          <AiOutlineGithub className="icon" />
          <FiMoreHorizontal className="icon" />
        </div>
        <div className="cardContent">
          <div className="cards">
            <MyCard img={rd} />
            <MyCard img={cr7} />
            <MyCard img={cr77} />
            <MyCard img={cr78} />
            <MyCard img={rd} />

            <button className="pre-btn">
              <MdNavigateBefore className="icon" onClick={btnpressprev} />
            </button>
            <button className="nxt-btn">
              <MdNavigateNext className="icon" onClick={btnpressnext} />{" "}
            </button>
          </div>
        </div>
        <div className="cardText">
          <>
            <h1>CR7</h1>
          </>
        </div>
      </div>
    </div>
  );
};

const MyCard = (props) => {
  return (
    <div className="mycard">
      <img src={props.img} alt="" />
    </div>
  );
};

export default Card;
