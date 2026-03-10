export interface SpotItem {
  id: string;
  name: string;
  nameLocal: string;
  category: "landmark" | "street_walk" | "culture_complex" | "day_trip";
  description: string;
  descriptionFull: string;
  coverImage: string;
  images: string[];
  location?: string;
  link?: string;
  tips: string[];
  tags: string[];
}

/* ── helpers ─────────────────────────────────────────── */
const img = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80`;

/* ── verified Unsplash photo slugs ──────────────────── */
const PH = {
  taipei101Night: "photo-1747687759065-0c415cc1cf28",
  taipei101Day: "photo-1609147110688-83b5fd1288e8",
  cks: "photo-1752583083658-e296ea0575cd",
  longshan: "photo-1508983985216-6007e273cc6b",
  palace: "photo-1616394158624-a2ba9cfe2994",
  ximenRedHouse: "photo-1580745168634-33c78f4c4177",
  dihua: "photo-1558981806-ec527fa84c39",
  dadaochengPier: "photo-1506905925346-21bda4d32df4",
  yongkang: "photo-1563245372-f21724e3856d",
  ximending: "photo-1580745168634-33c78f4c4177",
  chifeng: "photo-1554118811-1e0d58224f24",
  huashan: "photo-1533900298318-6b8da08a523e",
  filmHouse: "photo-1485182708500-e8f1f318ba72",
  yehliu: "photo-1588442734586-3e608a2d44e9",
  shifen: "photo-1676744490945-579232e2ed58",
  shifenFalls: "photo-1506905925346-21bda4d32df4",
  jiufen: "photo-1540187334920-54e87c2771c0",
  park228: "photo-1519046904884-53103b34b206",
};

/* ================================================================
   랜드마크 (Landmark)
   ================================================================ */

const taipei101: SpotItem = {
  id: "spot-1",
  name: "타이베이 101 전망대",
  nameLocal: "台北101觀景台",
  category: "landmark",
  description: "대만의 랜드마크, 타이베이 시내 야경을 한눈에",
  descriptionFull:
    "508m 높이의 타이베이 101은 대만을 상징하는 초고층 빌딩입니다. 89층 실내 전망대에서 타이베이 시내 360도 파노라마를 감상할 수 있으며, 날씨가 좋은 날에는 91층 야외 전망대도 개방합니다. 일몰 전에 올라가 낮과 밤의 전환을 감상하는 것을 추천합니다. 지하 1층에는 딘타이펑 등 유명 맛집이 입점해 있어 식사와 함께 방문하기 좋습니다.",
  coverImage: img(PH.taipei101Night, 800),
  images: [img(PH.taipei101Night), img(PH.taipei101Day)],
  location: "타이베이 101역(象山站) 4번 출구",
  link: "https://maps.google.com/?q=台北101觀景台",
  tips: [
    "온라인 사전 예매 시 할인 (NT$600→NT$550)",
    "일몰 1시간 전 입장 추천 (낮+야경 모두 감상)",
    "89층 실내 + 91층 야외 전망대",
    "B1 딘타이펑에서 식사 후 전망대 방문 코스 추천",
  ],
  tags: ["랜드마크", "야경", "전망대", "필수코스"],
};

const cksMemorial: SpotItem = {
  id: "spot-2",
  name: "중정기념당",
  nameLocal: "中正紀念堂",
  category: "landmark",
  description: "웅장한 외관과 근위병 교대식의 대표 명소",
  descriptionFull:
    "타이베이의 대표 관광 명소인 중정기념당은 장제스(蔣中正)를 기념하여 세워진 건축물입니다. 하얀 대리석과 파란 기와지붕의 웅장한 외관이 인상적이며, 넓은 자유광장(自由廣場)과 양쪽의 국립극장·국립음악당이 어우러져 사진 명소로 유명합니다. 매시 정각에 진행되는 근위병 교대식은 필수 관람 포인트입니다.",
  coverImage: img(PH.cks, 800),
  images: [img(PH.cks)],
  location: "중정기념당역 5번 출구",
  link: "https://maps.google.com/?q=中正紀念堂",
  tips: [
    "근위병 교대식: 매시 정각 (09~17시)",
    "무료 입장, 내부 전시관도 관람 가능",
    "자유광장에서 기념당 전체 사진 찍기",
    "일몰 시간대 조명이 켜지면 야경도 아름다움",
  ],
  tags: ["랜드마크", "무료", "사진명소", "필수코스"],
};

const longshan: SpotItem = {
  id: "spot-3",
  name: "룽산쓰 (용산사)",
  nameLocal: "龍山寺",
  category: "landmark",
  description: "타이베이에서 가장 오래된 사원, 화려한 건축과 종교 문화",
  descriptionFull:
    "1738년에 세워진 타이베이에서 가장 오래된 사원으로, 화려한 용과 봉황 조각, 붉은 기둥과 금빛 장식이 인상적입니다. 불교, 도교, 유교가 혼합된 대만 특유의 종교 문화를 체험할 수 있으며, 현지인들이 향을 피우며 기도하는 모습을 가까이에서 볼 수 있습니다. 밤에는 조명이 켜져 더욱 아름다운 야경을 자랑합니다.",
  coverImage: img(PH.longshan, 800),
  images: [img(PH.longshan)],
  location: "룽산쓰역(龍山寺站) 1번 출구",
  link: "https://maps.google.com/?q=龍山寺",
  tips: [
    "무료 입장, 향 1개 무료 제공 (2024년 기준)",
    "사진 촬영 가능하나 예배 중 배려할 것",
    "근처 화시제(華西街) 야시장과 함께 방문",
    "06~22시 운영, 아침 일찍 방문하면 한적",
  ],
  tags: ["사원", "무료", "역사", "야경"],
};

const palaceMuseum: SpotItem = {
  id: "spot-4",
  name: "국립고궁박물원",
  nameLocal: "國立故宮博物院",
  category: "landmark",
  description: "세계 4대 박물관, 취옥백채 등 진귀한 유물",
  descriptionFull:
    "세계 4대 박물관 중 하나로 약 70만 점의 중국 역대 황실 유물을 소장하고 있습니다. 가장 유명한 소장품은 천연 옥으로 만든 배추 모양의 '취옥백채(翠玉白菜)'와 돼지고기 모양의 '육형석(肉形石)'입니다. 넓은 관람 면적으로 최소 2~3시간을 잡고 방문하는 것이 좋으며, 오디오 가이드(한국어) 대여를 추천합니다.",
  coverImage: img(PH.palace, 800),
  images: [img(PH.palace)],
  location: "스린역(士林站)에서 버스 환승",
  link: "https://maps.google.com/?q=國立故宮博物院",
  tips: [
    "입장료 NT$350, 국제학생증 소지 시 할인",
    "한국어 오디오 가이드 NT$150 (필수 추천)",
    "3층 취옥백채·육형석부터 관람 추천",
    "매주 화~일 09~17시 (월요일 휴관 확인)",
  ],
  tags: ["박물관", "유물", "필수코스"],
};

const ximenRedHouse: SpotItem = {
  id: "spot-5",
  name: "시먼 홍루",
  nameLocal: "西門紅樓",
  category: "landmark",
  description: "시먼딩의 붉은 벽돌 레트로 건축물, 주말 야간 마켓",
  descriptionFull:
    "1908년에 지어진 붉은 벽돌의 서양식 팔각형 건물로, 시먼딩의 상징적인 랜드마크입니다. 현재는 문화 창의 공간으로 활용되어 대만 디자이너들의 핸드메이드 소품, 의류, 액세서리 등을 판매합니다. 주말 저녁에는 2층 테라스와 야외 광장에서 라이브 공연과 야간 마켓이 열려 활기찬 분위기를 즐길 수 있습니다.",
  coverImage: img(PH.ximenRedHouse, 800),
  images: [img(PH.ximenRedHouse)],
  location: "시먼역(西門站) 1번 출구",
  link: "https://maps.google.com/?q=西門紅樓",
  tips: [
    "무료 입장, 내부 소품샵 구경",
    "주말 저녁 야간 마켓 (금~일 19~22시)",
    "2층 테라스에서 시먼딩 거리 뷰 감상",
    "시먼딩 쇼핑과 함께 코스로 묶기 좋음",
  ],
  tags: ["시먼딩", "레트로", "쇼핑", "야간마켓"],
};

/* ================================================================
   감성 거리 & 산책로 (Street Walk)
   ================================================================ */

const dihua: SpotItem = {
  id: "spot-6",
  name: "디화제 & 다다오청",
  nameLocal: "迪化街 & 大稻埕",
  category: "street_walk",
  description: "붉은 벽돌의 레트로 거리, 차·약재·건어물 쇼핑",
  descriptionFull:
    "19세기 무역항으로 번성했던 다다오청(大稻埕) 지역의 메인 거리인 디화제(迪化街)는 붉은 벽돌의 바로크 양식 건물들이 늘어선 레트로 거리입니다. 대만 전통차, 한방 약재, 건어물, 직물 등을 판매하는 오래된 상점들과 함께 현대적인 카페, 편집샵, 갤러리가 공존합니다. 파인애플 케이크 시식, 말린 과일 구매 등 기념품 쇼핑 명소이기도 합니다.",
  coverImage: img(PH.dihua, 800),
  images: [img(PH.dihua)],
  location: "베이먼역(北門站) 또는 다차오터우역(大橋頭站)",
  link: "https://maps.google.com/?q=迪化街",
  tips: [
    "ASW Tea House, 합흥벽경 등 감성 찻집 추천",
    "파인애플 케이크·말린 과일 시식 후 구매",
    "오후~석양 시간대가 산책하기 가장 좋음",
    "디화제 → 다다오청 부두(석양) 코스 추천",
  ],
  tags: ["레트로", "쇼핑", "산책", "필수코스"],
};

const dadaochengPier: SpotItem = {
  id: "spot-7",
  name: "다다오청 부두 (PIER 5)",
  nameLocal: "大稻埕碼頭",
  category: "street_walk",
  description: "단수이 강변 일몰 명소, 노을과 야경의 황금 스팟",
  descriptionFull:
    "단수이 강(淡水河)변에 위치한 다다오청 부두는 타이베이 시내에서 가장 아름다운 일몰을 볼 수 있는 장소입니다. 강변 산책로를 따라 걸으며 석양이 강물에 반사되는 풍경을 감상할 수 있으며, 주말 저녁에는 컨테이너 마켓이 열려 음식과 맥주를 즐기며 야경을 감상할 수 있습니다.",
  coverImage: img(PH.dadaochengPier, 800),
  images: [img(PH.dadaochengPier)],
  location: "다다오청 부두 (PIER 5)",
  link: "https://maps.google.com/?q=大稻埕碼頭",
  tips: [
    "일몰 시간 1시간 전 도착 추천",
    "디화제 산책 후 석양 보러 오는 코스가 최고",
    "주말 컨테이너 마켓에서 맥주+야경",
    "자전거 대여(YouBike)로 강변 라이딩도 추천",
  ],
  tags: ["일몰", "강변", "야경", "산책"],
};

const yongkang: SpotItem = {
  id: "spot-8",
  name: "융캉제 거리",
  nameLocal: "永康街",
  category: "street_walk",
  description: "아기자기한 골목, 맛집과 소품샵이 모인 활기찬 거리",
  descriptionFull:
    "동먼역(東門站) 근처에 위치한 융캉제는 대만의 '가로수길'이라 불리는 아기자기한 거리입니다. 딘타이펑 본점, 스무시하우스(망고빙수), 천진총좌빙(파전병) 등 유명 맛집이 밀집해 있으며, 대만 디자인 소품샵, 독립서점, 빈티지 의류샵 등도 즐비합니다. 점심 식사 후 골목골목 산책하며 카페에서 쉬어가기 좋은 코스입니다.",
  coverImage: img(PH.yongkang, 800),
  images: [img(PH.yongkang)],
  location: "동먼역(東門站) 5번 출구",
  link: "https://maps.google.com/?q=永康街",
  tips: [
    "딘타이펑 → 천진총좌빙 → 스무시하우스 코스 추천",
    "소품샵·독립서점 구경하며 산책",
    "주말보다 평일이 한적하고 좋음",
    "근처 대안삼림공원(大安森林公園)도 산책 추천",
  ],
  tags: ["맛집거리", "산책", "쇼핑", "융캉제"],
};

const ximending: SpotItem = {
  id: "spot-9",
  name: "시먼딩 보행자거리",
  nameLocal: "西門町步行街",
  category: "street_walk",
  description: "대만의 명동, 화려하고 젊은 에너지가 넘치는 번화가",
  descriptionFull:
    "타이베이의 '명동'이라 불리는 시먼딩은 대만 젊은이들의 패션·문화·먹거리 중심지입니다. 보행자 전용 거리를 중심으로 의류 매장, 신발 가게, 코스메틱 샵, 거리 공연 등이 펼쳐지며, 아종면선(곱창국수), 마라훠궈, 야시장 간식 등 먹거리도 풍부합니다. 밤에는 네온사인과 LED 간판이 화려한 야경을 만들어냅니다.",
  coverImage: img(PH.ximending, 800),
  images: [img(PH.ximending)],
  location: "시먼역(西門站) 6번 출구",
  link: "https://maps.google.com/?q=西門町步行街",
  tips: [
    "아종면선 + 시먼홍루 + 쇼핑 코스 추천",
    "저녁 시간대(18시 이후)가 가장 활기참",
    "거리 공연·버스킹 구경하기 좋음",
    "대만 화장품(Dr. Wu 등) 쇼핑도 추천",
  ],
  tags: ["쇼핑", "먹거리", "야경", "필수코스"],
};

const chifeng: SpotItem = {
  id: "spot-10",
  name: "중산 카페거리 (츠펑제)",
  nameLocal: "赤峰街",
  category: "street_walk",
  description: "대만의 '성수동', 감성 편집샵과 독립서점의 거리",
  descriptionFull:
    "중산역(中山站) 근처의 츠펑제(赤峰街)는 낡은 철물점과 자동차 정비소가 있던 골목이 감성적인 카페, 편집샵, 독립서점, 빈티지 의류샵으로 변신한 거리입니다. 한국의 성수동과 비슷한 분위기로, 골목골목 숨어있는 작은 가게들을 발견하는 재미가 있습니다. 중산 지하상가와 연결되어 있어 쇼핑도 함께 즐길 수 있습니다.",
  coverImage: img(PH.chifeng, 800),
  images: [img(PH.chifeng)],
  location: "중산역(中山站) 4번 출구",
  link: "https://maps.google.com/?q=赤峰街",
  tips: [
    "카페 투어: 커피, 디저트 맛집 다수",
    "중산 지하상가와 함께 방문 추천",
    "빈티지/레트로 의류·소품 쇼핑",
    "오후 시간대 산책하기 가장 좋음",
  ],
  tags: ["카페", "감성", "편집샵", "산책"],
};

/* ================================================================
   문화 & 복합 공간 (Culture Complex)
   ================================================================ */

const huashan: SpotItem = {
  id: "spot-11",
  name: "화산 1914 창의문화원구",
  nameLocal: "華山1914文化創意產業園區",
  category: "culture_complex",
  description: "옛 양조장을 개조한 복합 문화 공간",
  descriptionFull:
    "1914년에 세워진 일본식 양조장을 리노베이션한 복합 문화 예술 공간입니다. 넓은 부지에 전시관, 갤러리, 극장, 카페, 소품샵, 오르골 공방 등이 입점해 있으며, 팝업 스토어와 기획 전시가 수시로 열립니다. 빈티지한 벽돌 건물과 초록빛 덩굴이 어우러진 공간은 사진 찍기에도 좋습니다.",
  coverImage: img(PH.huashan, 800),
  images: [img(PH.huashan)],
  location: "선릉역(善導寺站) 6번 출구 도보 5분",
  link: "https://maps.google.com/?q=華山1914文化創意產業園區",
  tips: [
    "무료 입장 (일부 유료 전시 제외)",
    "오르골 만들기 체험 (NT$300~) 추천",
    "카페에서 커피 마시며 휴식하기 좋음",
    "근처 푸항또우장(조식)과 함께 오전 코스 추천",
  ],
  tags: ["문화공간", "전시", "사진명소", "무료"],
};

const filmHouse: SpotItem = {
  id: "spot-12",
  name: "타이베이 필름 하우스",
  nameLocal: "台北光點",
  category: "culture_complex",
  description: "옛 미국 대사관을 개조한 이국적인 영화관 카페",
  descriptionFull:
    "1925년 미국 대사관저로 지어진 하얀 양옥 건물을 예술 영화관과 카페로 리노베이션한 공간입니다. 정원에는 야자수와 식물이 우거져 이국적인 분위기를 자아내며, 실내에서는 독립·예술 영화를 상영합니다. 정원 카페에서 커피 한 잔 하며 쉬어가기에 완벽한 힐링 공간입니다.",
  coverImage: img(PH.filmHouse, 800),
  images: [img(PH.filmHouse)],
  location: "중산역(中山站) 2번 출구 도보 5분",
  link: "https://maps.google.com/?q=台北光點",
  tips: [
    "정원 산책은 무료, 영화 관람은 유료",
    "츠펑제(赤峰街)와 함께 중산 코스로 묶기 좋음",
    "정원 카페에서 사진 찍기 좋음",
    "독립영화 상영 스케줄은 웹사이트 확인",
  ],
  tags: ["영화", "카페", "정원", "감성"],
};

const park228: SpotItem = {
  id: "spot-13",
  name: "228 평화기념공원",
  nameLocal: "二二八和平紀念公園",
  category: "culture_complex",
  description: "도심 속 푸른 공원, 국립대만박물관이 있는 역사 공간",
  descriptionFull:
    "타이베이 시내 중심에 위치한 넓은 도심 공원으로, 1947년 2·28 사건을 기리는 기념관과 국립대만박물관이 있습니다. 울창한 나무 그늘 아래 산책로가 잘 정비되어 있어 도심에서 잠시 쉬어가기 좋은 공간입니다. 공원 내 연못과 일본식 정자도 포토 스팟입니다.",
  coverImage: img(PH.park228, 800),
  images: [img(PH.park228)],
  location: "NTU병원역(台大醫院站) 1번 출구",
  link: "https://maps.google.com/?q=二二八和平紀念公園",
  tips: [
    "무료 입장, 24시간 개방",
    "국립대만박물관 (NT$30) 함께 관람 추천",
    "중정기념당과 도보 15분 거리로 묶어서 방문",
    "오전 산책 코스로 추천",
  ],
  tags: ["공원", "박물관", "무료", "산책"],
};

/* ================================================================
   근교 투어 (Day Trip)
   ================================================================ */

const yehliu: SpotItem = {
  id: "spot-14",
  name: "예류 지질공원",
  nameLocal: "野柳地質公園",
  category: "day_trip",
  description: "기암괴석과 여왕머리 바위의 자연 경관",
  descriptionFull:
    "타이베이 북쪽 해안에 위치한 예류 지질공원은 수천만 년에 걸친 풍화 작용으로 만들어진 기암괴석이 장관을 이루는 자연 명소입니다. 가장 유명한 '여왕머리 바위(女王頭)'는 목이 점점 가늘어져 앞으로 수십 년 내 부러질 수 있어 지금 방문하는 것이 의미 있습니다. 예스폭지 투어의 첫 번째 코스로 보통 방문합니다.",
  coverImage: img(PH.yehliu, 800),
  images: [img(PH.yehliu)],
  location: "신베이시 완리구",
  link: "https://maps.google.com/?q=野柳地質公園",
  tips: [
    "입장료 NT$80",
    "여왕머리 바위 사진 촬영 대기 10~20분",
    "바람이 강하니 모자 주의",
    "예스폭지 투어 패키지로 방문이 편리 (NT$1,500~)",
  ],
  tags: ["근교투어", "자연", "지질공원", "예스폭지"],
};

const shifen: SpotItem = {
  id: "spot-15",
  name: "스펀 (풍등 날리기)",
  nameLocal: "十分老街",
  category: "day_trip",
  description: "철로 위에서 소원을 적어 풍등을 날리는 감성 체험",
  descriptionFull:
    "핑시선(平溪線) 기차가 지나가는 철로 위에서 소원을 적은 풍등(天燈)을 하늘로 날리는 체험이 스펀의 하이라이트입니다. 4면에 각각 다른 색의 소원을 적을 수 있으며, 빨강(건강), 노랑(재물), 분홍(사랑), 파랑(사업) 등 색마다 의미가 있습니다. 스펀 폭포(十分瀑布)도 도보 20분 거리에 있어 함께 방문하기 좋습니다.",
  coverImage: img(PH.shifen, 800),
  images: [img(PH.shifen), img(PH.shifenFalls)],
  location: "스펀역(十分站)",
  link: "https://maps.google.com/?q=十分老街",
  tips: [
    "풍등 가격: 1색 NT$150, 4색 NT$200",
    "4색 풍등이 사진 찍기에 더 예쁨",
    "기차 시간표 확인 필수 (30~60분 간격)",
    "스펀 폭포까지 도보 20분, 반드시 함께 방문",
  ],
  tags: ["근교투어", "풍등", "체험", "예스폭지"],
};

const shifenFalls: SpotItem = {
  id: "spot-16",
  name: "스펀 폭포",
  nameLocal: "十分瀑布",
  category: "day_trip",
  description: "대만의 나이아가라, 시원한 물줄기의 자연 폭포",
  descriptionFull:
    "높이 20m, 폭 40m의 스펀 폭포는 '대만의 나이아가라'라 불리는 대만 최대 규모의 커튼형 폭포입니다. 스펀 옛거리에서 도보 약 20분 거리에 있으며, 울창한 숲길을 걸어가는 과정도 즐거운 트레킹 코스입니다. 폭포 전망대에서 시원하게 쏟아지는 물줄기와 물안개를 감상할 수 있습니다.",
  coverImage: img(PH.shifenFalls, 800),
  images: [img(PH.shifenFalls)],
  location: "스펀역에서 도보 20분",
  link: "https://maps.google.com/?q=十分瀑布",
  tips: [
    "무료 입장 (09~17시, 마지막 입장 16:30)",
    "비 온 뒤에 수량이 많아 더 장관",
    "스펀 옛거리 → 폭포 → 기차역 순서 추천",
    "편한 신발 필수 (숲길 20분 걸음)",
  ],
  tags: ["근교투어", "폭포", "자연", "예스폭지"],
};

const jiufen: SpotItem = {
  id: "spot-17",
  name: "지우펀 올드스트리트",
  nameLocal: "九份老街",
  category: "day_trip",
  description: "붉은 홍등과 계단 골목의 환상적인 야경 마을",
  descriptionFull:
    "영화 '비정성시'의 배경이자 '센과 치히로의 행방불명'의 모티브로 알려진 지우펀은 산비탈에 계단식으로 형성된 옛 마을입니다. 좁은 골목길을 따라 먹거리 가게, 기념품샵, 전통 찻집이 빼곡히 늘어서 있으며, 해질녘 붉은 홍등이 켜지면 환상적인 분위기가 연출됩니다. 타로볼, 땅콩 아이스크림 롤, 전통 찻집 등이 필수 코스입니다.",
  coverImage: img(PH.jiufen, 800),
  images: [img(PH.jiufen)],
  location: "신베이시 루이팡구",
  link: "https://maps.google.com/?q=九份老街",
  tips: [
    "해질녘(17~18시) 도착이 야경 감상에 최적",
    "아메이차관(阿妹茶樓)에서 차 한잔 + 야경 감상",
    "타로볼 + 땅콩 아이스크림 롤 필수",
    "주말은 인파가 매우 많으니 평일 추천",
    "예스폭지 투어의 마지막 코스로 방문이 일반적",
  ],
  tags: ["근교투어", "야경", "홍등", "필수코스", "예스폭지"],
};

const yespojiTour: SpotItem = {
  id: "spot-18",
  name: "예스폭지 투어 (패키지)",
  nameLocal: "野十瀑九 一日遊",
  category: "day_trip",
  description: "예류→스펀→스펀폭포→지우펀을 하루에 돌아보는 인기 투어",
  descriptionFull:
    "예스폭지(야류+스펀+스펀폭포+지우펀)는 대만 여행의 필수 근교 투어 코스입니다. 가이드가 있는 패키지 투어를 이용하면 교통편 걱정 없이 하루 만에 4곳을 효율적으로 돌아볼 수 있습니다. 보통 오전 9시에 타이베이 시내에서 출발하여 저녁 9시경 돌아오는 일정이며, 클룩(Klook)이나 KKday에서 예약할 수 있습니다.",
  coverImage: img(PH.shifen, 800),
  images: [
    img(PH.yehliu),
    img(PH.shifen),
    img(PH.shifenFalls),
    img(PH.jiufen),
  ],
  location: "타이베이 시내 출발",
  link: "https://maps.google.com/?q=野柳地質公園",
  tips: [
    "Klook/KKday에서 사전 예약 (NT$1,500~2,000)",
    "한국어 가이드 투어도 있음",
    "예류→스펀→폭포→지우펀 순서가 일반적",
    "지우펀에서 야경까지 보고 돌아오는 코스 추천",
    "비가 오면 예류가 미끄러우니 운동화 필수",
  ],
  tags: ["근교투어", "패키지", "예스폭지", "필수코스"],
};

/* ── export ──────────────────────────────────────────── */
export const spotsData: SpotItem[] = [
  taipei101,
  cksMemorial,
  longshan,
  palaceMuseum,
  ximenRedHouse,
  dihua,
  dadaochengPier,
  yongkang,
  ximending,
  chifeng,
  huashan,
  filmHouse,
  park228,
  yehliu,
  shifen,
  shifenFalls,
  jiufen,
  yespojiTour,
];

export const spotCategories = [
  { key: "all" as const, label: "전체" },
  { key: "landmark" as const, label: "랜드마크" },
  { key: "street_walk" as const, label: "감성거리" },
  { key: "culture_complex" as const, label: "문화공간" },
  { key: "day_trip" as const, label: "근교투어" },
];
