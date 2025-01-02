import React, { useContext } from "react";
import NewProject from "./NewProject";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProject";
import { ProjectsContext } from "../store/projects-context";

const MainContent = () => {
  const { selectedProjectId } = useContext(ProjectsContext);
  let content = <SelectedProject />;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  }
  return <section className="pb-8 md:h-screen overflow-y-auto w-full">{content}</section>;
};

export default MainContent;
