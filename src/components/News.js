import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() { 
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b91d583c777c4179a07bfc6492350e8d&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      totalResults: parsedData.totalResults
    })
    
   }

   handlePrevClick = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b91d583c777c4179a07bfc6492350e8d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page: this.state.page-1
    })
   }

   handleNextClick = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b91d583c777c4179a07bfc6492350e8d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page: this.state.page+1
    })
   }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        <div className="row" >
          {this.state.articles.map((element)=> {
            return <div className="col-md-3 my-1" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) + "..." : ""} 
              description={element.description ? element.description.slice(0, 60) + "..." : ""} 
              imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&#8592; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &#8594;</button>
        </div>
      </div>
    )
  }
}

export default News