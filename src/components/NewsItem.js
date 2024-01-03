import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl ? imageUrl : "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "85%", zIndex: "1"}}> {source} </span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p class="card-text"><small class="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
                <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem