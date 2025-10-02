import type { Film } from "../types";
import styled from "styled-components";

const FilmCard = styled.div`
  border: 1px solid #444;
  border-radius: 10px;
  padding: 15px;
  margin: 20px auto;
  max-width: 600px;
  background: antiquewhite;
    align-items: center;
`;

const FilmImage = styled.img`
    max-width: 400px;
    border-radius: 15px;
    margin: 0 auto 0 auto;
    display: block;
`

const FilmTitle = styled.h3`
  margin: 0;
  font-size: calc(6px + 1.2vw);
  color: olivedrab;
    text-align: center;
`;


const FilmInfo = styled.p`
  margin: 5px 0;
  font-size: calc(4px + 1.2vw);
    text-align: center;
    color: #242424;
`;


export default function FilmPreview({ film }: { film: Film }) {
    return (
        <div>
                <FilmCard key={film.id}>
                    <FilmImage src={film.image} alt={film.title} />
                    <FilmTitle><h3>{film.title}</h3></FilmTitle>
                    <FilmInfo><p>Year: {film.release_date}</p>
                    <p>Director: {film.director}</p>
                        <p>Running Time: {film.running_time}</p>
                        <p>Rotten Tomatoes Score: {film.rt_score}</p></FilmInfo>
                </FilmCard>
        </div>
    );
}
