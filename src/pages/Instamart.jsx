import { useState } from "react";

const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="mb-2 rounded-xl border-2 border-yellow-400 p-4">
      <h2 className="text-3xl font-bold underline">{title}</h2>
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className={`m-2 h-10 w-20 rounded-lg font-bold ${isVisible ? "bg-yellow-400" : "bg-green-400"}`}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p className="m-4 pl-10 text-gray-500">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <div className="mb-24 flex min-h-screen w-3/4 flex-col pt-28">
      <h2 className="text-center text-4xl font-bold">Instamart Page</h2>
      <Section
        title={"Product"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis. Perspiciatis sequi est modi sunt commodi doloremque minima totam adipisci? Est, cumque vero! Impedit sit sequi, ut nihil dicta, numquam molestias tempora, iure laudantium minima iste. Amet aliquam expedita voluptas autem est sed nam. Debitis, rerum, blanditiis cupiditate iste hic porro eos perspiciatis reprehenderit fugit facilis ipsum aliquid natus deserunt quo architecto quam iusto esse officia. Nemo sunt facilis voluptatem atque dolore eveniet iste tempore voluptatum omnis doloribus harum aut enim, esse fuga fugit, nisi est voluptatibus pariatur laboriosam aliquam. Debitis, dignissimos. Labore delectus, dolore molestiae qui inventore eveniet ipsum."
        }
      />
      <Section
        title={"Details"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis. Perspiciatis sequi est modi sunt commodi doloremque minima totam adipisci? Est, cumque vero! Impedit sit sequi, ut nihil dicta, numquam molestias tempora, iure laudantium minima iste. Amet aliquam expedita voluptas autem est sed nam. Debitis, rerum, blanditiis cupiditate iste hic porro eos perspiciatis reprehenderit fugit facilis ipsum aliquid natus deserunt quo architecto quam iusto esse officia. Nemo sunt facilis voluptatem atque dolore eveniet iste tempore voluptatum omnis doloribus harum aut enim, esse fuga fugit, nisi est voluptatibus pariatur laboriosam aliquam. Debitis, dignissimos. Labore delectus, dolore molestiae qui inventore eveniet ipsum."
        }
      />
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis. Perspiciatis sequi est modi sunt commodi doloremque minima totam adipisci? Est, cumque vero! Impedit sit sequi, ut nihil dicta, numquam molestias tempora, iure laudantium minima iste. Amet aliquam expedita voluptas autem est sed nam. Debitis, rerum, blanditiis cupiditate iste hic porro eos perspiciatis reprehenderit fugit facilis ipsum aliquid natus deserunt quo architecto quam iusto esse officia. Nemo sunt facilis voluptatem atque dolore eveniet iste tempore voluptatum omnis doloribus harum aut enim, esse fuga fugit, nisi est voluptatibus pariatur laboriosam aliquam. Debitis, dignissimos. Labore delectus, dolore molestiae qui inventore eveniet ipsum."
        }
      />
    </div>
  );
};
export default Instamart;
