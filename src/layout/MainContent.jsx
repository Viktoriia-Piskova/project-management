import React, { useContext } from "react";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProject";
import { ProjectsContext } from "../store/projects-context";

const MainContent = () => {
  const { selectedProjectId } = useContext(ProjectsContext);
  let content = <SelectedProject />;

  if (selectedProjectId === undefined) {
    content = <NewProject />;
  } else if (selectedProjectId === null) {
    content = <NoProjectSelected />;
  }
  return <>{content}</>;
};

export default MainContent;
