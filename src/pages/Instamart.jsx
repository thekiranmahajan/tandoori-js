import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="mb-2 rounded-xl border-2 border-yellow-400 p-4">
      <h2 className="text-3xl font-bold underline">{title}</h2>

      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible((prev) => !prev)}
            className="m-2 h-10 w-20 rounded-lg bg-green-400 font-bold"
          >
            Hide
          </button>
          <p className="m-4 pl-10 text-gray-500">{description}</p>
        </>
      ) : (
        <button
          onClick={() => setIsVisible()}
          className="m-2 h-10 w-20 rounded-lg bg-green-400 font-bold"
        >
          Show
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showProduct: false,
    showDetails: false,
    showCareers: false,
  });
  return (
    <div className="mb-24 flex min-h-screen w-3/4 flex-col pt-28">
      <h2 className="text-center text-4xl font-bold">Instamart Page</h2>
      <Section
        title={"Products"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis. Perspiciatis sequi est modi sunt commodi doloremque minima totam adipisci? Est, cumque vero! Impedit sit sequi, ut nihil dicta, numquam molestias tempora, iure laudantium minima iste. Amet aliquam expedita voluptas autem est sed nam. Debitis, rerum, blanditiis cupiditate iste hic porro eos perspiciatis reprehenderit fugit facilis ipsum aliquid natus deserunt quo architecto quam iusto esse officia. Nemo sunt facilis voluptatem atque dolore eveniet iste tempore voluptatum omnis doloribus harum aut enim, esse fuga fugit, nisi est voluptatibus pariatur laboriosam aliquam. Debitis, dignissimos. Labore delectus, dolore molestiae qui inventore eveniet ipsum."
        }
        isVisible={sectionConfig.showProduct}
        setIsVisible={() =>
          setSectionConfig({
            showProduct: true,
            showDetails: false,
            showCareers: false,
          })
        }
      />
      <Section
        title={"Details"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis. Perspiciatis sequi est modi sunt commodi doloremque minima totam adipisci? Est, cumque vero! Impedit sit sequi, ut nihil dicta, numquam molestias tempora, iure laudantium minima iste. Amet aliquam expedita voluptas autem est sed nam. Debitis, rerum, blanditiis cupiditate iste hic porro eos perspiciatis reprehenderit fugit facilis ipsum aliquid natus deserunt quo architecto quam iusto esse officia. Nemo sunt facilis voluptatem atque dolore eveniet iste tempore voluptatum omnis doloribus harum aut enim, esse fuga fugit, nisi est voluptatibus pariatur laboriosam aliquam. Debitis, dignissimos. Labore delectus, dolore molestiae qui inventore eveniet ipsum."
        }
        isVisible={sectionConfig.showDetails}
        setIsVisible={() =>
          setSectionConfig({
            showProduct: false,
            showDetails: true,
            showCareers: false,
          })
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis. Perspiciatis sequi est modi sunt commodi doloremque minima totam adipisci? Est, cumque vero! Impedit sit sequi, ut nihil dicta, numquam molestias tempora, iure laudantium minima iste. Amet aliquam expedita voluptas autem est sed nam. Debitis, rerum, blanditiis cupiditate iste hic porro eos perspiciatis reprehenderit fugit facilis ipsum aliquid natus deserunt quo architecto quam iusto esse officia. Nemo sunt facilis voluptatem atque dolore eveniet iste tempore voluptatum omnis doloribus harum aut enim, esse fuga fugit, nisi est voluptatibus pariatur laboriosam aliquam. Debitis, dignissimos. Labore delectus, dolore molestiae qui inventore eveniet ipsum."
        }
        isVisible={sectionConfig.showCareers}
        setIsVisible={() =>
          setSectionConfig({
            showProduct: false,
            showDetails: false,
            showCareers: true,
          })
        }
      />
    </div>
  );
};
export default Instamart;
