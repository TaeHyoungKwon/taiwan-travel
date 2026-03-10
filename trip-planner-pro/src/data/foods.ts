export interface FoodItem {
  id: string;
  name: string;
  nameLocal: string;
  category: "restaurant" | "street_dessert" | "cafe_tea" | "nightmarket";
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
  xiaolongbao: "photo-1563245372-f21724e3856d",
  beefNoodle: "photo-1555126634-323283e090fa",
  luroufan: "photo-1604908176997-125f25cc6f3d",
  doujiang: "photo-1578020190125-f4f7c18bc9cb",
  scallionPancake: "photo-1569058242253-92a9c755a0ec",
  mangoIce: "photo-1563805042-7684c019e1cb",
  oysterOmelette: "photo-1583032015879-e5022cb87c3b",
  taroBalls: "photo-1558618666-fcd25c85f82e",
  peanutIceCream: "photo-1501443762994-82bd5dace89a",
  bubbleTea: "photo-1747016861831-ed2903bccb69",
  nightMarketFood: "photo-1535898331935-2d274aff0fbc",
  hotpot: "photo-1569718212165-3a8278d5f624",
  mianxian: "photo-1582878826629-29b7ad1cdc43",
  sandwich: "photo-1528735602780-2552fd46c7af",
  dimsum: "photo-1576577445504-6af96477db52",
  teaHouse: "photo-1544787219-7f47ccb76574",
  cafeInterior: "photo-1554118811-1e0d58224f24",
  raohe: "photo-1552912810-e184f878293e",
  containerMarket: "photo-1514933651103-005eec06c04b",
  convenienceStore: "photo-1604719312566-8912e9227c6a",
  breakfast: "photo-1555126634-323283e090fa",
  chickenRice: "photo-1567620905732-2d1ec7ab7445",
  pineappleCake: "photo-1558961363-fa8fdf82db35",
};

/* ================================================================
   식사 (Restaurant)
   ================================================================ */

const dintaifung: FoodItem = {
  id: "food-1",
  name: "딘타이펑",
  nameLocal: "鼎泰豐",
  category: "restaurant",
  description: "세계적인 딤섬 전문점, 샤오롱바오의 성지",
  descriptionFull:
    "뉴욕타임스가 선정한 세계 10대 레스토랑. 얇은 피 안에 뜨거운 육즙이 가득한 샤오롱바오(小籠包)로 유명합니다. 타이베이 101 지하 푸드코트, 융캉제 본점, 신의 SOGO 등 여러 지점이 있으며, 융캉제 본점은 항상 대기줄이 길지만 회전이 빠른 편입니다. 새우 샤오롱바오, 트러플 샤오롱바오, 볶음밥, 딤섬 세트도 추천합니다.",
  coverImage: img(PH.xiaolongbao, 800),
  images: [img(PH.xiaolongbao), img(PH.dimsum)],
  location: "융캉제 본점 / 타이베이 101 B1",
  link: "https://maps.google.com/?q=鼎泰豐+永康街",
  tips: [
    "융캉제 본점은 오픈 전 도착 추천 (11시 전)",
    "101점은 줄이 상대적으로 짧음",
    "샤오롱바오 + 볶음밥 + 새우완탕 조합 추천",
    "초간장에 채썬 생강을 올려 먹는 게 정석",
  ],
  tags: ["미슐랭", "샤오롱바오", "딤섬", "필수코스"],
};

const timhowan: FoodItem = {
  id: "food-2",
  name: "팀호완",
  nameLocal: "添好運",
  category: "restaurant",
  description: "미슐랭 딤섬 맛집, 달콤바삭한 BBQ번이 시그니처",
  descriptionFull:
    "홍콩에서 시작된 미슐랭 1스타 딤섬 전문점으로 타이베이역 근처에 위치합니다. 시그니처 메뉴인 차슈바오(BBQ 포크번)는 바삭한 파이 껍질 안에 달콤한 차슈가 들어있어 중독성이 강합니다. 하가우, 슈마이, 라이스롤 등 정통 딤섬도 수준급이며 가격 대비 만족도가 매우 높습니다.",
  coverImage: img(PH.dimsum, 800),
  images: [img(PH.dimsum), img(PH.xiaolongbao)],
  location: "타이베이역 Q스퀘어",
  link: "https://maps.google.com/?q=添好運+台北車站",
  tips: [
    "BBQ 포크번(차슈바오)은 반드시 주문",
    "점심시간 피크는 12~13시, 오전 11시 추천",
    "2인 기준 NT$400~600이면 충분",
  ],
  tags: ["미슐랭", "딤섬", "차슈바오"],
};

