import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    category: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b91d583c777c4179a07bfc6492350e8d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page: this.state.page-1,
      loading: false
    })
  }

  async componentDidMount() { 
    this.updateNews();
   }

   handlePrevClick = async ()=> {
    this.setState({page: this.state.page -1})
    this.updateNews();
   }

   handleNextClick = async ()=> {
    this.setState({page: this.state.page +1})
    this.updateNews();
   }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: "23px 0px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row" >
          {!this.state.loading && this.state.articles.map((element)=> {
            return <div className="col-md-4 my-1" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) + "..." : ""} 
              description={element.description ? element.description.slice(0, 60) + "..." : ""} 
              imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source = {element.source.name} />
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