import SideBar from "./layout/SideBar";
import NewProject from "./layout/NewProject";
import NoProjectSelected from "./layout/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleSaveProject(project) {
    const newProject = { ...project, id: Math.random() };
    setProjectState((prevState) => {
      return { ...prevState, projects: [...prevState.projects, newProject] };
    });
  }

  let content;
  console.log(projectState);

  if (projectState.selectedProjectId === null) {
    content = <NewProject onSave={handleSaveProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="md:h-screen md:flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
