import "./heading.css";

const Heading = ({ title }: { title: string }) => {
  return (
    <>
      <div className='heading'>
        <h6>{title}</h6>
      </div>
    </>
  );
};

export default Heading;
