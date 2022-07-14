import { useEffect, useState } from 'react';
import Competences from '../components/Competences';
import AddIcon from '@mui/icons-material/Add';

import './styles.css';
import Comments from '../components/Comments';
import { useFetch } from '../hooks/useFetch';
import { usePost } from '../hooks/usePost';
function App() {
  const [competences, setCompetences] = useState([
    'C',
    'Java',
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'PostGre',
    'Node',
  ]);
  const [competence, setCompetence] = useState('');
  const [comment, setComment] = useState({ name: '', time: '', comment: '' });
  const [response, setResponse] = useState(null);

  const { data: repositories, isFetching: loading } = useFetch(
    'https://api.github.com/users/amadeulee'
  );

  const { data: comments } = useFetch('http://localhost:5000/');

  function postComment(body) {
    usePost(body);
  }

  console.log(comment);
  return (
    <div>
      {loading ? (
        <p>Carregando</p>
      ) : (
        repositories && (
          <div>
            <header className="header">
              <main>
                <div className="header-section">
                  <section className="section-profile">
                    <div className="profile-informations">
                      <img src={repositories.avatar_url} alt="Foto de Perfil" />
                      <div className="profile-description">
                        <strong style={{ fontSize: '2rem' }}>
                          Nome: {repositories.name}
                        </strong>

                        <a href={repositories.html_url} target="_blank">
                          <strong>Meu repositório GitHub</strong>
                        </a>
                        <strong>Universidade: {repositories.company}</strong>
                        <strong>Localização: {repositories.location}</strong>
                      </div>
                    </div>
                    <div className="profile-competences">
                      <h3>Habilidades:</h3>
                      {competences.map(competence => (
                        <Competences
                          competence={competence}
                          competenceArray={competences}
                          setCompetences={setCompetences}
                          key={Math.random()}
                        />
                      ))}
                      <div className="plus-competence">
                        <input
                          type="text"
                          placeholder="Adicionar"
                          className="competence-input"
                          value={competence}
                          onChange={e => {
                            setCompetence(e.target.value);
                          }}
                        />
                        <AddIcon
                          style={{
                            border: '1px solid #000000',
                            cursor: 'pointer',
                            marginTop: '10px',
                          }}
                          onClick={() => {
                            if (
                              competence &&
                              !competences.includes(competence)
                            ) {
                              setCompetences([...competences, competence]);
                              setCompetence('');
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* <hr /> */}
                  </section>
                  <hr className="section-division" />
                  <section className="section-comments">
                    {comments &&
                      comments?.users?.map(user => <div>{user.name}</div>)}

                    <form action="">
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={comment.name}
                        onChange={e => {
                          setComment({ ...comment, name: e.target.value });
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Digite horario"
                        value={comment.time}
                        onChange={e => {
                          setComment({ ...comment, time: e.target.value });
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Digite o comentario"
                        value={comment.comment}
                        onChange={e => {
                          setComment({ ...comment, comment: e.target.value });
                        }}
                      />
                      <button
                        type="submit"
                        onClick={e => {
                          e.preventDefault();
                          postComment({
                            name: 'arthur',
                            time: '12',
                            comment: 'assad',
                          });
                        }}
                      >
                        Enter
                      </button>
                    </form>
                    {response && <p>{response}</p>}
                  </section>
                </div>
              </main>
            </header>
          </div>
        )
      )}
    </div>
  );
}

export default App;