const liushandong: FoodItem = {
  id: "food-3",
  name: "유산동 우육면",
  nameLocal: "劉山東牛肉麵",
  category: "restaurant",
  description: "미슐랭 빕구르망, 맑고 진한 국물의 우육면",
  descriptionFull:
    "타이베이역 근처 골목에 위치한 미슐랭 빕구르망 선정 우육면 맛집. 맑은 탕(清燉) 스타일의 국물은 소뼈를 오래 우려내 깊고 깔끔한 맛이 특징입니다. 큼직한 소고기 덩어리가 푸짐하게 올라가며, 면은 쫄깃한 도삭면(刀削麵) 스타일을 선택할 수 있습니다. 대만 여행에서 우육면은 꼭 한 번 먹어봐야 할 필수 메뉴입니다.",
  coverImage: img(PH.beefNoodle, 800),
  images: [img(PH.beefNoodle)],
  location: "타이베이역 근처",
  link: "https://maps.google.com/?q=劉山東牛肉麵",
  tips: [
    "청둔(맑은 국물) vs 홍샤오(간장 국물) 선택 가능",
    "반근(半筋半肉) 주문하면 힘줄+살코기 믹스",
    "소채(小菜) 반찬도 맛있으니 함께 주문",
    "점심 시간 줄이 길어 11시 30분 전 도착 추천",
  ],
  tags: ["미슐랭", "우육면", "필수코스"],
};

const jinfeng: FoodItem = {
  id: "food-4",
  name: "진펑 루로우판",
  nameLocal: "金峰魯肉飯",
  category: "restaurant",
  description: "대만 국민 음식 루로우판의 로컬 명가",
  descriptionFull:
    "중정기념당역 근처에 위치한 루로우판(滷肉飯) 전문점으로, 대만 현지인들도 줄 서서 먹는 로컬 맛집입니다. 짭조름하고 윤기 나는 간장 돼지고기 다짐이 뜨거운 밥 위에 올라가며, 반숙 계란(滷蛋)과 함께 먹으면 최고입니다. 가격이 NT$40~60으로 매우 저렴하면서 맛있어 가성비가 뛰어납니다.",
  coverImage: img(PH.luroufan, 800),
  images: [img(PH.luroufan)],
  location: "중정기념당역 2번 출구",
  link: "https://maps.google.com/?q=金峰魯肉飯",
  tips: [
    "루로우판 소(小) + 루란(삶은 계란) + 탕 조합 추천",
    "가격이 매우 저렴 (루로우판 NT$40~)",
    "현지인 맛집이라 점심/저녁 피크 때 줄이 김",
  ],
  tags: ["루로우판", "로컬맛집", "가성비"],
};

const fuhang: FoodItem = {
  id: "food-5",
  name: "푸항또우장",
  nameLocal: "阜杭豆漿",
  category: "restaurant",
  description: "현지인 아침식사 성지, 따뜻한 두유와 단빙",
  descriptionFull:
    "선릉역 2층 전통시장 안에 위치한 대만 조식 명소. 매일 새벽부터 줄이 생기는 곳으로, 짠 두유(鹹豆漿)와 달콤한 두유, 단빙(蛋餅, 계란전병), 샤오빙유탸오(燒餅油條) 등 전통 대만 아침 메뉴를 맛볼 수 있습니다. 특히 짠 두유에 유탸오를 찍어 먹는 조합은 대만 여행의 필수 경험입니다.",
  coverImage: img(PH.doujiang, 800),
  images: [img(PH.doujiang), img(PH.breakfast)],
  location: "선릉역(善導寺站) 5번 출구",
  link: "https://maps.google.com/?q=阜杭豆漿",
  tips: [
    "오전 6시 오픈, 7시 전 도착하면 대기 20분 이내",
    "짠두유(鹹豆漿) + 샤오빙유탸오 조합 필수",
    "화요일 휴무!",
    "현금만 가능",
  ],
  tags: ["조식", "두유", "필수코스", "현지인맛집"],
};

