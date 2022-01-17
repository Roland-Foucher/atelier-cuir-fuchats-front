import NewsArticles from './NewsArticles'
import '../../styles/News/News.css'
import { useEffect, useState } from 'react';

function News() {
    //connect to backend
    const [news, setnews] = useState(null);
    const [fetchError, setFetchError] = useState(true)

    useEffect(() => {
        async function getData() {
            const response = await fetch("http://localhost:3001/api/news")
            if (!response.ok) {
                console.log(response.status, response.statusText)

            }
            else {
                const data = await response.json()
                setnews(data);
                setFetchError(false)
            }
        }
        getData();
    }, []);

    return (
        <main className="acf-news-page">
            <h1 className="acf-news-title">Actualités</h1>

            {fetchError && (
                <h1>erreur de connexion au serveur</h1>
            )}

            {/* list of news to display  */}
            <ul className='acf-news-newsList'>
                {news && news.map(({ title, alert, comment, cover, id }) =>
                    <div key={id}>
                        <NewsArticles
                            title={title}
                            alert={alert}
                            comment={comment}
                            cover={cover}
                        />
                    </div>
                )}
            </ul>
        </main>
    )
}

export default News