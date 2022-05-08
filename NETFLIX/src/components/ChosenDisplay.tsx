import { useEffect, useState } from 'react';
import { SeriesInfo } from '../ModalModel';
import { Item, MovieList, Results } from '../Model';
import { MovieModel } from '../MovieModel';
import Tmdb from '../services/Tmdb';
import './ChosenDisplay.css';

type ChosenDisplayProps = {
  frontDisplay: React.Dispatch<React.SetStateAction<Results | undefined>>;
  modalInfo: SeriesInfo | MovieModel | undefined;
  similarList: Item | undefined;
  handleModal: (eachItem: Results) => Promise<void>;
};

export default ({
  frontDisplay,
  modalInfo,
  similarList,
  handleModal,
}: ChosenDisplayProps) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const element = document.getElementById('similarList');

  const scrollingTop = () => {
    let yPixel = element?.scrollTop;
    let scrollDown: number = yPixel !== undefined ? scrollY + yPixel : scrollY;

    console.log(yPixel);

    setScrollY(scrollDown);
  };
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
            {modalInfo !== undefined &&
            modalInfo.hasOwnProperty('original_name') ? (
              <div className="modal--section1-informations">
                <h4
                  style={{
                    display: 'flex',
                    alignSelf: 'center',
                    fontSize: '25px',
                  }}
                >
                  Detalhes:
                </h4>
                <div className="modal--section1-description">
                  <div className="modal--section1-image">
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${modalInfo.backdrop_path}`}
                      alt="backdrop"
                      style={{ width: '50%', borderRadius: '5px' }}
                    ></img>
                  </div>
                  <div className="modal--section1-title">
                    <strong>Título: </strong>
                    {modalInfo?.original_name}
                  </div>
                  <div className="modal--section1-overview">
                    <strong>Descrição: </strong>
                    {modalInfo.overview}
                  </div>
                </div>
              </div>
            ) : (
              modalInfo !== undefined && (
                <div className="modal--section1-informations">
                  <h4
                    style={{
                      display: 'flex',
                      alignSelf: 'center',
                      fontSize: '25px',
                    }}
                  >
                    Detalhes:
                  </h4>
                  <div className="modal--section1-description">
                    <div className="modal--section1-image">
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${modalInfo.backdrop_path}`}
                        alt="backdrop"
                        style={{ width: '50%', borderRadius: '5px' }}
                      ></img>
                    </div>
                    <div className="modal--section1-title">
                      <strong>Título: </strong>
                      {modalInfo?.original_title}
                    </div>
                    <div className="modal--section1-overview">
                      <strong>Descrição: </strong>
                      {modalInfo.overview}
                    </div>
                  </div>
                </div>
              )
            )}
          </section>
          <hr className="modal--division"></hr>
          <section className="modal--section2">
            <h4 style={{ fontSize: '25px' }}>Itens recomendados:</h4>
            <div id="similarList" className="modal--section2-similarList">
              {similarList &&
                similarList.results.map((eachItem, key) => (
                  <div key={key} className="movieRow--item">
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${eachItem.poster_path}`}
                      alt={eachItem.original_title}
                      onClick={e => {
                        e.preventDefault();
                        frontDisplay(eachItem);
                        handleModal(eachItem);
                      }}
                    ></img>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
