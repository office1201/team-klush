import React, { Component } from 'react';

import './MainSectionRecommend.scss';

class MainSectionRecommend extends Component {
  constructor() {
    super();
    this.state = {
      recommendList: [],
      currentIdx: 0,
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

  render() {
    const { recommendList } = this.state;
    return (
      <section className="MainSectionRecommend">
        <div className="recommendWrapper">
          <button className="backButton">
            <i class="fas fa-caret-left"></i>
          </button>
          <div className="recommendContainer">
            <h2>4월에 어울리는 향기</h2>
            <div className="recommendCarousel">
              {recommendList.map((recommend, idx) => {
                return (
                  <ul className="recommendLists" key={recommend.id}>
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
          <button className="nextButton" onClick={this.recommendCarousel}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>
      </section>
    );
  }
}

export default MainSectionRecommend;
