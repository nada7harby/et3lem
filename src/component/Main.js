import "../css/Main.css";
import bJava from "../img/bookJAVA.jpg";
import c from "../img/cPLus.jpg";
import c2 from "../img/cPlus2.jpg";
import books from "../img/b.png";
import { Link } from "react-router-dom";
import web from "../img/Flutter.svg";
import IT from "../img/IT.svg";
import Flutter from "../img/Flutter.svg";
import app from "../img/app.svg";
import AI from "../img/AI.svg";

function Main() {
  const Field = [
    {
      id: 1,
      name: "Web",
      link: "https://drive.google.com/drive/folders/17qRiZTBwSP88SRvwtHWHougeaDF6m9sK?usp=drive_link",
      describe:
        "Web development involves creating and maintaining websites or web applications. It encompasses front-end development, focusing on the user interface and client-side functionality",
      img: web,
    },
    {
      id: 2,
      name: "AI",
      link: "https://drive.google.com/drive/folders/1YvPSWstCRGnEffRX1bhA-U6-WyMk85jP?usp=drive_link",
      describe:
        "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. It involves tasks such as learning, reasoning, and self-correction. ",
      img: AI,
    },
    {
      id: 3,
      name: "Andriod",
      link: "https://drive.google.com/drive/folders/1XfqIWUQ49Kxr4lQwFDauOwCAiOQffwcW?usp=drive_link",
      describe:
        "Android is a mobile operating system developed by Google, based on the Linux kernel. It's designed primarily for touchscreen mobile devices such as smartphones and tablets",
      img: app,
    },
    {
      id: 4,
      name: "IT",
      link: "https://drive.google.com/drive/folders/16cUNZoSUSuwOCIAAxkxbrLabRmReaDEt?usp=drive_link",
      describe:
        "Information Technology (IT) encompasses the use of computers, networks, software, and other technologies to store, retrieve, transmit, and manipulate data or information.",
      img: IT,
    },
    {
      id: 5,
      name: "Flutter",
      link: "https://drive.google.com/drive/folders/16hH3o3ygEdbOdBixMhgvLS1ZHhXtjkow?usp=drive_link",
      describe:
        "Flutter is an open-source UI software development kit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and offers a rich set of pre-designed widgets",
      img: Flutter,
    },
    {
      id: 6,
      name: "Embedded systems",
      link: "https://drive.google.com/drive/folders/10q3sRwjpiAWbSo7A3ML4WVhiCR6olRCg?usp=drive_link",
      describe:
        " Embedded systems are specialized computing systems designed to perform specific tasks within larger systems or devices. They typically consist of a microcontroller or microprocessor, memory, and input//output interfaces integrated into a single hardware unit. ",
      img: Flutter,
    },
  ];

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-9 main-left">
              <div className="row justify-content-aroundH">
                <div className="col-lg-4 col-sm-4 content">
                  <h4> Book club</h4>
                  <h1>Et3lem</h1>
                  <p>
                    The intellectual treasury housing volumes that illuminate
                    the pathways of knowledge.
                  </p>
                  <button className="btn"> More</button>
                </div>
                <div className="col-lg-7 col-sm-7 img">
                  <img src={books} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 book-main">
              <div className="row">
                <div className="col-11 main-right one">
                  <h4>Best Books</h4>
                  <button className="btn "> More</button>
                  <img src={bJava} />
                </div>
                <div className="col-11 main-right all">
                  <h4>Academic Explorer</h4>
                  <button className="btn "> More</button>
                  <div className="images">
                    <img src={bJava} className="f" alt="img" />
                    <img src={c2} className="s" alt="img" />
                    <img src={c} className="t" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h1 className="Field-word">our Fields</h1>
          <div className="row justify-content-around">
            {Field.map((ele) => {
              return (
                <>
                  <div className="col-lg-3 col-sm-5  field" key={ele.id}>
                    <div className="row">
                      <div className="col-7">
                        <Link to={ele.link}>
                          {" "}
                          <img src={ele.img} alt="noimage" />
                        </Link>
                      </div>
                      <div className="col-5 name-field">
                        <Link to={ele.link}>
                          <h2> {ele.name}</h2>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p>{ele.describe}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
