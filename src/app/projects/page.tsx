// import { projects } from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard";
// import { Metadata } from "next";
// import BackButton from "@/components/BackButton";

// export const metadata: Metadata = {
//   title: "Projects",
//   description:
//     "A collection of full-stack, React, Next.js, Node.js, and WordPress projects built by Arjun Singh.",
// };

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b]">
    

//       <div className="mx-auto max-w-[900px] px-6 py-24">
//         <h1 className="mb-16 text-3xl font-bold text-slate-100">
//           All Projects
//         </h1>

//         <div className="space-y-6">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of full-stack, React, Next.js, Node.js, and WordPress projects built by Arjun Singh.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b]">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0a192f]/80 backdrop-blur">
        <div className="mx-auto max-w-[900px] px-6 py-6">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-3xl font-bold text-slate-100">
              All Projects
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-[900px] px-6 py-16 space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}

