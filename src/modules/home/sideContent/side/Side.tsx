import Slider from "react-slick";
import { gallery } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "../social/SocialMedia";
import "./side.css";

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const catgeory = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];
  return (
    <>
      <Heading title='Stay Connected' />
      <SocialMedia />

      <Heading title='Subscribe' />

      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section>

      <Tpost />

      <section className='catgorys'>
        <Heading title='Catgeorys' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1' key={val}>
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img' key={val.cover}>
                <img src={val.cover} alt='' />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
