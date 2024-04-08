import "../css/Main.css";
import bJava from "../img/bookJAVA.jpg";
import c from "../img/c++.jpg";
import c2 from "../img/c++2.jpg";
import books from "../img/b.png";
function Main() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-9 main-left">
              <div className="row justify-content-aroundH">
                <div className="col-4 content">
                  <h4> Book club</h4>
                  <h1>Et3lem</h1>
                  <p>
                    The intellectual treasury housing volumes that illuminate
                    the pathways of knowledge.
                  </p>
                  <button className="btn"> More</button>
                </div>
                <div className="col-7 img">
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
      </div>
    </>
  );
}
export default Main;