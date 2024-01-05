import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

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
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b91d583c777c4179a07bfc6492350e8d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: parsedData.articles,
      loading: false
    })
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b91d583c777c4179a07bfc6492350e8d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      totalResults: parsedData.totalResults,
      articles: this.state.articles.concat(parsedData.articles)
    })
  };

  render() {
    return (
      <>
        <h1 className='text-center' style={{ margin: "23px 0px" }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row" >
              {this.state.articles.map((element) => {
                return <div className="col-md-4 my-1" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) + "..." : ""}
                    description={element.description ? element.description.slice(0, 60) + "..." : ""}
                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News