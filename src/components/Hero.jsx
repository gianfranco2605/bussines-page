import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] max-auto  flex flex-column  items-center justify-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#D8FF00]" />
          <div className="w-1 sm:h80 h-40 florence-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text.white`}>
            Ciao, Siamo <span className="text-[#D8FF00]">Digital Navas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We code digital craft per humans
          </p>
          <p>by ElPuas Digital Craft</p>
          <a href="tel:3382835594" className="text-xl  text-[#D8FF00]">
            Tel: 338-283-55-94
          </a>{" "}
          <br />
          <a
            className="text-xl text-[#D8FF00]"
            href="mailto:websites@digitalnavas.it"
          >
            websites@digitalnavas.it
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
