const NavBar = () => {
  return (
    <div className="flex justify-between items-center mx-[4%] mt-[1%] font-Poppins">
      <img
        alt="logo"
        src="https://res.cloudinary.com/finddeveloper/image/upload/v1675084235/logo_aemg6e.jpg"
        className="h-[50px]"
      />
      <div className="flex gap-x-[10px]">
        <button className="border-[1px] border-blue rounded-[10px] px-[13px] py-[7px] font-medium hover:bg-blue hover:text-white">Find Job</button>
        <button className="border-[1px] border-blue rounded-[10px] px-[13px] py-[7px] font-medium hover:bg-blue hover:text-white">Post Job</button>
      </div>
    </div>
  );
};

export default NavBar;
