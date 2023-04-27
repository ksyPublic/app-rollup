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
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '하이패스',
    depth2: '확정대기',
    depth3: '하이패스 확정대기 목록 조회',
    depth4: 'hipass',
    path: './hipass/reservation-standby-list.html',
    name: 'reservation-standby-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '하이패스',
    depth2: '예약확정',
    depth3: '하이패스 예약확정 목록 조회',
    depth4: 'hipass',
    path: './hipass/reservation-before-list.html',
    name: 'reservation-before-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '하이패스',
    depth2: '관리중',
    depth3: '하이패스 관리중 목록 조회',
    depth4: 'hipass',
    path: './hipass/reservation-ing-list.html',
    name: 'reservation-ing-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '하이패스',
    depth2: '관리완료',
    depth3: '하이패스 관리완료 목록 조회',
    depth4: 'hipass',
    path: './hipass/reservation-complate-list.html',
    name: 'reservation-complate-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '하이패스',
    depth2: '예약취소',
    depth3: '하이패스 예약 취소 목록 조회',
    depth4: 'hipass',
    path: './hipass/reservation-cancel-list.html',
    name: 'reservation-cancel-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '하이패스',
    depth2: '',
    depth3: '하이패스 예약 상세 조회',
    depth4: 'hipass',
    path: './hipass/reservation-info.html',
    name: 'reservation-info.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '확정대기 / 예약확정 / 관리중 / 관리완료 / 예약취소',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '하이패스',
    depth2: '',
    depth3: '하이패스 예약 취소',
    depth4: 'hipass',
    path: './hipass/reservation-cancel.html',
    name: 'reservation-cancel.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '정산관리',
    depth2: '정산예정',
    depth3: '정산 예정 목록 조회',
    depth4: 'adjustment',
    path: './adjustment/adjustmant-wait-list.html',
    name: 'adjustmant-wait-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '정산관리',
    depth2: '정산완료',
    depth3: '정산 완료 목록 조회',
    depth4: 'adjustment',
    path: './adjustment/adjustment-complate-list.html',
    name: 'adjustment-complate-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '정산관리',
    depth2: '날짜별 매출 조회',
    depth3: '날짜별 매출 조회',
    depth4: 'adjustment',
    path: './adjustment/adjustment-daily-list.html',
    name: 'adjustment-daily-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '스탬프',
    depth2: '스탬프 적립하기',
    depth3: '스탬프 적립하기',
    depth4: 'stamp',
    path: './stamp/stamp-save.html',
    name: 'stamp-save.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '스탬프',
    depth2: '스탬프 적립현황',
    depth3: '스탬프 적립현황 목록',
    depth4: 'stamp',
    path: './stamp/stamp-issued-list.html',
    name: 'stamp-issued-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '제휴점 정보',
    depth2: '',
    depth3: '제휴점 상세 정보 조회',
    depth4: 'shop',
    path: './shop/shop-info.html',
    name: 'shop-info.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '각 항목 닫은 화면 / 각 항목 펼친 화면',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '제휴점 정보',
    depth2: '통화현황',
    depth3: '제휴점 통화 현황 목록 조회',
    depth4: 'shop',
    path: './shop/shop-call-list.html',
    name: 'shop-call-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '제휴점 정보',
    depth2: '접속현황',
    depth3: '제휴점 접속 현황 목록 조회',
    depth4: 'shop',
    path: './shop/shop-access-list.html',
    name: 'shop-access-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '제휴점 정보',
    depth2: '이메일 설정',
    depth3: '제휴점 이메일 주소 등록',
    depth4: 'shop',
    path: './shop/email-edit.html',
    name: 'email-edit.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '제휴점 정보',
    depth2: '비밀번호설정',
    depth3: '비밀번호 변경 등록',
    depth4: 'shop',
    path: './shop/password-change.html',
    name: 'password-change.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '설정',
    depth2: '',
    depth3: '제휴점 설정 메뉴 화면',
    depth4: 'setting',
    path: './setting/shop-setting.html',
    name: 'shop-setting.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '설정',
    depth2: '하이패스 예약관리',
    depth3: '하이패스 예약 관련 설정 화면',
    depth4: 'setting',
    path: './setting/reservation-item-edit.html',
    name: 'reservation-item-edit.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '설정',
    depth2: '영업시간/광고상태 설정',
    depth3: '제휴점 영업시간 및 광고상태 설정화면',
    depth4: 'setting',
    path: './setting/shop-open-time-edit.html',
    name: 'shop-open-time-edit.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '설정',
    depth2: '예약시간 제외설정',
    depth3: '하이패스 예약시간 제외 설정',
    depth4: 'setting',
    path: './setting/reservation-time-except-edit.html',
    name: 'reservation-time-except-edit.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '설정',
    depth2: '타임할인관리',
    depth3: '하이패스 타임할인 설정',
    depth4: 'setting',
    path: './setting/time-sale-edit.html',
    name: 'time-sale-edit.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '이용후기',
    depth2: '전체후기',
    depth3: '전체후기 목록 조회',
    depth4: 'review',
    path: './review/review-list.html',
    name: 'review-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '이용후기',
    depth2: '미답변',
    depth3: '미답변 후기 목록 조회',
    depth4: 'review',
    path: './review/review-list.html',
    name: 'review-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '공지사항',
    depth2: '',
    depth3: '공지사항 목록 조회',
    depth4: 'board',
    path: './board/notice-list.html',
    name: 'notice-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '자주묻는 질문',
    depth2: '',
    depth3: '자주묻는 질문 목록 조회',
    depth4: 'board',
    path: './board/faq-list.html',
    name: 'faq-list.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '로그인',
    depth4: 'account',
    path: './account/login.html',
    name: 'login.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '약관동의',
    depth4: 'account',
    path: './account/policy-agree.html',
    name: 'policy-agree.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '아이디 찾기',
    depth4: 'account',
    path: './account/shop-id-search.html',
    name: 'shop-id-search.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '비밀번호 찾기',
    depth4: 'account',
    path: './account/shop-pw-search.html',
    name: 'shop-pw-search.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '비밀번호 찾기 결과',
    depth4: 'account',
    path: './account/shop-pw-search-result.html',
    name: 'shop-pw-search-result.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '로그인',
    depth2: '',
    depth3: '비밀번호 찾기 결과',
    depth4: 'account',
    path: './account/shop-pw-search-result.html',
    name: 'shop-pw-search-result.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'popup',
    process: 'wait',
  },
  {
    depth1: '제휴문의',
    depth2: '제휴문의',
    depth3: '하이타이 제휴 혜택 소개 / 제휴문의 등록',
    depth4: 'info',
    path: './info/contact.html',
    name: 'contact.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '제휴문의',
    depth2: '제휴문의',
    depth3: '개인정보 수집 및 이용 동의',
    depth4: 'info',
    path: './info/private-agree.html',
    name: 'private-agree.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '광고절차',
    depth2: '광고절차',
    depth3: '하이타이 제휴 광고 절차 소개',
    depth4: 'info',
    path: './info/ad-flow.html',
    name: 'ad-flow.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
  {
    depth1: '광고절차',
    depth2: '광고노출역역',
    depth3: '광고노출 영역 소개',
    depth4: 'info',
    path: './info/ad-display-area.html',
    name: 'ad-display-area.html',
    worker: '김민준',
    stdate: '2023-05-02',
    endate: '2023-05-26',
    modify: '-',
    etc: '',
    type: 'page',
    process: 'wait',
  },
];