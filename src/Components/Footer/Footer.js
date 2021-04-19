import React, { Component } from 'react';

import '../Footer/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <section className="footerImages">
          <div>
            <img
              src="http://img.lush.co.kr/images/core/footer-icons.svg"
              alt=""
            />
          </div>
        </section>
        <section className="footerMain">
          <div className="footerLog">
            <span>KLUSH</span>
            <div className="snsLink">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="footerSubscribe">
            <form>
              <input type="text" placeholder="이메일 주소를 입력해 주세요." />
              <button>구독하기</button>
            </form>
            <p>
              매주 금요일 오후, 구독자님들을 위한 제품과 브랜드 이야기를
              전해드립니다. 구독은 언제든지 해지하실 수 없습니다. 😛
            </p>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
