import TechBadge from "./TechBadge";

export default function ProjectCard({ link, title, description, listOfTech }) {
  return (
    <div className="card border border-[#006494] rounded-xl shadow-lg overflow-hidden bg-[#0d1b2a] hover:scale-105 transition-transform">
      <video className="w-full" controls>
        <source src={link} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>

      <div className="p-2">
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <p className="text-sm leading-relaxed mb-4 text-gray-400">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 ">
          {listOfTech.map((name) => (
            <TechBadge key={name} label={name} />
          ))}
        </div>

        <div className="links flex gap-3 my-4">
          <button>
            <a
              href="#"
              className="px-2 py-1 rounded-lg bg-white text-[#0582ca]  hover:bg-[#5f93e7] hover:text-white transition"
            >
              Live Demo
            </a>
          </button>

          <button>
            <a
              href="#"
              className="px-2 py-1 rounded-lg bg-transparent text-white border  transition"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
