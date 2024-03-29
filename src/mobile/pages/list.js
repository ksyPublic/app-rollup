// 예정 : wait
// 진행 : ing
// 검수요청 : check
// 삭제 : del
var list = [
  {
    depth1: '홈',
    depth2: '',
    depth3: '메인화면',
    depth4: 'home',
    path: './home/index.html',
    name: 'index.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '홈',
    depth2: '',
    depth3: '회사정보 확장(Footer)',
    depth4: 'home',
    path: './home/index.html',
    name: 'index.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '홈',
    depth2: '',
    depth3: '스크롤 헤더',
    depth4: 'home',
    path: './home/index.html',
    name: 'index.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '홈',
    depth2: '',
    depth3: '하단 레이어 배너',
    depth4: 'home',
    path: './home/footer-banner.html',
    name: 'footer-banner.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'wait',
  },
  {
    depth1: '홈',
    depth2: '',
    depth3: '하이타이 메뉴',
    depth4: 'home',
    path: './home/category.html',
    name: 'category.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '지역',
    depth2: '지역별',
    depth3: '지역별 선택 화면시(시도/구군)',
    depth4: 'region',
    path: './region/sido-gugun.html',
    name: 'sido-gugun.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '지역',
    depth2: '역주변',
    depth3: '역주변 선택 화면(호선/지하철역)',
    depth4: 'region',
    // path: './region/line-subway.html',
    // name: 'line-subway.html',
    path: './region/sido-gugun.html',
    name: 'sido-gugun.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '지역',
    depth2: '',
    depth3: '지역/역주변 선택 결과 제휴점 목록',
    depth4: 'region',
    path: './region/shop-list.html',
    name: 'shop-list.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내주변',
    depth2: '지도보기',
    depth3: '지도보기 내주변 제휴점 목록 조회',
    depth4: 'region',
    path: './region/map-shop-list.html',
    name: 'map-shop-list.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내주변',
    depth2: '목록보기',
    depth3: '목록보기 내주변 제휴점 목록 조회',
    depth4: 'region',
    path: './region/myarea-shop-list.html',
    name: 'myarea-shop-list.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내주변',
    depth2: '',
    depth3: '내위치 지정',
    depth4: 'region',
    path: './region/my-spot-sleect.html',
    name: 'my-spot-sleect.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점',
    depth3: '지도선택팝업',
    depth4: 'shop',
    path: './shop/map_select.html',
    name: 'map_select.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '제휴점 정보 상세 조회 탭',
    depth4: 'shop',
    path: './shop/shop-info.html',
    name: 'shop-info.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '제휴점 정보 공유하기',
    depth4: 'shop',
    path: './shop/info-share.html',
    name: 'info-share.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '이용후기 목록 조회 탭',
    depth4: 'shop',
    path: './shop/review-list.html',
    name: 'review-list.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '이용후기 상세 조회',
    depth4: 'shop',
    path: './shop/review-detail.html',
    name: 'review-detail.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '이용후기 작성 안내 화면',
    depth4: 'shop',
    path: './shop/review-confirm.html',
    name: 'review-confirm.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '이용후기 등록',
    depth4: 'shop',
    path: './shop/review-write.html',
    name: 'review-write.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '이용후기 신고 팝업',
    depth4: 'shop',
    path: './shop/review-report.html',
    name: 'review-report.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '할인쿠폰 다운로드 이벤트',
    depth4: 'shop',
    path: './shop/sale-coupon-event.html',
    name: 'sale-coupon-event.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '이용후기 이벤트',
    depth4: 'shop',
    path: './shop/best-review-event.html',
    name: 'best-review-event.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '제휴점 상세',
    depth3: '스탬프 적립',
    depth4: 'shop',
    path: './shop/stamp.html',
    name: 'stamp.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '검색',
    depth3: '메인 검색 화면',
    depth4: 'search',
    path: './search/default.html',
    name: 'default.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '검색',
    depth3: '빠른검색 결과',
    depth4: 'search',
    path: './search/quick-result.html',
    name: 'quick-result.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '검색',
    depth3: '필터 검색',
    depth4: 'search',
    path: './search/shop-filter.html',
    name: 'shop-filter.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '검색',
    depth3: '주소검색',
    depth4: 'search',
    path: './search/shop-address.html',
    name: 'shop-address.html',
    worker: '이은지',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '하이패스',
    depth3: '하이패스 예약',
    depth4: 'hipass',
    path: './hipass/reservation.html',
    name: 'reservation.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '하이패스',
    depth3: '하이패스 결제',
    depth4: 'hipass',
    path: './hipass/payment.html',
    name: 'payment.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '하이패스',
    depth3: '포인트 사용',
    depth4: 'hipass',
    path: './hipass/use-point.html',
    name: 'use-point.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '하이패스',
    depth3: '할인쿠폰 사용',
    depth4: 'hipass',
    path: './hipass/use-coupon.html',
    name: 'use-coupon.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '',
    depth2: '하이패스',
    depth3: '하이패스 결제 결과 확인',
    depth4: 'hipass',
    path: './hipass/payment-result.html',
    name: 'payment-result.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 예약',
    depth2: '',
    depth3: '예약 진행중 예약 목록 탭',
    depth4: 'hipass',
    path: './hipass/my-reservation.html',
    name: 'my-reservation.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 예약',
    depth2: '',
    depth3: '과거 예약 목록 탭',
    depth4: 'hipass',
    path: './hipass/past-reservation.html',
    name: 'past-reservation.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 예약',
    depth2: '',
    depth3: '예약 상세 조회',
    depth4: 'hipass',
    path: './hipass/reservation-info.html',
    name: 'reservation-info.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 예약',
    depth2: '',
    depth3: '예약취소',
    depth4: 'hipass',
    path: './hipass/reservation-cancel.html',
    name: 'reservation-cancel.html',
    worker: '김세영',
    stdate: '2023-04-19',
    endate: '2023-04-21',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '',
    depth3: '마이 페이지 조회',
    depth4: 'user',
    path: './user/my-page.html',
    name: 'my-page.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '알림',
    depth3: '푸쉬 알림 목록 조회',
    depth4: 'user',
    path: './user/push-alram-list.html',
    name: 'push-alram-list.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '설정',
    depth3: '앱 기본 설정',
    depth4: 'user',
    path: './user/setting.html',
    name: 'setting.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '설정',
    depth3: '푸쉬 알림 설정',
    depth4: 'user',
    path: './user/alram-setting.html',
    name: 'alram-setting.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 정보',
    depth3: '내 정보 수정',
    depth4: 'user',
    path: './user/my-info-edit.html',
    name: 'my-info-edit.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 정보',
    depth3: '프로필 이미지 선택',
    depth4: 'user',
    path: './user/profile-image-edit.html',
    name: 'profile-image-edit.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 정보',
    depth3: '회원탈퇴 하기',
    depth4: 'user',
    path: './user/join-out.html',
    name: 'join-out.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 정보',
    depth3: '로그아웃',
    depth4: 'user',
    path: './user/logout-complate.html',
    name: 'logout-complate.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 포인트',
    depth3: '포인트 적립/사용 목록 조회',
    depth4: 'user',
    path: './user/point-list.html',
    name: 'point-list.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 포인트',
    depth3: '포인트 적립안내',
    depth4: 'user',
    path: './user/point-policy.html',
    name: 'point-policy.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 포인트',
    depth3: '포인트 검색 필터',
    depth4: 'user',
    path: './user/point-filter.html',
    name: 'point-filter.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 포인트',
    depth3: '포인트 사용 상품 목록 조회',
    depth4: 'user',
    path: './user/point-product-list.html',
    name: 'point-product-list.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 포인트',
    depth3: '포인트 사용하기',
    depth4: 'user',
    path: './user/point-use.html',
    name: 'point-use.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 포인트',
    depth3: '개인정보 제3자 제공 동의 안내',
    depth4: 'user',
    path: './user/privacy-agree.html',
    name: 'privacy-agree.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 포인트',
    depth3: '포인트 상품 신청 현황',
    depth4: 'user',
    path: './user/point-user-giftcon-list.html',
    name: 'point-user-giftcon-list.html',
    worker: '김세영',
    stdate: '2023-04-24',
    endate: '2023-04-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 쿠폰',
    depth3: '할인쿠폰 목록 조회 탭',
    depth4: 'user',
    path: './user/sale-coupon-list.html',
    name: 'sale-coupon-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 쿠폰',
    depth3: '무료쿠폰 목록 조회 탭',
    depth4: 'user',
    path: './user/free-coupon-list.html',
    name: 'free-coupon-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 쿠폰',
    depth3: '할인쿠폰 사용 하기',
    depth4: 'user',
    path: './user/sale-coupon-use.html',
    name: 'sale-coupon-use.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 쿠폰',
    depth3: '무료쿠폰 사용 하기',
    depth4: 'user',
    path: './user/free-coupon-use.html',
    name: 'free-coupon-use.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 쿠폰',
    depth3: '쿠폰 사용 안내',
    depth4: 'user',
    path: './user/coupon-use-guide.html',
    name: 'coupon-use-guide.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '이벤트',
    depth3: '이벤트 목록',
    depth4: 'user',
    path: './user/event-list.html',
    name: 'event-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '이벤트',
    depth3: '이벤트 상세 조회',
    depth4: 'user',
    path: './user/event-detail.html',
    name: 'event-detail.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 제휴점',
    depth3: '좋아요 제휴점',
    depth4: 'user',
    path: './user/like-shop-list.html',
    name: 'like-shop-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 제휴점',
    depth3: '최근 본 제휴점',
    depth4: 'user',
    path: './user/watch-shop-list.html',
    name: 'watch-shop-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 스탬프',
    depth3: '스탬프 목록 조회',
    depth4: 'user',
    path: './user/stamp-list.html',
    name: 'stamp-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '내 스탬프',
    depth3: '스탬프 상세 조회',
    depth4: 'user',
    path: './user/stamp-info.html',
    name: 'stamp-info.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '나의 이용후기',
    depth3: '내가 작성한 이용후기 목록 조회',
    depth4: 'user',
    path: './user/my-review-list.html',
    name: 'my-review-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '친구초대',
    depth3: '친구초대 소개 화면',
    depth4: 'user',
    path: './user/friend-invite.html',
    name: 'friend-invite.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '친구초대',
    depth3: '친구초대 코드 입력 하기',
    depth4: 'user',
    path: './user/friend-invite-code.html',
    name: 'friend-invite-code.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '공지사항',
    depth3: '공지사항 목록 조회',
    depth4: 'board',
    path: './board/notice-list.html',
    name: 'notice-list.html',
    worker: '김세영',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '공지사항',
    depth3: '공지사항 상세 조회',
    depth4: 'board',
    path: './board/notice-detail.html',
    name: 'notice-detail.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '이용안내(FAQ)',
    depth3: '이용안내 목록 조회',
    depth4: 'board',
    path: './board/faq-list.html',
    name: 'faq-list.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '약관 및 정책',
    depth3: '',
    depth4: 'board',
    path: './board/policy.html',
    name: 'policy.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '1:1 문의',
    depth3: '1:1 문의 목록 조회',
    depth4: 'board',
    path: './board/qna-list.html',
    name: 'qna-list.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '내 정보',
    depth2: '1:1 문의',
    depth3: '1:1 문의 등록',
    depth4: 'board',
    path: './board/qna-write.html',
    name: 'qna-write.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '사용자 로그인',
    depth4: 'account',
    path: './account/login.html',
    name: 'login.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '이메일 로그인',
    depth4: 'account',
    path: './account/email-login.html',
    name: 'email-login.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '아이디 찾기(휴대전화 번호 인증)',
    depth4: 'account',
    path: './account/userid-search.html',
    name: 'userid-search.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '아이디 찾기 결과',
    depth4: 'account',
    path: './account/userid-search-result.html',
    name: 'userid-search-result.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '아이디 찾기 결과 없음',
    depth4: 'account',
    path: './account/userid-search-nodata.html',
    name: 'userid-search-nodata.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '비밀번호 찾기(이메일 주소입력)',
    depth4: 'account',
    path: './account/password-search.html',
    name: 'password-search.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '비밀번호 찾기 결과 안내 팝업',
    depth4: 'account',
    path: './account/password-search-result.html',
    name: 'password-search-result.html',
    worker: '이은지',
    stdate: '2023-04-24',
    endate: '',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'check',
  },
  {
    depth1: '회원가입',
    depth2: '',
    depth3: '이용약관동의',
    depth4: 'account',
    path: './account/policy-agree.html',
    name: 'policy-agree.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '회원가입',
    depth2: '',
    depth3: '휴대폰인증하기',
    depth4: 'account',
    path: './account/phoneno-certification.html',
    name: 'phoneno-certification.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '회원가입',
    depth2: '',
    depth3: '회원정보입력',
    depth4: 'account',
    path: './account/join-info-write.html',
    name: 'join-info-write.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
  {
    depth1: '회원가입',
    depth2: '',
    depth3: '회원가입 완료 안내',
    depth4: 'account',
    path: './account/join-complate.html',
    name: 'join-complate.html',
    worker: '이은지',
    stdate: '2023-05-02',
    endate: '',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'check',
  },
];
