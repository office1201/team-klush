import React, { Component } from 'react';

import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import '../../Main/Component/MainSection3.scss';

class MainSection3 extends Component {
  render() {
    return (
      <section>
        <div className="main3Wrapper">
          <div>
            <h3>르네상스 스파 론칭</h3>
            <p>
              향기, 음악, 단어 그리고 부드러운 손길은 마음과 영혼을 깨워줍니다.
            </p>
          </div>
          <div>
            <a href="">
              <img
                src="https://images.unsplash.com/photo-1569256245300-00e97c6ed2d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSection3;
