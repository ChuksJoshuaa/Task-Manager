const Footer = () => {
  return (
    <div className="h-[5rem] flex justify-center items-center text-center mt-5 bg-gray-900">
      <h5 className="text-capitalize text-white m-[0.1rem] leading-[1.25]">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white">COURE.</span>
      </h5>{" "}
      <h5 className="text-capitalize text-white">All rights reserved</h5>
    </div>
  );
};

export default Footer;
