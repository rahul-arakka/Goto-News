import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    
    constructor(){
        super();
        // console.log("I'm here");
        this.state = {
            articles : [],
            loading : false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7442b35d87d04e2bae55976a6dd97c66"
        let data = await fetch(url);
        let parsedDate = await data.json();
        console.log(parsedDate);
        this.setState({articles: parsedDate.articles})

    }

  render() {
    return (
      <div>
          <div className="container my-3">
              <h2>Top Headlines</h2>
              <div className="row my-3">
                {this.state.articles.map((element)=>{

                  return <div className="col md-4 my-3" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                  </div>
                })};
                 
              </div>
          </div>
          
      </div>
    )
  }
}
