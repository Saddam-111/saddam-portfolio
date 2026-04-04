import { TerminalModal } from "../Common/TerminalComponents";

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <TerminalModal
      project={project}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

export default ProjectModal;
