import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    // console.log("I'm here");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=7442b35d87d04e2bae55976a6dd97c66&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedDate = await data.json();
      console.log(parsedDate);
      this.setState({
      articles: parsedDate.articles,
      loading: false,
      page: this.state.page,
      totalResults: parsedDate.totalResults
     });
  }
   prevHandle = async()=>{
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=7442b35d87d04e2bae55976a6dd97c66&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    this.setState({ 
      articles: parsedDate.articles,
      loading: false,
      page: this.state.page -1,
      totalResults: parsedDate.totalResults
   });
    console.log('prev clicked');
  }
  nextHandle = async ()=>{
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=7442b35d87d04e2bae55976a6dd97c66&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    this.setState({ 
      articles: parsedDate.articles,
      loading: false,
      page: this.state.page+1,
      totalResults: parsedDate.totalResults
   });
    console.log('next clicked');
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center my-3">Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row my-3">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-3" key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                </div>
              );
            })}
            ;
          </div>
            <div className="d-flex justify-content-between">

          <button type="button" className="btn btn-dark" onClick={this.prevHandle} disabled={this.state.page<=1}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.nextHandle} disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>

            </div>
        </div>
      </div>
    );
  }
}
