import { Item, MovieList, Results } from '../Model';
import './ChosenDisplay.css';

type ChosenDisplayProps = {
  frontDisplay: React.Dispatch<React.SetStateAction<Results | undefined>>;
};

export default ({ frontDisplay }: ChosenDisplayProps) => {
  return (
    <div className="modal">
      <div
        className="frontDisplay--outside"
        onClick={() => {
          frontDisplay(undefined);
        }}
      ></div>

      <div className="frontDisplay">
        <button
          type="button"
          className="button--close"
          onClick={() => {
            frontDisplay(undefined);
          }}
        >
          x
        </button>
        <div className="modal--section">
          <section className="modal--section1">Parte 1asdasdasdasdadas</section>
          <section className="modal--section2">Parte 2</section>
        </div>
      </div>
    </div>
  );
};

{
  /* <div>
          <div
            className="frontDisplay--outside"
            onClick={() => {
              setChoseDisplay(undefined);
            }}
          ></div>
          <div className="frontDisplay">Teste</div>
        </div> */
}
