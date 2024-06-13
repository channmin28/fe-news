/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hero } from "../../dummyData";
import "../home/mainContent/homes/style.css";
import Side from "../home/sideContent/side/Side";
import "../home/sideContent/side/side.css";
import "./singlepage.css";
import SinglePageSlider from "./slider/SinglePageSlider";

type Hero = {
  id: string;
  title: string;
  authorImg: string;
  authorName: string;
  time: string;
  cover: string;
  desc: any[];
  details: any[];
};

const SinglePage = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Hero>();

  useEffect(() => {
    const item: Hero = hero.find((item) => item?.id === parseInt(id));
    window.scrollTo(0, 0);
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <main>
      <SinglePageSlider />
      <div className='container'>
        <section className='mainContent details'>
          <h1 className='title'>{item?.title}</h1>

          <div className='author'>
            <span>by</span>
            <img src={item?.authorImg} alt='' />
            <p> {item?.authorName} on</p>
            <label>{item?.time}</label>
          </div>

          <div className='social'>
            <div className='socBox'>
              <i className='fab fa-facebook-f'></i>
              <span>SHARE</span>
            </div>
            <div className='socBox'>
              <i className='fab fa-twitter'></i>
              <span>TWITTER</span>
            </div>
            <div className='socBox'>
              <i className='fab fa-pinterest'></i>
            </div>
            <div className='socBox'>
              <i className='fa fa-envelope'></i>
            </div>
          </div>

          <div className='desctop'>
            {item?.desc.map((val) => {
              return (
                <>
                  <p>{val.para1}</p>
                  <p>{val.para2}</p>
                </>
              );
            })}
          </div>
          <img src={item?.cover} alt='' />
          {item?.desc.map((val) => (
            <p>{val.para3}</p>
          ))}

          <div className='descbot'>
            {item?.details.map((data) => {
              return (
                <>
                  <h1>{data.title}</h1>
                  <p>{data.para1}</p>
                </>
              );
            })}
          </div>

          <div className='quote'>
            <i className='fa fa-quote-left'></i>
            {item?.details.map((data) => (
              <p>{data.quote}</p>
            ))}
          </div>

          <div className='desctop'>
            {item?.details.map((data) => {
              return (
                <>
                  <p>{data.para2}</p>
                  <p>{data.para3}</p>
                </>
              );
            })}
          </div>
        </section>
        <section className='sideContent'>
          <Side />
        </section>
      </div>
    </main>
  );
};

export default SinglePage;