const hongruizhen: FoodItem = {
  id: "food-6",
  name: "홍루이젠",
  nameLocal: "洪瑞珍",
  category: "restaurant",
  description: "부드러운 대만식 샌드위치, 간단 아침으로 최고",
  descriptionFull:
    "대만 전역에 지점이 있는 유명 샌드위치 브랜드. 부드러운 흰 식빵 사이에 마요네즈, 햄, 계란 등이 들어간 레트로 스타일의 샌드위치가 시그니처입니다. 가격이 저렴하고(NT$25~45) 가볍게 먹기 좋아 바쁜 아침이나 간식으로 제격입니다. 편의점에서도 쉽게 구할 수 있습니다.",
  coverImage: img(PH.sandwich, 800),
  images: [img(PH.sandwich)],
  location: "타이베이 시내 여러 지점",
  link: "https://maps.google.com/?q=洪瑞珍+台北",
  tips: [
    "오리지널(招牌) 맛이 가장 인기",
    "호텔 조식 대신 가볍게 먹기 좋음",
    "세븐일레븐에서도 유사 제품 판매",
  ],
  tags: ["조식", "샌드위치", "가성비"],
};

const malaHotpot: FoodItem = {
  id: "food-7",
  name: "시먼딩 마라훠궈",
  nameLocal: "西門町麻辣火鍋",
  category: "restaurant",
  description: "무한리필 마라 훠궈, 원하는 재료를 마음껏",
  descriptionFull:
    "시먼딩 근처에 여러 무한리필 훠궈 전문점이 있습니다. 마라(麻辣) 육수와 백탕(白湯) 이중냄비를 선택한 뒤 소고기, 해산물, 채소, 버섯 등 원하는 재료를 무한으로 즐길 수 있습니다. 2인 기준 NT$700~1,000 정도로 한국 대비 저렴하게 고퀄리티 훠궈를 경험할 수 있습니다.",
  coverImage: img(PH.hotpot, 800),
  images: [img(PH.hotpot)],
  location: "시먼딩 일대",
  link: "https://maps.google.com/?q=西門町+麻辣火鍋",
  tips: [
    "마라+백탕 이중냄비(鴛鴦鍋) 추천",
    "소스바에서 사차장+마늘+파 조합이 정석",
    "저녁 시간(18시~) 대기 있을 수 있음",
  ],
  tags: ["훠궈", "무한리필", "시먼딩"],
};

/* ================================================================
   간식 & 디저트 (Street & Dessert)
   ================================================================ */

const chenjin: FoodItem = {
  id: "food-8",
  name: "천진총좌빙",
  nameLocal: "天津蔥抓餅",
  category: "street_dessert",
  description: "융캉제 필수 코스, 쫀득한 대만식 파전병",
  descriptionFull:
    "융캉제 거리에 위치한 길거리 간식 명물. 밀가루 반죽을 겹겹이 접어 구워낸 파전병(蔥抓餅)은 겉은 바삭하고 속은 쫀득한 식감이 특징입니다. 계란, 치즈, 바질 등 토핑을 추가할 수 있으며, 갓 구워 뜨거울 때 먹으면 고소한 풍미가 최고입니다.",
  coverImage: img(PH.scallionPancake, 800),
  images: [img(PH.scallionPancake)],
  location: "융캉제 거리",
  link: "https://maps.google.com/?q=天津蔥抓餅+永康街",
  tips: [
    "계란(加蛋) 토핑은 기본으로 추가",
    "바질(九層塔) 토핑도 인기",
    "줄이 길지만 회전이 빠름",
    "NT$35~55 가성비 최고",
  ],
  tags: ["융캉제", "간식", "길거리음식"],
};

