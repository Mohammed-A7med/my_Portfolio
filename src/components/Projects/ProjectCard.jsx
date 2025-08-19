export default function ProjectCard({ link, title, description }) {
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
      </div>
    </div>
  );
}
