const JobSearchBar = () => {
  return (
    <div className="mx-[4%] mt-[2%] flex flex-col gap-y-[10px] justify-center items-center">
      <h1 className="font-Poppins font-medium text-[25px]">
        Find Your Dream Job Now
      </h1>
      <div className="flex flex-col gap-y-[10px] border-[1px] border-gray shadow-lg rounded-[10px] w-[70%] font-Poppins">
        <input
          className="w-[90%] px-[13px] py-[7px] mt-[3%] outline-none"
          placeholder="Enter skills"
        />
        <select className="px-[10px] w-[79%] outline-none">
          <option selected>Select experience</option>
          <option className="hover:bg-blue" value="fresher">
            Fresher
          </option>
          <option value="1-2">1-2 Year</option>
          <option value="2-3">2-3 Year</option>
          <option value="3-5">3-5 Year</option>
          <option value="5+">5+ Year</option>
        </select>
        <input
          className="w-[90%] px-[13px] py-[7px] outline-none"
          placeholder="Enter location"
        />
        <div className="flex justify-center items-center">
          <button className="rounded-[10px] bg-blue text-white py-[7px] px-[13px] mb-[3%]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchBar;
