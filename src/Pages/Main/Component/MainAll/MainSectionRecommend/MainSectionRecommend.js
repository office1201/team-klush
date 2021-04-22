import React, { Component } from 'react';

import './MainSectionRecommend.scss';

class MainSectionRecommend extends Component {
  constructor() {
    super();
    this.state = {
      recommendList: [],
      moveCarousel: 0,
    };
  }

  componentDidMount() {
    fetch('/data/recommendList.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendList: data.results,
        });
      });
  }

  goLeft = () => {
    const { moveCarousel, recommendList } = this.state;
    moveCarousel === 0
      ? this.setState({ moveCarousel: 0 })
      : this.setState({ moveCarousel: moveCarousel + 100 });
  };

  goRight = () => {
    const { moveCarousel, recommendList } = this.state;
    moveCarousel === 100 * (1 - recommendList.length)
      ? this.setState({ moveCarousel: 100 * (1 - recommendList.length) })
      : this.setState({ moveCarousel: moveCarousel - 100 });
  };

  render() {
    const { recommendList, moveCarousel } = this.state;

    return (
      <section className="MainSectionRecommend">
        <div className="recommendWrapper">
          <button className="backButton" onClick={this.goLeft}>
            <i class="fas fa-caret-left"></i>
          </button>
          <div className="recommendContainer">
            <h2>4월에 어울리는 향기</h2>
            <div className="recommendCarousel">
              {recommendList.map(recommend => {
                return (
                  <ul
                    className="recommendLists"
                    key={recommend.id}
                    style={{ transform: `translateX(${moveCarousel}%)` }}
                  >
                    <li>
                      <img
                        src={recommend.image_url}
                        alt="4월에 어울리는 향기 제품 이미지"
                      />
                      <h3>{recommend.name}</h3>
                      <p>{recommend.description}</p>
                      <p>{recommend.price}</p>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <button className="nextButton" onClick={this.goRight}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
      </section>
    );
  }
}

export default MainSectionRecommend;
