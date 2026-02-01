// import { ProjectIdView } from "@/features/projects/components/project-id-view";

import { Id } from "../../../../convex/_generated/dataModel";

const ProjectIdPage = async ({params}: {params: Promise<{ projectId: string }>}) => {
  
    const { projectId } = await params;

    return <div>Project ID: {projectId}</div>;
}
 
export default ProjectIdPage;