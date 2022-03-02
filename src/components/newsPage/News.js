import NewsArticles from './NewsArticles'
import '../../styles/News/News.css'
import { useEffect, useState } from 'react';

function News({ serverURL }) {
    //connect to backend
    const [news, setnews] = useState(null);
    const [fetchError, setFetchError] = useState(false)

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(serverURL + "/news");
                const data = await response.json();
                setnews(data);
            } catch (error) {
                console.error(error)
                setFetchError(true)
            }
        }
        getData();
    }, [serverURL]);

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