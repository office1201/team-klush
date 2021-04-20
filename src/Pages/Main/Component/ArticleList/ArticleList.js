import React, { Component } from 'react';

import '../ArticleList/ArticleList.scss';

class ArticleList extends Component {
  constructor() {
    super();
    this.state = {
      carouselId: 1,
    };
  }

  articleCarousel = id => {
    this.setState({ carouselId: id });
  };

  render() {
    const { carouselId } = this.state;
    return (
      <article className="ArticleList">
        <ul>
          {carouselId === 1 && (
            <li>
              <img
                src="https://pgnqdrjultom1827145.cdn.ntruss.com/img/f3/f2/f3f2cfe7c54249c9a146745ee8d9efd0471358684c1f9787f869b543948b91c3_v1.jpg"
                alt=""
              />
            </li>
          )}
          {carouselId === 2 && (
            <li>
              <img
                src="https://i.pinimg.com/originals/6a/61/3d/6a613dfd6704e156d86c1a1ddd937458.jpg"
                alt=""
              />
            </li>
          )}
          {carouselId === 3 && (
            <li>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c9347450181611.58dbeb2d7605d.jpg"
                alt=""
              />
            </li>
          )}
          {carouselId === 4 && (
            <li>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/62308a50181611.58c97a3189771.jpg"
                alt=""
              />
            </li>
          )}
          {carouselId === 5 && (
            <li>
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ed14e550181611.58c97a318d349.jpg"
                alt=""
              />
            </li>
          )}
        </ul>
        <ul className="buttonContainer">
          <li
            className={carouselId === 1 ? 'clicked' : null}
            onClick={() => this.articleCarousel(1)}
          ></li>
          <li
            className={carouselId === 2 ? 'clicked' : null}
            onClick={() => this.articleCarousel(2)}
          ></li>
          <li
            className={carouselId === 3 ? 'clicked' : null}
            onClick={() => this.articleCarousel(3)}
          ></li>
          <li
            className={carouselId === 4 ? 'clicked' : null}
            onClick={() => this.articleCarousel(4)}
          ></li>
          <li
            className={carouselId === 5 ? 'clicked' : null}
            onClick={() => this.articleCarousel(5)}
          ></li>
        </ul>
      </article>
    );
  }
}

export default ArticleList;