const azhong: FoodItem = {
  id: "food-9",
  name: "아종면선",
  nameLocal: "阿宗麵線",
  category: "street_dessert",
  description: "시먼딩 명물, 가쓰오부시 국물의 곱창국수",
  descriptionFull:
    "시먼딩 한복판에 위치한 면선(麵線) 전문 노점. 가쓰오부시(다시마) 베이스의 걸쭉한 국물에 부드러운 국수와 곱창이 들어간 대만식 소울푸드입니다. 서서 먹는 스타일이며, 매운 맛 추가(加辣)를 하면 더욱 풍미가 살아납니다. 한 그릇 NT$55~75로 가볍게 즐기기 좋습니다.",
  coverImage: img(PH.mianxian, 800),
  images: [img(PH.mianxian)],
  location: "시먼딩 보행자거리",
  link: "https://maps.google.com/?q=阿宗麵線+西門町",
  tips: [
    "대(大) 사이즈도 양이 많지 않으니 대 추천",
    "加辣(매운맛 추가)하면 더 맛있음",
    "좌석 없이 서서 먹는 스타일",
    "시먼딩 방문 시 필수 코스",
  ],
  tags: ["시먼딩", "면선", "필수코스", "길거리음식"],
};

const shifenChicken: FoodItem = {
  id: "food-10",
  name: "스펀 닭날개 볶음밥",
  nameLocal: "十分雞翅包飯",
  category: "street_dessert",
  description: "뼈 없는 닭날개 안에 볶음밥이 가득",
  descriptionFull:
    "스펀 옛거리에서 맛볼 수 있는 독특한 간식. 뼈를 제거한 닭날개 안에 볶음밥을 채워 넣고 숯불에 구운 메뉴로, 바삭한 닭껍질과 고소한 볶음밥의 조합이 일품입니다. 예스폭지 투어 중 스펀에서 꼭 먹어봐야 할 간식입니다.",
  coverImage: img(PH.chickenRice, 800),
  images: [img(PH.chickenRice)],
  location: "스펀 옛거리",
  link: "https://maps.google.com/?q=十分老街+雞翅包飯",
  tips: [
    "하나에 NT$70~90 정도",
    "풍등 날리기 전후로 먹기 좋음",
    "매운맛/오리지널 선택 가능",
  ],
  tags: ["스펀", "간식", "근교투어"],
};

const jiufenPeanut: FoodItem = {
  id: "food-11",
  name: "지우펀 땅콩 아이스크림 롤",
  nameLocal: "九份花生捲冰淇淋",
  category: "street_dessert",
  description: "얇은 전병에 땅콩가루와 아이스크림을 싸 먹는 달콤한 간식",
  descriptionFull:
    "지우펀 올드스트리트 곳곳에서 만날 수 있는 전통 디저트. 얇은 룬빙(潤餅) 위에 땅콩 가루를 듬뿍 깔고 바닐라 아이스크림을 올린 뒤 고수(cilantro)를 넣어 돌돌 말아줍니다. 고수를 빼달라고 할 수도 있으며, 달콤+고소+시원한 조합이 환상적입니다.",
  coverImage: img(PH.peanutIceCream, 800),
  images: [img(PH.peanutIceCream)],
  location: "지우펀 올드스트리트",
  link: "https://maps.google.com/?q=九份+花生捲冰淇淋",
  tips: [
    "고수 싫으면 '不要香菜(부야오샹차이)' 라고 말하기",
    "하나에 NT$40~50 정도",
    "지우펀 어디서나 쉽게 발견 가능",
  ],
  tags: ["지우펀", "디저트", "간식"],
};

