import React, { Component } from 'react';
import './ProductInfo.scss';

class ProductInfo extends Component {
  render() {
    const { productData } = this.props;
    return (
      productData.product_image !== undefined && (
        <div className="ProductInfo">
          <div className="detailHeader">
            <p>솝</p>
            <p>{productData.product_name}</p>
            <p>Mermaids Tears</p>
          </div>
          <article className="innerTop">
            <img
              src={productData.product_image[0] || IMG_URL[0]}
              alt="제품 이미지"
            ></img>
            <div className="boxInner">
              <div class="review">
                <h2>
                  미리써본 후기<span>★★★★★</span>
                </h2>
                <p>
                  바다향이 물씬 풍기는 향을 좋아해요. 저는 입욕제를 사용할 때도
                  비슷한 계열의 향기를 선호하는데. 이 비누는 제 취향 저격! 푸른
                  바닷가에 간 것처럼 시원한 느낌을 주는 것도 놓칠 수 없는
                  매력입니다.
                </p>
                <span>by 새미</span>
              </div>
            </div>
          </article>
          <article className="middle">
            <div className="mTxt">
              <p>
                자연에서 얻은 신선한 원재료와 질좋은 에션셜 오일이 듬뿍 담긴 솝
                비누입니다. 촉촉함을 더 해주는 해초 성분과 틈사이에 박힌
                솔트들이 각질도 자연스럽게 제거해줍니다. 신선해!
              </p>
              <p> TIP! 비누를 사용한 뒤에는 서늘한 곳에 말려 보관해주세요!</p>
            </div>
            <div className="imgWrap">
              <img
                src={productData.product_image[1] || IMG_URL[1]}
                alt="제품이미지2"
              ></img>
            </div>
          </article>
          <article className="bottom">
            <img
              src={productData.product_image[2] || IMG_URL[2]}
              alt="제품 이미지"
            ></img>
            <div className="boxInner">
              <div class="article">
                <h2>아티클</h2>
                <h1>크러쉬는 앞으로도 깨버리겠습니다</h1>
                <button>자세히보기</button>
              </div>
            </div>
          </article>
        </div>
      )
    );
  }
}

export default ProductInfo;

const IMG_URL = {
  0: 'https://images.unsplash.com/photo-1588713029525-f95e7652926d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  1: 'https://images.unsplash.com/photo-1517999586990-2126f2b0c97d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  2: 'https://images.unsplash.com/photo-1588713029525-f95e7652926d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};
