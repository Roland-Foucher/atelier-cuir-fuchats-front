
import '../../styles/News/NewsArticles.css'

// single news article config
function NewsArticles({ title, alert, comment, cover }) {
    return (
        <li className="acf-news-article">

            {/* left part */}
            <div className='acf-news-article-left'>
                <h3 className="acf-news-article-title">{title} <strong>{alert}</strong></h3>
                <p className="acf-news-artilcle-comment">{comment}</p>
            </div>

            {/* right part */}
            <div className='acf-news-article-right'>
                <img src={cover} alt={title} className="acf-news-article-img" />
            </div>
        </li>
    )
}

export default NewsArticles