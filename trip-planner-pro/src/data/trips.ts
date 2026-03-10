export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  category: "sightseeing" | "food" | "transport" | "hotel" | "shopping" | "activity";
  location?: string;
  images?: string[];
  videoUrl?: string;
  duration?: string;
  link?: string;
  tips?: string[];
  price?: string;
}

export interface DayPlan {
  day: number;
  date: string;
  label: string;
  activities: Activity[];
}

export interface TripPlan {
  id: string;
  title: string;
  destination: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  days: DayPlan[];
}

export const tripsData: TripPlan[] = [
  {
    id: "taiwan-trip",
    title: "台北 2박 3일",
    destination: "타이베이, 대만",
    coverImage: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80",
    startDate: "2026-04-17",
    endDate: "2026-04-19",
    days: [
      {
        day: 1,
        date: "2026-04-17",
        label: "도착 & 다다오청/닝샤",
        activities: [
          {
            id: "t1-1",
            time: "13:35",
            title: "타오위안 공항 도착",
            description: "입국 심사 후 공항 MRT 탑승 → 타이베이 메인역 (약 35분). 이지카드 구매 필수.",
            category: "transport",
            duration: "2시간 30분",
            location: "타오위안 국제공항",
            link: "https://maps.app.goo.gl/7kRFNsXvJyVZkUYr5",
            tips: [
              "공항 MRT 급행(Express) 탑승 — 보라색 표시",
              "이지카드(悠遊卡)는 공항 편의점에서 구매 가능",
              "메인역에서 숙소까지 택시 약 5분",
            ],
            price: "NT$160",
            images: [
              "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=600&q=80",
            ],
          },
          {
            id: "t1-2",
            time: "16:00",
            title: "호텔 체크인",
            description: "타이베이 메인역 근처 숙소. 짐 정리 후 가볍게 출발 준비.",
            category: "hotel",
            duration: "30분",
            location: "타이베이 메인역 근처 숙소",
            link: "https://maps.app.goo.gl/3QF8GN3Y47JdJwbx5",
          },
          {
            id: "t1-3",
            time: "16:30",
            title: "디화제(迪化街) 산책",
            description: "청나라 시대 붉은 벽돌 건물이 남아있는 타이베이 최고(最古) 거리. 차, 말린 과일, 한약재 상점이 즐비.",
            category: "sightseeing",
            duration: "1시간 10분",
            location: "디화제(迪化街)",
            link: "https://maps.app.goo.gl/ULk1eRRbE1SLNpJz8",
            tips: [
              "바로크 양식 건축물 감상 — 특히 永樂市場 건물",
              "말린 망고, 파인애플 케이크 시식 가능한 가게 많음",
              "사진 찍기 좋은 거리: 민성서로(民生西路) 교차로 부근",
            ],
            images: [
              "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
            ],
          },
          {
            id: "t1-4",
            time: "17:40",
            title: "다다오청 간식 + 찻집",
            description: "디화제 근처 간식(땅콩 아이스크림 롤 등) 맛보고, 다다오청 찻집에서 우롱차 한 잔. 차 무역으로 유명했던 구역.",
            category: "food",
            duration: "40분",
            location: "다다오청(大稻埕)",
            link: "https://maps.app.goo.gl/3uSyRkXwvCkLR7Wv5",
            tips: [
              "ASW Tea House — 분위기 좋은 찻집 추천",
              "땅콩 아이스크림 롤: 얇은 밀전병에 땅콩가루+아이스크림",
            ],
            price: "NT$100~200",
            images: [
              "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80",
            ],
          },
          {
            id: "t1-5",
            time: "18:20",
            title: "PIER 5 부두 노을",
            description: "단수이강(淡水河) 변 부두에서 노을 감상. 평일 16:00~22:00 운영. 컨디션에 따라 스킵 가능.",
            category: "sightseeing",
            duration: "30분",
            location: "大稻埕碼頭 PIER 5",
            link: "https://maps.app.goo.gl/5yWJvF6q8r7sQVYY8",
            tips: [
              "일몰 시간대(18:00~18:30)가 가장 예쁨",
              "강변에 포장마차 푸드코트도 있음",
              "피곤하면 스킵해도 OK — 닝샤 야시장에 체력 비축",
            ],
            images: [
              "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=600&q=80",
            ],
          },
          {
            id: "t1-6",
            time: "19:00",
            title: "닝샤 야시장(寧夏夜市)",
            description: "타이베이 대표 미식 야시장. 로컬 먹거리가 밀집된 깔끔한 야시장으로, 6개 AI 플랜 중 5개가 첫날 저녁으로 추천한 필수 코스.",
            category: "food",
            duration: "1시간 30분",
            location: "닝샤 야시장",
            link: "https://maps.app.goo.gl/jHCYSKmV5C64d7hS9",
            tips: [
              "굴전(蚵仔煎) — 닝샤의 시그니처, 꼭 먹을 것",
              "춘권/런빙(潤餅) + 새우탕도 추천",
              "지파이(鷄排) — 사람 얼굴만 한 대만식 치킨",
              "금귤레몬 주스로 입가심",
              "현금 준비 필수 — 카드 안 되는 곳 많음",
            ],
            price: "NT$300~500",
            images: [
              "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80",
              "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
            ],
          },
          {
            id: "t1-7",
            time: "21:00",
            title: "편의점 야식 타임",
            description: "숙소 복귀 후 대만 편의점 탐방. 대만 맥주(台灣啤酒), 차예단(茶葉蛋), 우유차 사서 숙소에서 힐링.",
            category: "food",
            duration: "30분",
            tips: [
              "대만 맥주 '클래식(經典)' — 부드럽고 가벼움",
              "차예단은 세븐일레븐 계산대 옆 온장고에 있음",
              "패밀리마트 소프트 아이스크림도 추천",
            ],
            price: "NT$100~150",
          },
        ],
      },
      {
        day: 2,
        date: "2026-04-18",
        label: "시내 오전 + 예스폭지 투어",
        activities: [
          {
            id: "t2-1",
            time: "08:00",
            title: "푸항또우장(阜杭豆漿) 조식",
            description: "타이베이 3대 아침 맛집. 짠 두유(鹹豆漿)에 유탸오(油條) 찍어 먹고, 샤오빙(燒餅)도 필수. 줄이 길기로 유명하지만 회전이 빠름.",
            category: "food",
            duration: "1시간",
            location: "푸항또우장",
            link: "https://maps.app.goo.gl/qPP1qoBWyDoaSiUf7",
            tips: [
              "화~일 05:30~12:30 운영 (월요일 휴무!)",
              "줄이 30~40분이지만 회전 빠름 — 8시 전 도착 추천",
              "짠두유 + 샤오빙유탸오 세트가 정석",
              "너무 피곤하면 숙소 근처 홍루이젠(弘瑞軒)으로 대체",
            ],
            price: "NT$80~120",
            images: [
              "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80",
            ],
          },
          {
            id: "t2-2",
            time: "09:20",
            title: "화산1914 창의문화원구",
            description: "일제시대 양조장을 개조한 복합 문화공간. 독립 브랜드 숍, 갤러리, 카페가 어우러진 사진 찍기 좋은 공간.",
            category: "sightseeing",
            duration: "1시간 10분",
            location: "화산1914 창의문화원구",
            link: "https://maps.app.goo.gl/FQ9hxc85HqLpLc7f7",
            tips: [
              "공공구역은 24시간 개방, 상점은 11:00~",
              "외벽 그래피티/벽화가 포토 스팟",
              "MRT 중샤오신셩역(忠孝新生站) 1번 출구 바로",
            ],
            images: [
              "https://images.unsplash.com/photo-1553103593-f3de88127891?w=600&q=80",
            ],
          },
          {
            id: "t2-3",
            time: "10:40",
            title: "류산동 우육면(劉山東牛肉麵)",
            description: "미슐랭 빕구르망 선정 우육면집. 맑은 홍소(紅燒) 국물에 쫄깃한 면, 두툼한 소고기. 투어 전 든든한 한 그릇.",
            category: "food",
            duration: "40분",
            location: "류산동 우육면",
            link: "https://maps.app.goo.gl/kj43yKc3nxQHCTWz9",
            tips: [
              "소(小) 사이즈도 충분히 양 많음",
              "반숙란(滷蛋) 추가 추천",
              "메인역 근처라 투어 전 이동 편리",
              "과식 주의 — 투어 중 간식 많음",
            ],
            price: "NT$220",
            images: [
              "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
            ],
          },
          {
            id: "t2-4",
            time: "11:20",
            title: "투어 준비 & 이동",
            description: "투어 집결지(타이베이 메인역 부근)로 이동. 화장실, 물·간식 챙기기.",
            category: "transport",
            duration: "40분",
            tips: [
              "물 + 작은 간식 챙기기 (투어 버스 안에서 먹을 수 있음)",
              "멀미약 필요하면 편의점에서 미리 구매",
              "투어 바우처 / 예약 확인 메일 미리 준비",
            ],
          },
          {
            id: "t2-5",
            time: "12:00",
            title: "예류지질공원(野柳) 투어 시작",
            description: "자연이 조각한 기암괴석의 향연. 여왕머리바위(女王頭)를 비롯한 해식 지형이 장관. 예류 → 스펀 → 지우펀 순서로 진행.",
            category: "sightseeing",
            duration: "약 2시간 30분",
            location: "예류지질공원",
            link: "https://maps.app.goo.gl/Y2nj8bsLqZ88YVWV9",
            tips: [
              "여왕머리바위는 줄 서서 사진 찍음 — 인내심 필요",
              "바닷바람이 강해서 모자/선글라스 챙기기",
              "미끄러운 바위 주의 — 편한 신발 필수",
            ],
            price: "NT$80 (입장료)",
            images: [
              "https://images.unsplash.com/photo-1610743283840-bed063ee993e?w=600&q=80",
            ],
          },
          {
            id: "t2-6",
            time: "15:00",
            title: "스펀 → 지우펀 투어",
            description: "스펀 옛거리에서 천등(天燈) 날리기 & 간식 탐방 → 17:30 지우펀 도착, 아메이차루(阿妹茶樓)에서 우롱차 → 18:30 지우펀 올드스트리트 저녁.",
            category: "activity",
            duration: "약 6시간 30분",
            location: "스펀(十分) → 지우펀(九份)",
            link: "https://maps.app.goo.gl/RxXPDFzqe9g9Bxwv9",
            tips: [
              "스펀: 천등 날리기 NT$150~200 (4색 추천)",
              "스펀 간식: 땅콩 아이스크림 롤, 소시지, 닭날개",
              "지우펀: 해 질 무렵(17:30~) 홍등에 불 들어와 가장 예쁨",
              "지우펀 찻집 '아메이차루' — 센과 치히로 모티브 건물",
              "지우펀 저녁: 어묵국, 타로볼, 풀떡(芋圓) 필수",
            ],
            price: "투어비 포함",
            images: [
              "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=600&q=80",
              "https://images.unsplash.com/photo-1573790191872-fb04d8c3b28f?w=600&q=80",
            ],
          },
          {
            id: "t2-7",
            time: "21:30",
            title: "편의점 야식 타임",
            description: "투어 후 숙소 복귀. 편의점에서 컵라면, 과일, 맥주 등 가볍게. 투어 중 이미 많이 먹었으니 무리하지 않기.",
            category: "food",
            duration: "30분",
            tips: [
              "대만 편의점 관동자재(關東煮)도 맛있음",
              "투어 후 피로하면 바로 쉬는 것도 좋은 선택",
            ],
            price: "NT$50~100",
          },
        ],
      },
      {
        day: 3,
        date: "2026-04-19",
        label: "관광 마무리 & 출국",
        activities: [
          {
            id: "t3-1",
            time: "08:30",
            title: "로컬 조식",
            description: "숙소 근처 대만식 조식 가게에서 단빙(蛋餅), 두유(豆漿), 판퇀(飯糰, 주먹밥 롤). 대만식 아침 자체가 여행 포인트.",
            category: "food",
            duration: "40분",
            tips: [
              "단빙(蛋餅) — 대만식 에그 크레이프, 바삭+쫀득",
              "판퇀(飯糰) — 찹쌀 주먹밥에 유탸오·고기송 들어감",
              "차가운 두유(冰豆漿)도 꼭 한 잔",
            ],
            price: "NT$60~100",
          },
          {
            id: "t3-2",
            time: "09:30",
            title: "중정기념당(中正紀念堂)",
            description: "장제스를 기리는 거대한 기념관. 89개 계단 위의 본관과 드넓은 자유광장이 인상적. 근위병 교대식이 있으면 관람.",
            category: "sightseeing",
            duration: "1시간 10분",
            location: "중정기념당",
            link: "https://maps.app.goo.gl/kQCLJA9FRNV6xgem9",
            tips: [
              "본관 09:00~18:00, 광장은 새벽~자정",
              "근위병 교대식: 매 정시 (09:00, 10:00, …)",
              "89개 계단 = 장제스 향년 89세를 상징",
              "자유광장문(大門)에서 본관 방향 사진이 베스트 앵글",
            ],
            images: [
              "https://images.unsplash.com/photo-1529888557794-e3daa5bc9c75?w=600&q=80",
            ],
          },
          {
            id: "t3-3",
            time: "10:50",
            title: "금봉루러우판(金峰魯肉飯)",
            description: "중정기념당에서 도보 10분. 대만 국민 음식 루러우판(滷肉飯)의 대표 맛집. 미슐랭 빕구르망. 마지막 날 대만식 한 끼로 완벽.",
            category: "food",
            duration: "50분",
            location: "금봉루러우판",
            link: "https://maps.app.goo.gl/YqWLBc3cT4V2yVxp9",
            tips: [
              "루러우판(소) + 계란 + 탕(苦瓜湯 또는 筍湯) 추천",
              "반숙란(滷蛋)과 절임 두부도 사이드로 좋음",
              "점심시간 줄이 길지만 회전 빠름",
            ],
            price: "NT$100~160",
            images: [
              "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&q=80",
            ],
          },
          {
            id: "t3-4",
            time: "11:50",
            title: "시먼딩(西門町) 산책",
            description: "타이베이의 하라주쿠. 거리 공연, 빈티지 숍, 스트리트 푸드가 가득. 시먼역에서 바로. 용산사(龍山寺)로 대체 가능.",
            category: "sightseeing",
            duration: "1시간 10분",
            location: "시먼딩",
            link: "https://maps.app.goo.gl/6Bwxe7tV7mJ9MLHP8",
            tips: [
              "시먼홍러우(西門紅樓) — 일제시대 팔각형 건물, 주말 마켓",
              "대안: 용산사(龍山寺) — 타이베이에서 가장 오래된 사원",
              "거리에서 버블티 사 마시며 구경하기 좋음",
            ],
            images: [
              "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80",
            ],
          },
          {
            id: "t3-5",
            time: "13:00",
            title: "버블티 / 디저트",
            description: "대만 버블티 원조 맛보기. 춘수당(春水堂) 또는 50란(五十嵐) 추천. 망고 빙수나 타로 디저트도 좋은 선택.",
            category: "food",
            duration: "30분",
            tips: [
              "춘수당 — 버블티 원조, 타피오카 밀크티",
              "50란 — 로컬들이 가장 많이 마시는 체인",
              "아종면선(阿宗麵線) — 시먼딩에서 꼭 먹는 곱창 면선",
            ],
            price: "NT$50~80",
          },
          {
            id: "t3-6",
            time: "14:20",
            title: "기념품 쇼핑 → 짐 찾기",
            description: "펑리수(鳳梨酥), 누가크래커 등 기념품 구매. 까르푸나 메인역 지하상가 이용. 숙소 복귀 후 짐 찾기.",
            category: "shopping",
            duration: "1시간 30분",
            location: "타이베이 메인역 지하상가",
            link: "https://maps.app.goo.gl/3QF8GN3Y47JdJwbx5",
            tips: [
              "펑리수 추천: 微熱山丘(써니힐즈) — 시식 가능",
              "누가크래커: 까르푸에서 대량 구매 저렴",
              "면세 한도 확인 — 주류/담배 제한 있음",
            ],
            price: "NT$500~1000",
          },
          {
            id: "t3-7",
            time: "15:50",
            title: "공항 MRT 이동",
            description: "타이베이 메인역 → 타오위안 공항 MRT 급행 (약 35분). 출발 3시간 전 공항 도착 목표.",
            category: "transport",
            duration: "40분",
            location: "타이베이 메인역 MRT",
            link: "https://maps.app.goo.gl/3QF8GN3Y47JdJwbx5",
            tips: [
              "급행(Express) 탑승 — 보라색 표시, 35분",
              "이지카드 잔액으로 탑승 가능 (NT$160)",
              "공항 MRT역 내 수하물 체크인 가능 (일부 항공사)",
            ],
            price: "NT$160",
          },
          {
            id: "t3-8",
            time: "16:30",
            title: "공항 식사 → 18:55 출발",
            description: "공항에서 마지막 대만 한 끼. 우육면, 딤섬, 샌드위치 중 가볍게. 면세점 쇼핑 후 탑승.",
            category: "food",
            duration: "2시간 30분",
            location: "타오위안 공항 제1터미널",
            link: "https://maps.app.goo.gl/7kRFNsXvJyVZkUYr5",
            tips: [
              "공항 4층 푸드코트 — 우육면, 딤섬 등",
              "면세점에서 펑리수 추가 구매 가능",
              "탑승구 근처 편의점에서 마지막 간식 챙기기",
              "18:55 출발 — 즐거운 여행 마무리!",
            ],
            price: "NT$200~300",
          },
        ],
      },
    ],
  },
];
