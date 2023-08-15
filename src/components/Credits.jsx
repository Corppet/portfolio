import { SectionWrapper } from "../hoc";

const Credits = () => {
  return (
    <p className="relative z-0 sm:text-[18px] text-[14px] text-secondary justify-center">
      Original website template provided by&nbsp;
      <a href="https://github.com/adrianhajdin/project_3D_developer_portfolio" target="_blank"
      rel="noreferrer" className="text-[#0effff] hover:underline">Adrian Hajdin @ JS Mastery</a>
    </p>
  );
};

export default SectionWrapper(Credits, "credits");