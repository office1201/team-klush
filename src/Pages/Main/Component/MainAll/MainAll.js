import React, { Component } from 'react';

import MainSectionRecommend from '../MainAll/MainSectionRecommend/MainSectionRecommend';
import MainSectionEvent from '../MainAll/MainSectionEvent/MainSectionEvent';
import MainSectionSpa from '../MainAll/MainSectionSpa/MainSectionSpa';

import '../../../Main/Component/MainAll/MainAll.scss';

class MainSection extends Component {
  render() {
    return (
      <main className="MainSection">
        <MainSectionRecommend />
        <MainSectionEvent />
        <MainSectionSpa />
      </main>
    );
  }
}

export default MainSection;
