import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-center text-white text-xl md:text-3xl font-bold subtitle relative pb-4">
        Projects
      </h2>

      <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4 w-5/6 md:w-3/4 mx-auto">
        {/* ---------- Project Card ---------- */}
        <ProjectCard
          link="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
          title="Project Management System"
          description="Project Management System with role-based auth, CRUD, drag-and-drop tasks, themes, and real-time tracking. Built with React, TypeScript, Context API, Bootstrap, and modern UI libraries for a smooth, responsive experience."
        />
        <ProjectCard
          link="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
          title="Project Management System"
          description="Project Management System with role-based auth, CRUD, drag-and-drop tasks, themes, and real-time tracking. Built with React, TypeScript, Context API, Bootstrap, and modern UI libraries for a smooth, responsive experience."
        />
        <ProjectCard
          link="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
          title="Project Management System"
          description="Project Management System with role-based auth, CRUD, drag-and-drop tasks, themes, and real-time tracking. Built with React, TypeScript, Context API, Bootstrap, and modern UI libraries for a smooth, responsive experience."
        />
      </div>
    </section>
  );
}