const smoothieHouse: FoodItem = {
  id: "food-12",
  name: "스무시하우스 망고빙수",
  nameLocal: "Smoothie House 思慕昔",
  category: "street_dessert",
  description: "융캉제의 시원한 망고빙수, 여름 필수 디저트",
  descriptionFull:
    "융캉제에 위치한 유명 빙수 전문점. 신선한 애플망고를 듬뿍 올린 망고빙수(芒果冰)가 시그니처 메뉴입니다. 우유 얼음을 곱게 갈아 눈처럼 부드러운 빙수 위에 망고 아이스크림과 생망고가 올라갑니다. 4~10월 망고 시즌에 방문하면 가장 달콤한 망고를 맛볼 수 있습니다.",
  coverImage: img(PH.mangoIce, 800),
  images: [img(PH.mangoIce)],
  location: "융캉제 거리",
  link: "https://maps.google.com/?q=思慕昔+永康街",
  tips: [
    "4~10월이 망고 제철 시즌",
    "2인 1빙수도 충분한 양",
    "딘타이펑 본점 근처라 함께 방문하기 좋음",
  ],
  tags: ["융캉제", "빙수", "디저트", "망고"],
};

const taroBalls: FoodItem = {
  id: "food-13",
  name: "타로볼 디저트",
  nameLocal: "芋圓",
  category: "street_dessert",
  description: "쫄깃한 타로볼을 따뜻한 시럽에 담근 전통 디저트",
  descriptionFull:
    "대만 전통 디저트인 타로볼(芋圓)은 타로, 고구마, 녹두 등으로 만든 쫄깃한 경단입니다. 지우펀의 아감이 타로볼(阿柑姨芋圓)이 가장 유명하며, 산 위에서 바다 뷰를 보며 따뜻한 팥죽과 함께 먹을 수 있습니다. 여름에는 빙수 위에 올려 차갑게, 겨울에는 따뜻한 팥탕과 함께 즐깁니다.",
  coverImage: img(PH.taroBalls, 800),
  images: [img(PH.taroBalls)],
  location: "지우펀 아감이 타로볼",
  link: "https://maps.google.com/?q=阿柑姨芋圓+九份",
  tips: [
    "종합(綜合)으로 시키면 타로+고구마+녹두 다 맛볼 수 있음",
    "따뜻한 것(熱) vs 차가운 것(冰) 선택 가능",
    "지우펀 꼭대기 뷰포인트에서 바다 보며 먹기",
  ],
  tags: ["지우펀", "타로볼", "디저트", "필수코스"],
};

const oysterOmelette: FoodItem = {
  id: "food-14",
  name: "굴전 (오아젠)",
  nameLocal: "蚵仔煎",
  category: "street_dessert",
  description: "탱글한 굴과 고구마 전분의 쫀득한 대만식 굴전",
  descriptionFull:
    "대만 야시장의 대표 메뉴인 굴전(蚵仔煎)은 고구마 전분 반죽에 신선한 굴과 계란, 채소를 넣어 철판에 구워냅니다. 쫀득한 전분 반죽과 탱글한 굴의 식감이 특징이며, 달콤한 칠리소스를 뿌려 먹습니다. 닝샤, 라오허제 등 대부분의 야시장에서 맛볼 수 있습니다.",
  coverImage: img(PH.oysterOmelette, 800),
  images: [img(PH.oysterOmelette)],
  location: "닝샤 야시장 / 라오허제 야시장",
  link: "https://maps.google.com/?q=寧夏夜市+蚵仔煎",
  tips: [
    "닝샤 야시장의 '賴記蚵仔煎'이 유명",
    "소스가 달콤하니 매운맛 소스 추가 가능",
    "신선한 굴을 쓰는 곳을 선택할 것",
  ],
  tags: ["야시장", "굴전", "필수코스"],
};

const chayedan: FoodItem = {
  id: "food-15",
  name: "차예단 (茶葉蛋)",
  nameLocal: "茶葉蛋",
  category: "street_dessert",
  description: "편의점에서 쉽게 만나는 대만식 마라 삶은 계란",
  descriptionFull:
    "대만 편의점(세븐일레븐, 패밀리마트)에 가면 입구부터 독특한 향이 나는데, 바로 차예단(茶葉蛋)입니다. 차잎, 팔각, 간장 등으로 우려낸 국물에 계란을 오래 삶아 갈색빛의 마블 무늬가 특징적입니다. 하나에 NT$10~13 정도로 매우 저렴하며, 간식이나 야식으로 제격입니다.",
  coverImage: img(PH.convenienceStore, 800),
  images: [img(PH.convenienceStore)],
  location: "대만 전역 편의점",
  tips: [
    "세븐일레븐, 패밀리마트 어디서나 구매 가능",
    "하나에 NT$10~13으로 가성비 최강",
    "숙소 야식으로도 좋음",
  ],
  tags: ["편의점", "간식", "야식", "가성비"],
};

