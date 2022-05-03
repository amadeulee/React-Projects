import { useState } from 'react';
import { Item, MovieList, Results } from '../Model';
import Tmdb from '../services/Tmdb';
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
          <section className="modal--section1">
            <h4>Detalhes:</h4>
            <div className="modal--section1-informations">
              <div className="modal--section1-title"></div>
            </div>
          </section>
          <hr className="modal--division"></hr>
          <section className="modal--section2">
            <h4>Itens recomendados</h4>
          </section>
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
