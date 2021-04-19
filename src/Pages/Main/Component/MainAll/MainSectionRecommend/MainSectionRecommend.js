import React, { Component } from 'react';

import './MainSectionRecommend.scss';

class MainSectionRecommend extends Component {
  constructor() {
    super();
    this.state = {
      recommendList: [],
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
    // console.log('data: ', this.state.recommendList);
  }

  render() {
    const { recommendList } = this.state;
    // console.log('data: ', this.state.recommendList);
    return (
      <section className="MainSectionRecommend">
        <div className="MainSectionRecommendWrapper">
          <h2>나만 알고싶은 향기</h2>
          <ul>
            {recommendList &&
              recommendList.map(recommend => {
                return (
                  <li key={recommend.id}>
                    <img
                      src={recommend.image_url}
                      alt="나만 알고싶은 향기 이미지"
                    />
                    <h3>{recommend.name}</h3>
                    {/* <p>{recommend.name}</p> */}
                    <p>{recommend.description}</p>
                    <p>{recommend.price} 원</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}

export default MainSectionRecommend;
