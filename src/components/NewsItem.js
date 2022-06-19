import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
              display:'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0px'
            }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={imageUrl?imageUrl:"https://5.imimg.com/data5/UU/UG/IM/SELLER-15936758/news-paper-advertising-servicing-500x500.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} at {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
