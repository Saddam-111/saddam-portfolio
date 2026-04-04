import { TerminalFilter } from "../Common/TerminalComponents";

const ProjectFilters = ({ categories, onFilter }) => {
  return (
    <TerminalFilter 
      categories={categories} 
      onFilter={onFilter} 
      activeFilter="All"
    />
  );
};

export default ProjectFilters;
