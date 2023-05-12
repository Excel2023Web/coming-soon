import React from "react";
import "./Legacy.css";
import excel2017 from "../../assets/png/excel2017.png";
import excel2018 from "../../assets/png/excel2018.png";
import excel2019 from "../../assets/png/excel2019.png";
import excel2020 from "../../assets/png/excel2020.png";
import excel2021 from "../../assets/svg/excel2021.svg";
import excel2022 from "../../assets/svg/excel2022.svg";

const Legacy = () => {
  return (
    <div className="legacy__container_out">
      <div className="legacy__container">
        <a href="https://2017.excelmec.org/" target="blank">
          {" "}
          <img
            src={excel2017}
            alt=""
            className="logo__2017"
          />
        </a>
        <a href="https://2018.excelmec.org/" target="blank">
          <img
            src={excel2018}
            alt=""
            className="logo__2018"
          />
        </a>
        <a href="https://2019.excelmec.org/" target="blank">
          {" "}
          <img
            src={excel2019}
            alt=""
            className="logo__2019"
          />
        </a>
        <a href="https://2020.excelmec.org/" target="blank">
          <img
            src={excel2020}
            alt=""
            className="logo__2020"
          />
        </a>
        <a href="https://2021.excelmec.org/" target="blank">
          <img
            src={excel2021}
            alt=""
            className="logo__2021"
          />
        </a>
        <a href="https://2022.excelmec.org/" target="blank">
          <img
            src={excel2022}
            alt=""
            className="logo__2022"
          />
        </a>
      </div>
    </div>
  );
};

export default Legacy;
