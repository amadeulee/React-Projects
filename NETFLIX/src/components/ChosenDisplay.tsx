import { item, MovieList } from '../Model';
import './ChosenDisplay.css';

type ChosenDisplayProps = {
    chosenDisplay: item | undefined; 
  item: item;
  frontDisplay: React.Dispatch<React.SetStateAction<item | undefined>>;
};

export default ({ item, frontDisplay , chosenDisplay}: ChosenDisplayProps) => {
  return (
      {chosenDisplay && (
          <div></div>
      )}
  ) 
    
      {chosenDisplay && (
        <div>
          className="frontDisplay--outside"
          onClick={() => {
            frontDisplay(undefined);
          }}  
        >
          <div className="frontDisplay">Teste</div>
        </div>
  )
};
}