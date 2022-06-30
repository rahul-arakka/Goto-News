import React, {useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  

  const updateNews = async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    setArticles(parsedDate.articles)
    setLoading(false)
    setTotalResults(parsedDate.totalResults)
    
  }

  useEffect(()=>{
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    // updateNews();
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e673ffb293964978a59d1376221f2b87&page=${page+1}&pageSize=${props.pageSize}&category=${props.category}`;
    setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    setArticles(articles.concat(parsedDate.articles))
    setLoading(false)
    setTotalResults(parsedDate.totalResults)
    
    // console.log("fetched more");
  };
  //  prevHandle = async()=>{
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=e673ffb293964978a59d1376221f2b87&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
  //   setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedDate = await data.json();
  //   console.log(parsedDate);
  //   setState({
  //     articles: parsedDate.articles,
  //     loading: false,
  //     page: page -1,
  //     totalResults: parsedDate.totalResults
  //  });
  //   console.log('prev clicked');
  // }
  // nextHandle = async ()=>{
  //   let url =
  //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=e673ffb293964978a59d1376221f2b87&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
  //   setState({loading: true})
  //   let data = await fetch(url);
  //   let parsedDate = await data.json();
  //   console.log(parsedDate);
  //   setState({
  //     articles: parsedDate.articles,
  //     loading: false,
  //     page: page+1,
  //     totalResults: parsedDate.totalResults
  //  });
  //   console.log('next clicked');
  // }

    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center my-3">Top Headlines</h2>
          {/* {loading && <Spinner/>} */}
            <InfiniteScroll
              dataLength={articles.length}
              hasMore={articles.length !== totalResults}
              next={fetchMoreData}
              loader={<Spinner />}
            >

          <div className="container">
              <div className="row">
              {articles.map((element) => {
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

          <button type="button" className="btn btn-dark" onClick={prevHandle} disabled={page<=1}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={nextHandle} disabled={page >= Math.ceil(totalResults/props.pageSize)}>Next &rarr;</button>

            </div> */}
        </div>
      </div>
    );
  
}
export default News;
