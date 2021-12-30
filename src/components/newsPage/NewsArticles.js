
import '../../styles/News/NewsArticles.css'

function NewsArticles({title, alert, comment, cover}){
    return  <li className="acf-news-article">
                <div className='acf-news-article-left'>
                    <h3 className="acf-news-article-title">{title} <strong>{alert}</strong></h3>
                    <p className="acf-news-artilcle-comment">{comment}</p>
                </div>
                <div className='acf-news-article-right'>
                    <img src={cover} alt={title} className="acf-news-article-img"/>
                </div>
            </li>
}

export default NewsArticles