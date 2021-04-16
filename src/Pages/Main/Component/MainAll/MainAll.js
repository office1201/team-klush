import React, { Component } from 'react';

import MainSection1 from '../MainAll/MainSection1/MainSection1';
import MainSection2 from '../MainAll/MainSection2/MainSection2';
import MainSection3 from '../MainAll/MainSection3/MainSection3';

import '../../../Main/Component/MainAll/MainAll.scss';

class MainSection extends Component {
  render() {
    return (
      <main className="MainSection">
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
      </main>
    );
  }
}

export default MainSection;
