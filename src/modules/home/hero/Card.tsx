import { Link } from "react-router-dom";

const Card = ({
  item: { id, cover, catgeory, title, authorName, time },
}: {
  item: {
    id: number;
    cover: string;
    catgeory: string;
    title: string;
    authorName: string;
    time: string;
  };
}) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <span className='category'>{catgeory}</span>
          <Link to={`/SinglePage/${id}`}>
            <h1 className='titleBg'>{title}</h1>
          </Link>
          <div className='author flex'>
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
