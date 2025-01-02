import React, { createContext, useState } from "react";

export const ProjectsContext = createContext({
  selectedProjectId: "ProjectsContext",
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
    const newProject = { ...project, id: Math.random(), tasks: [] };
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

  const selectedProjectTasks = selectedProject?.tasks;

  function handleAddTask(task) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (prevState.selectedProjectId === project.id) {
          return {
            ...project,
            tasks: [...project.tasks, { text: task, id: Math.random() }],
          };
        }
        return {
          ...project,
        };
      });
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (prevState.selectedProjectId === project.id) {
          const filteredtasks = project.tasks.filter(
            (task) => task.id !== taskId
          );
          return {
            ...project,
            tasks: filteredtasks,
          };
        }
        return {
          ...project,
        };
      });
      return {
        ...prevState,
        projects: updatedProjects,
      };
    });
  }

  const ctxValue = {
    handleStartAddProject,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
    handleCancelAddProject,
    handleSaveProject,
    handleSelectProject,
    selectedProjectId: projectState.selectedProjectId,
    selectedProject,
    projects: projectState.projects,
    selectedProjectTasks,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
