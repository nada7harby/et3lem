import Nav from "../component/Nav"
import Main from "./Main";
import Swiperr from "./Swiper";
import Notes from "./Notes";
function Home(){
               return(
                              <>
                              <Nav></Nav>
                              <Main></Main>
                              <Swiperr></Swiperr>
                              <Notes></Notes>
                              </>
               )
}
export default Home;