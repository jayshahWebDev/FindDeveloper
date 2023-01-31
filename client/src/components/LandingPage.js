import Info from "./Info";

const LandingPage = () => {
  return (
    <div className="mx-[4%] mt-[6%] flex flex-col justify-center items-center">
      <img
        alt="customersList"
        src="https://res.cloudinary.com/finddeveloper/image/upload/v1675097140/mobileCustomer_b5ovxi.jpg"
      />
      <div className="flex flex-col justify-center items-center">
        <Info
          heading={"5X higher response from companies"}
          info={
            "Tired of having your applications ignored by companies? Instahyre only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!"
          }
          photo={
            "https://res.cloudinary.com/finddeveloper/image/upload/v1675097139/response_ch7jxy.png"
          }
        />
        <Info
          heading={"Your perfect job, delivered to you"}
          info={
            "Do you really want to look at thousands of irrelevant job postings or get spammed by job sites? At Instahyre, we do the work of finding the best jobs for you, so you can sit back and relax."
          }
          photo={
            "https://res.cloudinary.com/finddeveloper/image/upload/v1675097140/target_qflnza.png"
          }
        />
        <Info
          heading={"Privacy guaranteed"}
          info={
            "We value your privacy very highly. You can block specific companies from viewing your profile. Or you can block all companies and just apply to specific ones yourself."
          }
          photo={
            "https://res.cloudinary.com/finddeveloper/image/upload/v1675097140/privacy_pwa10c.png"
          }
        />
      </div>
    </div>
  );
};

export default LandingPage;
