import React, { Component } from 'react';

import MainSection1 from './MainSection1';
import MainSection2 from './MainSection2';
import MainSection3 from './MainSection3';

import '../../../Styles/common.scss';
import '../../../Styles/reset.scss';
import '../../Main/Component/MainAll.scss';

class MainSection extends Component {
  render() {
    return (
      <main>
        <MainSection1 />
        {/* <section>
            <h2></h2>
            <h3></h3>
            <p></p>
            <img src="" alt="" />
          </section> */}
        <MainSection2 />
        <MainSection3 />
      </main>
    );
  }
}

export default MainSection;
