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

  autoCarousel = () => {
    let counter = 1;
    setInterval(() => {
      counter++;
      if (counter > 5) {
        counter = 1;
      }
      this.setState({
        carouselId: counter,
      });
    }, 3000);
  };

  componentDidMount() {
    this.autoCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.autoCarousel);
  }

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
                src="http://res.cloudinary.com/lush/image/upload/c_scale,h_628,w_1200/v1536069458/showcase-2018/showcase-logo_pink.png"
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
