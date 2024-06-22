import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and learning" />
          <p className="text-slate-600 mt-8 leading-loose text-center md:text-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
            reiciendis nemo adipisci commodi maiores tempore et voluptate
            nostrum necessitatibus suscipit officia eum pariatur repudiandae
            autem eos ab delectus veniam ducimus, nesciunt fugiat enim
            consequatur. Exercitationem est dicta fugiat sapiente dignissimos.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
