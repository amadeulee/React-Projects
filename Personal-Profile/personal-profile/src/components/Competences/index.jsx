import './styles.css';
import ClearIcon from '@mui/icons-material/Clear';

const Competences = ({
  competence,
  competenceArray,
  setCompetences,
} = props) => {
  return (
    <div style={{ display: 'flex' }} className="competence">
      {competence}
      <ClearIcon
        className="clearIcon"
        onClick={() => {
          setCompetences(competenceArray.filter(comp => comp !== competence));
        }}
      />
    </div>
  );
};

export default Competences;