const pineappleCake: FoodItem = {
  id: "food-16",
  name: "펑리수 (파인애플 케이크)",
  nameLocal: "鳳梨酥",
  category: "street_dessert",
  description: "대만 대표 기념품, 바삭한 쿠키 속 달콤한 파인애플잼",
  descriptionFull:
    "대만 여행 기념품의 대명사인 펑리수(鳳梨酥)는 버터 쿠키 안에 파인애플잼(또는 동과잼)이 들어간 전통 과자입니다. 써니힐스(微熱山丘)의 100% 파인애플잼 펑리수, 이청병점(李製餅家)의 클래식 펑리수가 유명합니다. 디화제에서 시식 후 구매하는 것을 추천합니다.",
  coverImage: img(PH.pineappleCake, 800),
  images: [img(PH.pineappleCake)],
  location: "디화제 / 써니힐스 / 시내 베이커리",
  link: "https://maps.google.com/?q=微熱山丘+台北",
  tips: [
    "써니힐스(微熱山丘)는 무료 시식+차 제공",
    "디화제에서 다양한 브랜드 비교 시식 가능",
    "10개입 기준 NT$300~500",
    "선물용으로 가성비 좋음",
  ],
  tags: ["기념품", "파인애플케이크", "디화제"],
};

/* ================================================================
   카페 & 차 (Cafe & Tea)
   ================================================================ */

const chunshuitang: FoodItem = {
  id: "food-17",
  name: "춘수당 (버블티 원조)",
  nameLocal: "春水堂",
  category: "cafe_tea",
  description: "진주나이차(버블티)를 세상에 처음 만든 원조 찻집",
  descriptionFull:
    "1983년 타이중에서 시작된 춘수당은 버블티(珍珠奶茶)를 발명한 원조 찻집입니다. 쫀득한 타피오카 펄과 진한 밀크티의 조합은 전 세계를 사로잡았습니다. 타이베이 시내에도 여러 지점이 있으며, 오리지널 펄 밀크티 외에도 타로 밀크티, 우롱차 라떼 등 다양한 메뉴를 즐길 수 있습니다.",
  coverImage: img(PH.bubbleTea, 800),
  images: [img(PH.bubbleTea)],
  location: "타이베이 시내 여러 지점",
  link: "https://maps.google.com/?q=春水堂+台北",
  tips: [
    "오리지널 펄 밀크티(珍珠奶茶) 필수",
    "당도/얼음 조절 가능 (미당/소빙 추천)",
    "50嵐, CoCo都可 등 길거리 버블티도 맛있음",
  ],
  tags: ["버블티", "원조", "필수코스"],
};

const aswTeaHouse: FoodItem = {
  id: "food-18",
  name: "ASW Tea House",
  nameLocal: "ASW Tea House",
  category: "cafe_tea",
  description: "디화제의 클래식한 서양식 인테리어 대만 찻집",
  descriptionFull:
    "디화제(대도정) 거리에 위치한 모던 찻집으로, 서양식 인테리어와 대만 전통차의 조화가 매력적입니다. 대만 고산 우롱차, 동방미인차, 일월담 홍차 등 고품질 대만차를 정갈한 티세트로 즐길 수 있습니다. 2층 창가 자리에서 디화제 거리 풍경을 내려다보며 차를 마시는 것이 포인트입니다.",
  coverImage: img(PH.teaHouse, 800),
  images: [img(PH.teaHouse), img(PH.cafeInterior)],
  location: "디화제 거리 2층",
  link: "https://maps.google.com/?q=ASW+Tea+House+迪化街",
  tips: [
    "2층 창가 자리가 뷰 맛집",
    "우롱차 세트 추천 (찻잔+다구 포함)",
    "디화제 산책 중 휴식 코스로 최적",
    "예약 없이 방문 가능하나 주말은 대기 있을 수 있음",
  ],
  tags: ["디화제", "찻집", "우롱차", "감성"],
};

