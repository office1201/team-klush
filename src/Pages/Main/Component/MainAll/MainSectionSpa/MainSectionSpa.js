import React, { Component } from 'react';

import './MainSectionSpa.scss';

class MainSectionSpa extends Component {
  render() {
    return (
      <section className="MainSectionSpa">
        <div className="MainSectionSpaWrapper">
          <div>
            <h3>Wash your hands</h3>
            <p>
              향기, 음악, 단어 그리고 부드러운 손길은 마음과 영혼을 깨워줍니다.
            </p>
          </div>
          <div>
            <a href="">
              <img
                src="https://rawsugarliving.com/wp-content/uploads/2021/01/RS-BarSoap-Hover-Lemon-1280.gif"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSectionSpa;
