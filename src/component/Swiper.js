// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../css/Swiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import Books from "./Book";
// import images
import bookJAVA from "../img/bookJAVA.jpg";
import bookPython from "../img/bookPython.jpg";
import bookPython2 from "../img/bookPython2.jpg";
import cPlus from "../img/cPLus.jpg";
import cc from "../img/CC.jpg";
import { Link } from "react-router-dom";

export default function Swiperr() {
  const Books = [
    {
      id: 1,
      name: "Pthon book",
      field: "web",
      image: bookPython,
    },
    {
      id: 2,
      name: "Java book",
      field: "web",
      image: bookJAVA,
    },
    {
      id: 3,
      name: "Python book",
      field: "web",
      image: bookPython2,
    },
    {
      id: 4,
      name: "C++ book",
      field: "web",
      image: cPlus,
    },
    {
      id: 5,
      name: "C++ book",
      field: "web",
      image: cc,
    },
    {
      id: 6,
      name: "Pthon book",
      field: "web",
      image: bookPython,
    },
    {
      id: 7,
      name: "Java book",
      field: "web",
      image: bookJAVA,
    },
    {
      id: 8,
      name: "Python book",
      field: "web",
      image: bookPython2,
    },
    {
      id: 9,
      name: "C++ book",
      field: "web",
      image: cPlus,
    },
    {
      id: 10,
      name: "C++ book",
      field: "web",
      image: cc,
    },
  ];
  return (
    <>
      <div className=" main-swiper">
        <h1>Most Important Books</h1>
        <Swiper
          slidesPerView={window.innerWidth < 400 ? "auto" : 4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Books.map((ele) => {
            return (
              <>
                <SwiperSlide key={ele.id}>
                  <div className="card">
                    <img className="card-img-top" src={ele.image} alt="Card " />
                    <div className="card-body">
                      <h5 className="card-title">{ele.name}</h5>

                      <Link to="https://drive.google.com/drive/u/0/folders/1rW7t8bwTi8WSO-ZV5utqYvh3ZaTRsNlW">
                        <a className="btn " href="https://drive.google.com/drive/u/0/folders/1rW7t8bwTi8WSO-ZV5utqYvh3ZaTRsNlW">
                          Read
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