const jiufenTeaHouse: FoodItem = {
  id: "food-19",
  name: "지우펀 전통 찻집",
  nameLocal: "九份茶坊 / 阿妹茶樓",
  category: "cafe_tea",
  description: "탁 트인 산과 바다 뷰에서 즐기는 전통 우롱차",
  descriptionFull:
    "지우펀의 아메이차관(阿妹茶樓), 지우펀차방(九份茶坊) 등 전통 찻집에서는 대만 우롱차를 정통 다도(功夫茶) 방식으로 즐길 수 있습니다. 산비탈에 위치한 찻집에서 탁 트인 바다 풍경과 함께 여유로운 시간을 보내는 것이 지우펀 여행의 하이라이트입니다. 영화 '센과 치히로의 행방불명'의 모델이라는 설이 있는 아메이차관이 가장 유명합니다.",
  coverImage: img(PH.teaHouse, 800),
  images: [img(PH.teaHouse)],
  location: "지우펀 올드스트리트",
  link: "https://maps.google.com/?q=阿妹茶樓+九份",
  tips: [
    "차 세트 1인분 NT$300~ (다구+다과 포함)",
    "해질녘(17~18시)에 방문하면 석양+야경 모두 감상",
    "아메이차관은 대기 있을 수 있으니 여유 있게",
    "동방미인차, 고산 우롱차 추천",
  ],
  tags: ["지우펀", "찻집", "우롱차", "뷰맛집"],
};

/* ================================================================
   야시장 (Night Market)
   ================================================================ */

const ningxia: FoodItem = {
  id: "food-20",
  name: "닝샤 야시장",
  nameLocal: "寧夏夜市",
  category: "nightmarket",
  description: "타이베이역 근처 로컬 야시장, 굴전·지파이·큐브스테이크",
  descriptionFull:
    "타이베이역에서 도보 15분 거리의 로컬 야시장으로 관광객보다 현지인이 더 많은 곳입니다. 규모는 크지 않지만 먹거리의 질이 높아 미슐랭 가이드에도 소개되었습니다. 대왕 닭튀김(지파이), 굴전(오아젠), 큐브 스테이크, 타로볼, 루로우판 등 대만 대표 야시장 음식을 한곳에서 다 맛볼 수 있습니다.",
  coverImage: img(PH.nightMarketFood, 800),
  images: [img(PH.nightMarketFood)],
  location: "닝샤로(寧夏路)",
  link: "https://maps.google.com/?q=寧夏夜市",
  tips: [
    "지파이(鷄排) + 굴전 + 큐브스테이크 3종 필수",
    "현금 준비 필수 (대부분 현금만 받음)",
    "18시 이후 오픈, 20~21시가 피크",
    "타이베이역 숙소라면 걸어서 방문 가능",
  ],
  tags: ["야시장", "필수코스", "로컬", "미슐랭"],
};

const raohe: FoodItem = {
  id: "food-21",
  name: "라오허제 야시장",
  nameLocal: "饒河街觀光夜市",
  category: "nightmarket",
  description: "미슐랭 빕구르망 후추빵이 유명한 대형 야시장",
  descriptionFull:
    "쑹산역 바로 앞에 위치한 타이베이 대표 야시장. 입구에서부터 줄이 길게 늘어선 '후자오빙(胡椒餅, 후추빵)'이 이곳의 시그니처입니다. 화덕에 붙여 구운 바삭한 빵 안에 후추로 양념한 돼지고기가 들어있어 뜨겁고 육즙이 터집니다. 약선 갈비탕, 약초 계란, 크림 소 아이스크림 등도 인기 메뉴입니다.",
  coverImage: img(PH.raohe, 800),
  images: [img(PH.raohe)],
  location: "쑹산역(松山站) 1번 출구",
  link: "https://maps.google.com/?q=饒河街觀光夜市",
  tips: [
    "후자오빙(胡椒餅)은 입구 오른쪽 가게가 원조",
    "대기 30~40분 각오, 하나에 NT$60",
    "화~일 17시 오픈",
    "쑹산역에서 내리면 바로 입구",
  ],
  tags: ["야시장", "후추빵", "미슐랭"],
};

