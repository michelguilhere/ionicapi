import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>É estudante?  -- <a target="_blank" rel="noopener noreferrer" href="https://virtual.unijui.edu.br/Portal/Modulos/login/?redirect=/Portal/Modulos/unijuiVirtual/#!15787">Portal do Aluno</a></p>
    </div>
  );
};

export default ExploreContainer;
