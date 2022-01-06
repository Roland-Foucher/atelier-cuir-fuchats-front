import { news } from '../../datas/news'
import NewsArticles from './NewsArticles'
import '../../styles/News/News.css'

function News() {
    return (
        <main className="acf-news-page">
            <h1 className="acf-news-title">Actualités</h1>
            
            {/* list of news to display  */}
            <ul className='acf-news-newsList'>
                {news.map(({ title, alert, comment, cover, id }) =>
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