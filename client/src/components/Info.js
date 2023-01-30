const Info = ({ heading, info, photo }) => {
  return (
    <div className="mx-[4%] mt-[5%] font-Poppins">
      <div>
        <h1 className="font-medium">{heading}</h1>
        <p className="text-gray text-[15px]">{info}</p>
      </div>
      <img className="hidden" alt="icon" src={photo} />
    </div>
  );
};

export default Info;
