import React, { createContext, useState } from "react";

export const ProjectsContext = createContext({
  selectedProjectId: "ProjectsContext",
  //startAddProject: () => {},
  projects: [],
});

export default function ProjectsContextProvider({ children }) {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  function handleSaveProject(project) {
    const newProject = { ...project, id: Math.random() };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const ctxValue = {
    handleStartAddProject: handleStartAddProject,
    handleDeleteProject: handleDeleteProject,
    handleCancelAddProject: handleCancelAddProject,
    handleSaveProject: handleSaveProject,
    handleSelectProject: handleSelectProject,
    selectedProjectId: projectState.selectedProjectId,
    selectedProject: selectedProject,
    projects: projectState.projects,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
