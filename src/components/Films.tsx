import { useEffect, useState } from "react";
import FilmPreview from "../components/FilmPreview.tsx";
import type { Film } from "../types";

export default function Films() {
    const [data, setData] = useState<Film[]>([]);

    useEffect(() => {
        async function fetchData() {
            const rawData = await fetch("https://ghibliapi.vercel.app/films");
            const actualData: Film[] = await rawData.json();
            setData(actualData);
        }

        fetchData()
            .then(() => console.log("Everything is good"))
            .catch((e) => console.log("This error occurred: " + e));
    }, [data.length]);

    return (
        <div>
            {data.map((film) => (
                <FilmPreview key={film.id} film={film}/>
            ))}

        </div>
    );
}