const containerMarket: FoodItem = {
  id: "food-22",
  name: "다다오청 컨테이너 마켓",
  nameLocal: "大稻埕碼頭貨櫃市集",
  category: "nightmarket",
  description: "강변 바람과 야경 속 피자, 맥주를 즐기는 야간 스팟",
  descriptionFull:
    "다다오청 부두(PIER 5) 근처에 주말 저녁마다 열리는 야간 마켓. 강변에 컨테이너로 만든 상점들이 늘어서 있으며, 피자, 소시지, 타코, 수제맥주 등을 즐길 수 있습니다. 단수이 강변의 노을과 야경을 배경으로 맥주 한 잔 하기에 최고의 장소입니다. 디화제 산책 후 석양 시간에 맞춰 방문하는 코스가 인기입니다.",
  coverImage: img(PH.containerMarket, 800),
  images: [img(PH.containerMarket)],
  location: "다다오청 부두 (PIER 5)",
  link: "https://maps.google.com/?q=大稻埕碼頭+貨櫃市集",
  tips: [
    "주말 저녁에만 운영 (금~일)",
    "석양 시간(17~18시)에 맞춰 방문 추천",
    "디화제 → 부두 석양 → 컨테이너 마켓 코스 추천",
    "대만 맥주(台灣啤酒) 한 잔 필수",
  ],
  tags: ["야경", "맥주", "강변", "주말"],
};

const convenienceStore: FoodItem = {
  id: "food-23",
  name: "편의점 야식 투어",
  nameLocal: "7-ELEVEN / 全家",
  category: "nightmarket",
  description: "대만 편의점의 숨겨진 맛: 18일 맥주, 푸딩, 만한대찬",
  descriptionFull:
    "대만의 편의점은 그 자체로 먹거리 천국입니다. 대만 전용 메뉴가 가득하며 숙소 복귀 후 야식으로 즐기기 좋습니다. 타이완 비어 18일 생맥주(18天台灣生啤酒), 과일맛 맥주, 대만 푸딩, 만한대찬(滿漢大餐) 우육면 컵라면, 차예단(차잎 삶은 계란) 등이 대표 메뉴입니다.",
  coverImage: img(PH.convenienceStore, 800),
  images: [img(PH.convenienceStore)],
  location: "대만 전역 (세븐일레븐/패밀리마트)",
  tips: [
    "18일 생맥주(18天)는 냉장칸에서 찾기",
    "만한대찬 우육면 컵라면은 한국에 없는 맛",
    "대만 푸딩(布丁)은 부드럽고 달콤",
    "이지카드로 결제 가능",
  ],
  tags: ["편의점", "야식", "맥주", "가성비"],
};

/* ── export ──────────────────────────────────────────── */
export const foodsData: FoodItem[] = [
  dintaifung,
  timhowan,
  liushandong,
  jinfeng,
  fuhang,
  hongruizhen,
  malaHotpot,
  chenjin,
  azhong,
  shifenChicken,
  jiufenPeanut,
  smoothieHouse,
  taroBalls,
  oysterOmelette,
  chayedan,
  pineappleCake,
  chunshuitang,
  aswTeaHouse,
  jiufenTeaHouse,
  ningxia,
  raohe,
  containerMarket,
  convenienceStore,
];

export const foodCategories = [
  { key: "all" as const, label: "전체" },
  { key: "restaurant" as const, label: "식사" },
  { key: "street_dessert" as const, label: "간식/디저트" },
  { key: "cafe_tea" as const, label: "카페/차" },
  { key: "nightmarket" as const, label: "야시장" },
];
