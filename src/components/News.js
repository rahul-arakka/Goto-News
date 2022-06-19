import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    // console.log("I'm here");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e673ffb293964978a59d1376221f2b87&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    this.setState({
      articles:parsedDate.articles ,
      loading: false,
      totalResults: parsedDate.totalResults,
    });
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e673ffb293964978a59d1376221f2b87&page=${this.state.page+1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    this.setState({
      articles: this.state.articles.concat(parsedDate.articles),
      loading: false,
      // page: this.state.page,
      totalResults: parsedDate.totalResults,
    });
    console.log("fetched more");
  };
  //  prevHandle = async()=>{
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=e673ffb293964978a59d1376221f2b87&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedDate = await data.json();
  //   console.log(parsedDate);
  //   this.setState({
  //     articles: parsedDate.articles,
  //     loading: false,
  //     page: this.state.page -1,
  //     totalResults: parsedDate.totalResults
  //  });
  //   console.log('prev clicked');
  // }
  // nextHandle = async ()=>{
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=e673ffb293964978a59d1376221f2b87&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedDate = await data.json();
  //   console.log(parsedDate);
  //   this.setState({
  //     articles: parsedDate.articles,
  //     loading: false,
  //     page: this.state.page+1,
  //     totalResults: parsedDate.totalResults
  //  });
  //   console.log('next clicked');
  // }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center my-3">Top Headlines</h2>
          {/* {this.state.loading && <Spinner/>} */}
            <InfiniteScroll
              dataLength={this.state.articles.length}
              hasMore={this.state.articles.length !== this.state.totalResults}
              next={this.fetchMoreData}
              loader={<Spinner />}
            >

          <div className="container">
              <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={element.publishedAt}
                      source={element.source.name}
                      />
                  </div>
                );
              })}
              </div>

              
              </div>
            </InfiniteScroll>
          

          {/* <div className="d-flex justify-content-between">

          <button type="button" className="btn btn-dark" onClick={this.prevHandle} disabled={this.state.page<=1}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextHandle} disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>

            </div> */}
        </div>
      </div>
    );
  }
}
