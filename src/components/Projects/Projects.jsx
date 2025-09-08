import Section from "../Shared/Section";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" >
      
      <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4 w-5/6 md:w-3/4 mx-auto">
        {/* ---------- Project Card ---------- */}
        <ProjectCard
          link="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
          title="Project Management System"
          description="Project Management System with role-based auth, CRUD, drag-and-drop tasks, themes, and real-time tracking. Built with React, TypeScript, Context API, Bootstrap, and modern UI libraries for a smooth, responsive experience."
          listOfTech={["React", "TypeScript", "HTML", "Bootstrap"]}
        />
        <ProjectCard
          link="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
          title="Project Management System"
          description="Project Management System with role-based auth, CRUD, drag-and-drop tasks, themes, and real-time tracking. Built with React, TypeScript, Context API, Bootstrap, and modern UI libraries for a smooth, responsive experience."
          listOfTech={["React", "TypeScript", "HTML", "Bootstrap"]}
        />
        <ProjectCard
          link="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4"
          title="Project Management System"
          description="Project Management System with role-based auth, CRUD, drag-and-drop tasks, themes, and real-time tracking. Built with React, TypeScript, Context API, Bootstrap, and modern UI libraries for a smooth, responsive experience."
          listOfTech={["React", "TypeScript", "HTML", "Bootstrap"]}
        />
      </div>
    </Section>
  );
}
