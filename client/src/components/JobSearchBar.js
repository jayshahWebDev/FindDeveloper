import { useState } from "react";

const JobSearchBar = () => {
  let searchData = {
    skill: "",
    experience: "",
    location: "",
  };
  const [searchQuery, setSearchQuery] = useState(searchData);
  return (
    <div className="mx-[4%] mt-[2%] flex flex-col gap-y-[10px] justify-center items-center ">
      <h1 className="font-Poppins font-medium text-[25px] tablet:text-[30px] laptop:text-[40px]">
        Find Your Dream Job Now
      </h1>
      <div className="flex flex-col tablet:flex-row tablet:items-center gap-y-[10px] tablet:px-[5px] py-[5px] border-[0.5px] border-gray shadow-lg rounded-[10px] w-[70%] tablet:w-[750px] font-Poppins">
        <input
          className="w-[90%] px-[13px] py-[7px] mt-[3%] tablet:mt-0 tablet:w-[250px] outline-none"
          placeholder="Enter skill"
          value={searchQuery.skill}
          onChange={(e) => {
            setSearchQuery({ ...searchQuery, skill: e.target.value });
          }}
        />
        <select
          className="px-[10px] w-[79%] tablet:w-[190px] outline-none"
          defaultValue={"select"}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <option value="select" disabled>
            Select experience
          </option>
          <option value="fresher">Fresher</option>
          <option value="1-2">1-2 Year</option>
          <option value="2-3">2-3 Year</option>
          <option value="3-5">3-5 Year</option>
          <option value="5+">5+ Year</option>
        </select>
        <input
          className="w-[90%] px-[13px] py-[7px] tablet:w-[250px] outline-none"
          placeholder="Enter location"
        />
        <div className="flex justify-center items-center">
          <button className="rounded-[10px] bg-blue text-white py-[7px] px-[13px] mb-[3%] tablet:mb-0">
            Search
          </button>
        </div>
      </div>
      <div className="absolute top-[21%] bg-white border-[0.5px] rounded-[10px] px-[10px] py-[4px] shadow-lg w-[250px] h-[250px]">
        <h1>Model Code</h1>
      </div>
    </div>
  );
};

export default JobSearchBar;
