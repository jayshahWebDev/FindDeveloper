const Info = ({ heading, info, photo }) => {
  return (
    <div className="mx-[4%] mt-[5%] font-Poppins flex justify-between desktop:w-[50%]">
      <div className="laptop:w-[60%]">
        <h1 className="font-medium">{heading}</h1>
        <p className="text-gray text-[15px] mt-[2%]">{info}</p>
      </div>
      <img className="hidden laptop:block" alt="icon" src={photo} />
    </div>
  );
};

export default Info;
