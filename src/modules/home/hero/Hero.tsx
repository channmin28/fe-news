import { hero } from "../../../dummyData";
import Card from "./Card";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {hero.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
