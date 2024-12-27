import SideBar from "./layout/SideBar";
import MainContent from "./layout/MainContent";
import ProjectsContextProvider from "./store/projects-context";

function App() {
  return (
    <main className="md:h-screen md:flex gap-8">
      <ProjectsContextProvider>
        <SideBar />
        <MainContent />
      </ProjectsContextProvider>
    </main>
  );
}

export default App;
