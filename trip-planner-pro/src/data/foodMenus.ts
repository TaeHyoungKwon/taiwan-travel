export interface FoodMenuItem {
  id: string;
  name: string;
  nameLocal: string;
  category: "main" | "snack" | "dessert" | "drink";
  description: string;
  descriptionFull: string;
  coverImage: string;
  images: string[];
  soldAt: string;
  link?: string;
  tips: string[];
  tags: string[];
}

const img = (id: string, w = 600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80`;

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
  mianxian: "photo-1582878826629-29b7ad1cdc43",
  chickenRice: "photo-1567620905732-2d1ec7ab7445",
};

export const foodMenusData: FoodMenuItem[] = [
  {
    id: "menu-1",
    name: "샤오롱바오",
    nameLocal: "小籠包",
    category: "main",
    description: "육즙 가득한 대만 대표 딤섬",
    descriptionFull:
      "얇은 만두피 안에 뜨거운 국물과 다진 고기가 들어간 타이베이 대표 메뉴입니다. 생강채와 흑초를 곁들이면 풍미가 더 살아납니다.",
    coverImage: img(PH.xiaolongbao, 800),
    images: [img(PH.xiaolongbao)],
    soldAt: "딘타이펑(鼎泰豐), 팀호완(添好運)",
    tips: ["처음 한 입은 조심(육즙 뜨거움)", "생강+흑초 조합 추천"],
    tags: ["딤섬", "필수"],
  },
  {
    id: "menu-2",
    name: "우육면",
    nameLocal: "牛肉麵",
    category: "main",
    description: "깊은 국물의 대만 소고기 국수",
    descriptionFull:
      "소뼈와 향신료를 오래 끓여 만든 국물에 쫄깃한 면을 더한 대만 국민 음식입니다. 청둔(맑은 국물)과 홍샤오(간장 국물) 스타일이 있습니다.",
    coverImage: img(PH.beefNoodle, 800),
    images: [img(PH.beefNoodle)],
    soldAt: "유산동 우육면(劉山東牛肉麵), 야시장 우육면 노점",
    tips: ["반근반육 옵션 확인", "점심 피크 전 방문 추천"],
    tags: ["국수", "로컬"],
  },
  {
    id: "menu-3",
    name: "루로우판",
    nameLocal: "滷肉飯",
    category: "main",
    description: "짭짤달달한 돼지고기 덮밥",
    descriptionFull:
      "잘게 다진 돼지고기를 간장 베이스로 졸여 밥 위에 올린 메뉴로, 대만에서 가장 일상적인 한 끼입니다.",
    coverImage: img(PH.luroufan, 800),
    images: [img(PH.luroufan)],
    soldAt: "진펑 루로우판(金峰魯肉飯), 닝샤 야시장",
    tips: ["삶은 계란 추가 추천", "소자+국 조합이 무난"],
    tags: ["덮밥", "가성비"],
  },
  {
    id: "menu-4",
    name: "짠두유 + 샤오빙유탸오",
    nameLocal: "鹹豆漿 + 燒餅油條",
    category: "main",
    description: "대만식 아침 대표 조합",
    descriptionFull:
      "짭조름한 따뜻한 두유와 바삭한 유탸오를 함께 먹는 대만 전통 조식 조합입니다.",
    coverImage: img(PH.doujiang, 800),
    images: [img(PH.doujiang)],
    soldAt: "푸항또우장(阜杭豆漿)",
    tips: ["아침 일찍 방문 필수", "화요일 휴무 체크"],
    tags: ["조식", "필수"],
  },
  {
    id: "menu-5",
    name: "총좌빙",
    nameLocal: "蔥抓餅",
    category: "snack",
    description: "겹겹이 바삭한 대만식 파전병",
    descriptionFull:
      "길거리에서 바로 구워주는 인기 간식으로, 계란/치즈 토핑을 추가하면 더 맛있습니다.",
    coverImage: img(PH.scallionPancake, 800),
    images: [img(PH.scallionPancake)],
    soldAt: "천진총좌빙(天津蔥抓餅), 융캉제 길거리 노점",
    tips: ["계란 토핑 기본 추천", "뜨거울 때 바로 먹기"],
    tags: ["길거리음식", "간식"],
  },
  {
    id: "menu-6",
    name: "아종면선",
    nameLocal: "阿宗麵線",
    category: "snack",
    description: "걸쭉한 국물의 대만식 면선",
    descriptionFull:
      "시먼딩 대표 먹거리로 가쓰오 베이스의 진한 국물과 부드러운 면선이 특징입니다.",
    coverImage: img(PH.mianxian, 800),
    images: [img(PH.mianxian)],
    soldAt: "아종면선 본점(시먼딩)",
    tips: ["매운 소스 약간 추가 추천", "좌석 없이 서서 먹는 스타일"],
    tags: ["시먼딩", "소울푸드"],
  },
  {
    id: "menu-7",
    name: "닭날개 볶음밥",
    nameLocal: "雞翅包飯",
    category: "snack",
    description: "닭날개 속 볶음밥을 넣어 구운 별미",
    descriptionFull:
      "스펀 올드스트리트에서 유명한 메뉴로, 숯불 향과 고소한 볶음밥 조합이 매력적입니다.",
    coverImage: img(PH.chickenRice, 800),
    images: [img(PH.chickenRice)],
    soldAt: "스펀 옛거리 노점",
    tips: ["예스폭지 일정 중 간식으로 적합", "매운맛/오리지널 선택"],
    tags: ["근교", "간식"],
  },
  {
    id: "menu-8",
    name: "굴전 (오아젠)",
    nameLocal: "蚵仔煎",
    category: "snack",
    description: "굴과 전분 반죽의 쫀득한 철판요리",
    descriptionFull:
      "야시장에서 가장 대만스러운 메뉴 중 하나입니다. 달콤한 소스와의 조합이 핵심입니다.",
    coverImage: img(PH.oysterOmelette, 800),
    images: [img(PH.oysterOmelette)],
    soldAt: "닝샤 야시장, 라오허제 야시장",
    tips: ["소스가 달면 매운맛 추가", "굴 신선도 좋은 집 선택"],
    tags: ["야시장", "해산물"],
  },
  {
    id: "menu-9",
    name: "망고빙수",
    nameLocal: "芒果冰",
    category: "dessert",
    description: "여름 필수 디저트, 생망고 가득",
    descriptionFull:
      "부드러운 우유 얼음 위에 생망고와 망고 아이스크림을 올린 인기 디저트입니다.",
    coverImage: img(PH.mangoIce, 800),
    images: [img(PH.mangoIce)],
    soldAt: "스무시하우스(Smoothie House), 융캉제 빙수집",
    tips: ["망고 제철(4~10월) 추천", "2인 1빙수도 충분"],
    tags: ["디저트", "융캉제"],
  },
  {
    id: "menu-10",
    name: "타로볼",
    nameLocal: "芋圓",
    category: "dessert",
    description: "쫄깃한 식감의 대만 전통 디저트",
    descriptionFull:
      "타로/고구마 반죽으로 만든 경단 디저트로 따뜻하거나 차갑게 선택할 수 있습니다.",
    coverImage: img(PH.taroBalls, 800),
    images: [img(PH.taroBalls)],
    soldAt: "아감이 타로볼(阿柑姨芋圓), 지우펀 디저트 가게",
    tips: ["종합(綜合)으로 주문하면 여러 맛 가능", "지우펀 뷰포인트에서 먹기"],
    tags: ["지우펀", "전통디저트"],
  },
  {
    id: "menu-11",
    name: "땅콩 아이스크림 롤",
    nameLocal: "花生捲冰淇淋",
    category: "dessert",
    description: "얇은 전병에 땅콩가루+아이스크림 조합",
    descriptionFull:
      "지우펀에서 흔히 볼 수 있는 전통 길거리 디저트로 고수 포함 여부를 선택할 수 있습니다.",
    coverImage: img(PH.peanutIceCream, 800),
    images: [img(PH.peanutIceCream)],
    soldAt: "지우펀 올드스트리트 노점",
    tips: ["고수 제외는 '不要香菜'", "걸으며 먹기 좋은 디저트"],
    tags: ["지우펀", "스트릿디저트"],
  },
  {
    id: "menu-12",
    name: "버블티",
    nameLocal: "珍珠奶茶",
    category: "drink",
    description: "대만에서 시작된 세계적 밀크티",
    descriptionFull:
      "쫀득한 타피오카 펄과 진한 밀크티의 조합. 당도/얼음 조절이 가능해 취향 맞춤 주문이 쉽습니다.",
    coverImage: img(PH.bubbleTea, 800),
    images: [img(PH.bubbleTea)],
    soldAt: "춘수당(春水堂), 50嵐, CoCo都可",
    tips: ["첫 주문은 반당/소빙 추천", "펄 추가 옵션 확인"],
    tags: ["음료", "원조"],
  },
];

export const foodMenuCategories = [
  { key: "all" as const, label: "전체" },
  { key: "main" as const, label: "식사" },
  { key: "snack" as const, label: "간식" },
  { key: "dessert" as const, label: "디저트" },
  { key: "drink" as const, label: "음료" },
];
