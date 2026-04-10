import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Star, Filter, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Category =
  | "현지식당"
  | "카페"
  | "간식"
  | "빙수"
  | "딤섬"
  | "훠궈"
  | "우육면"
  | "사천요리"
  | "철판요리"
  | "이자카야"
  | "술집/맥주"
  | "위스키"
  | "과일"
  | "마사지"
  | "쇼핑"
  | "야시장"
  | "고궁근처";

interface Place {
  name: string;
  desc: string;
  area: string;
  cat: Category;
  star: number;
  lat: number;
  lng: number;
  url: string;
}

const CAT_META: Record<Category, { icon: string; color: string }> = {
  현지식당: { icon: "🍱", color: "#e74c3c" },
  카페: { icon: "☕", color: "#795548" },
  간식: { icon: "🍩", color: "#e67e22" },
  빙수: { icon: "🍧", color: "#9b59b6" },
  딤섬: { icon: "🥟", color: "#f39c12" },
  훠궈: { icon: "🥘", color: "#c0392b" },
  우육면: { icon: "🍜", color: "#d35400" },
  사천요리: { icon: "🌶️", color: "#e74c3c" },
  철판요리: { icon: "🥩", color: "#8e44ad" },
  이자카야: { icon: "🍺", color: "#2c3e50" },
  "술집/맥주": { icon: "🍻", color: "#34495e" },
  위스키: { icon: "🥃", color: "#7f8c8d" },
  과일: { icon: "🥭", color: "#27ae60" },
  마사지: { icon: "💆", color: "#16a085" },
  쇼핑: { icon: "🌂", color: "#2980b9" },
  야시장: { icon: "🏮", color: "#c0392b" },
  고궁근처: { icon: "🏛️", color: "#607d8b" },
};

const places: Place[] = [
  // 시먼딩 현지식당
  { name: "시먼누들 루로판 족발", desc: "계란돼지덮밥+족발 24시간 맛집", area: "시먼딩", cat: "현지식당", star: 1, lat: 25.0416973, lng: 121.505735, url: "https://maps.app.goo.gl/gZicz1r6ZCh72R638" },
  { name: "루로판 현지식 (廖嬌米粉湯)", desc: "새벽4시까지", area: "시먼딩", cat: "현지식당", star: 0, lat: 25.0431883, lng: 121.5046008, url: "https://maps.app.goo.gl/daJuydnfp9QV6ewe8" },
  { name: "시먼딩 족발국수 24시", desc: "24시간 족발국수", area: "시먼딩", cat: "현지식당", star: 0, lat: 25.0419587, lng: 121.5058036, url: "https://maps.app.goo.gl/doVCwzoNjp8UYTXN6" },
  { name: "일갑자찬음 (一甲子餐飲)", desc: "동파육 밥", area: "시먼딩", cat: "현지식당", star: 0, lat: 25.0404022, lng: 121.5021711, url: "https://maps.app.goo.gl/Tpgb5EhxRPRKcoXP7" },
  { name: "삼미식당", desc: "연어초밥", area: "시먼딩", cat: "현지식당", star: 0, lat: 25.039885, lng: 121.5026538, url: "https://maps.app.goo.gl/fEEe7Re2z3G7xivQ9" },
  { name: "메인역 물만두 마장면", desc: "이연복 맛집", area: "타이베이역", cat: "현지식당", star: 0, lat: 25.0462353, lng: 121.5188985, url: "https://maps.app.goo.gl/gSZ15x8vqntyAA477" },
  // 카페
  { name: "85도씨 커피 (85°C)", desc: "소금커피 salt caffe", area: "시먼딩", cat: "카페", star: 1, lat: 25.0416007, lng: 121.5072076, url: "https://maps.app.goo.gl/hRGe99UVmcD2FngD9" },
  // 간식
  { name: "우유도넛", desc: "시먼 간식 필수!", area: "시먼딩", cat: "간식", star: 1, lat: 25.0429189, lng: 121.5058363, url: "https://maps.app.goo.gl/fYXiXRgrz7UEvhXu5" },
  { name: "행복당 (幸福堂)", desc: "흑당버블티", area: "시먼딩", cat: "간식", star: 0, lat: 25.0433824, lng: 121.5073684, url: "https://maps.app.goo.gl/S39kNaxVMmsHPRCo7" },
  { name: "아종면선 (阿宗麵線)", desc: "곱창국수", area: "시먼딩", cat: "간식", star: 0, lat: 25.0432921, lng: 121.5077098, url: "https://maps.app.goo.gl/k3exaDxHRddsydij7" },
  // 빙수
  { name: "삼형매 빙수 (三兄妹雪花冰)", desc: "시먼딩 빙수", area: "시먼딩", cat: "빙수", star: 0, lat: 25.0418099, lng: 121.5068608, url: "https://maps.app.goo.gl/9hMVWtQnsHwqvF1P9" },
  { name: "스무시 빙수 (思慕昔本館)", desc: "융칸제 빙수", area: "융칸제", cat: "빙수", star: 0, lat: 25.0325168, lng: 121.5298231, url: "https://maps.app.goo.gl/Yexi5Qq1FEQvz6YG7" },
  // 딤섬
  { name: "금품차루 (金品茶樓)", desc: "딤섬 우육면 새우볶음밥 동파육 맛집", area: "중산역", cat: "딤섬", star: 1, lat: 25.0548016, lng: 121.5236296, url: "https://maps.app.goo.gl/bPNaD94UU6fGxhzd7" },
  { name: "항주쇼롱탕포 (杭州小籠湯包)", desc: "현지식당 - 중정기념당 옆", area: "중정기념당", cat: "딤섬", star: 1, lat: 25.0340787, lng: 121.5237494, url: "https://maps.app.goo.gl/8CGnbmw6bQyvU7MC7" },
  { name: "덴쉐이러우 (點水樓)", desc: "대만식 음식 모두 즐기는 곳 예약필수", area: "타이베이역", cat: "딤섬", star: 0, lat: 25.0439535, lng: 121.5139994, url: "https://maps.app.goo.gl/VntHhR2V3wdnGAhMA" },
  // 훠궈
  { name: "Wulao Pot (無老鍋)", desc: "고급 훠궈 (이연복&정지선)", area: "시먼딩", cat: "훠궈", star: 1, lat: 25.0424838, lng: 121.5088805, url: "https://maps.app.goo.gl/DiyYLr8qsCiVecPaA" },
  { name: "딩왕 (鼎王)", desc: "고급 훠궈 (슈퍼주니어)", area: "시먼딩", cat: "훠궈", star: 0, lat: 25.042735, lng: 121.5079902, url: "https://maps.app.goo.gl/rCb8uGtJgyHRcKB96" },
  { name: "원딩 (問鼎)", desc: "고급 훠궈", area: "시먼딩", cat: "훠궈", star: 0, lat: 25.0434808, lng: 121.5062407, url: "https://maps.app.goo.gl/r3zxCDP7EBCLP1oP9" },
  { name: "Want Hotpot", desc: "마라탕 닭고기탕 고급훠궈 예약필수", area: "시먼딩", cat: "훠궈", star: 1, lat: 25.0524675, lng: 121.5333119, url: "https://maps.app.goo.gl/cH2rMLjTsWRxZWxG8" },
  { name: "황지아 훠궈 (皇家)", desc: "무제한 훠궈", area: "시먼딩", cat: "훠궈", star: 0, lat: 25.0387744, lng: 121.506892, url: "https://maps.app.goo.gl/ipcaZayAosVURhUL7" },
  { name: "구어바훠궈", desc: "무제한 가성비 훠궈", area: "시먼딩", cat: "훠궈", star: 0, lat: 25.0429319, lng: 121.5056921, url: "https://maps.app.goo.gl/o4YT2BHjc71A6e4x7" },
  { name: "쭈지엔 1인팟 (築間)", desc: "가성비 훠궈 강추!", area: "시먼딩", cat: "훠궈", star: 2, lat: 25.0450004, lng: 121.5052356, url: "https://maps.app.goo.gl/TTRvvyeLcgDqV1st5" },
  // 우육면
  { name: "우점 니우디엔 (牛店)", desc: "미슐랭 3년 연속", area: "시먼딩", cat: "우육면", star: 1, lat: 25.0425721, lng: 121.5048228, url: "https://maps.app.goo.gl/FuivJfH6W5YGPxfn6" },
  { name: "홍사부 (洪師父)", desc: "대만 우육면대회 1등", area: "신이구", cat: "우육면", star: 0, lat: 25.0549739, lng: 121.5365087, url: "https://maps.app.goo.gl/ea8kcP52rc2RNhWm7" },
  { name: "토마토 우육면", desc: "현지식당 추천", area: "신이구", cat: "우육면", star: 1, lat: 25.0536873, lng: 121.5351538, url: "https://maps.app.goo.gl/sGiBSVUN6vmb7UCr9" },
  { name: "푸홍 우육면 24시", desc: "24시간 우육면", area: "시먼딩", cat: "우육면", star: 0, lat: 25.0476197, lng: 121.5077358, url: "https://maps.app.goo.gl/iZr6ivycvHumgvC36" },
  // 사천요리
  { name: "진천미 (陳真味)", desc: "시먼딩 사천요리", area: "시먼딩", cat: "사천요리", star: 1, lat: 25.043541, lng: 121.504664, url: "https://maps.app.goo.gl/npV2YxD86SxBnuJH7" },
  { name: "키키레스토랑 (KIKI)", desc: "101타워 근처", area: "101타워", cat: "사천요리", star: 0, lat: 25.0354713, lng: 121.5660703, url: "https://maps.app.goo.gl/MddFgM6b6B8CaXGb8" },
  // 철판요리
  { name: "주조자 철판 (鑄造者)", desc: "시먼 24시 마감 철판요리", area: "시먼딩", cat: "철판요리", star: 2, lat: 25.04319, lng: 121.5062298, url: "https://maps.app.goo.gl/Va67Lu1TTcsbmHkcA" },
  { name: "근래철판구이", desc: "시먼 20:30 마감", area: "시먼딩", cat: "철판요리", star: 0, lat: 25.0450433, lng: 121.5052293, url: "https://maps.app.goo.gl/gSbwGNgPPDAWSMg58" },
  // 이자카야
  { name: "야키토리 이자카야", desc: "시먼 이자카야 추천", area: "시먼딩", cat: "이자카야", star: 2, lat: 25.041493, lng: 121.505114, url: "https://maps.app.goo.gl/GvEfoqpKkp2sBZqN8" },
  { name: "사케 꼬치 이자카야", desc: "사케 + 꼬치", area: "시먼딩", cat: "이자카야", star: 0, lat: 25.0464563, lng: 121.5049674, url: "https://maps.app.goo.gl/jeP1nXeUArmrmZnk8" },
  { name: "분위기 이자카야", desc: "분위기 좋은 곳", area: "시먼딩", cat: "이자카야", star: 0, lat: 25.045262, lng: 121.5029496, url: "https://maps.app.goo.gl/Y4cczpWbXFyqJVDS8" },
  // 술집/맥주
  { name: "빈티지 이자카야", desc: "18일 병맥", area: "시먼딩", cat: "술집/맥주", star: 1, lat: 25.0441404, lng: 121.5038736, url: "https://maps.app.goo.gl/SJmtB5Z7b8UF2Z2Z7" },
  { name: "18일 생맥주", desc: "생맥주 전문", area: "시먼딩", cat: "술집/맥주", star: 0, lat: 25.0439829, lng: 121.504625, url: "https://maps.app.goo.gl/Sd2mYgF65zBrzGTA9" },
  { name: "시먼 칵테일 맥주집", desc: "분위기 좋은 곳", area: "시먼딩", cat: "술집/맥주", star: 0, lat: 25.0451994, lng: 121.5057409, url: "https://maps.app.goo.gl/miDvRxmBmjSU32b49" },
  { name: "따다오청 야시장", desc: "강가에서 맥주마시고 노는 야시장", area: "따다오청", cat: "술집/맥주", star: 1, lat: 25.0561283, lng: 121.5074276, url: "https://maps.app.goo.gl/o3xwvFzxZhvJoR2f9" },
  { name: "시먼홍러우 야장", desc: "맥주마시는 야장", area: "시먼딩", cat: "술집/맥주", star: 1, lat: 25.0420139, lng: 121.5068592, url: "https://maps.app.goo.gl/cgA7WrsaGcAKR6EX7" },
  { name: "러차우 100원술집", desc: "18데이즈 병맥주", area: "러차우", cat: "술집/맥주", star: 1, lat: 25.0482709, lng: 121.5290086, url: "https://maps.app.goo.gl/NrGGmfUhqPQSj48w5" },
  // 위스키
  { name: "가품양주", desc: "위스키 구매처", area: "융칸제", cat: "위스키", star: 0, lat: 25.0294559, lng: 121.5294574, url: "https://maps.app.goo.gl/wc8QRrNti56wdWKM9" },
  { name: "카발란 위스키 매장", desc: "시먼에서 카발란 사기", area: "시먼딩", cat: "위스키", star: 0, lat: 25.0438693, lng: 121.5073407, url: "https://maps.app.goo.gl/2ogDQU6h2J6vR7M29" },
  // 과일
  { name: "시먼 과일집", desc: "까르푸 건너편 오후8시", area: "시먼딩", cat: "과일", star: 0, lat: 25.0367629, lng: 121.5072633, url: "https://maps.app.goo.gl/55cmSGAxezPd4Hij9" },
  { name: "金合水果店", desc: "오후9시30분", area: "시먼딩", cat: "과일", star: 0, lat: 25.0401028, lng: 121.5010526, url: "https://maps.app.goo.gl/VLfwwBTnyTjXYzh18" },
  { name: "青品蔬菓行", desc: "오후8시", area: "시먼딩", cat: "과일", star: 0, lat: 25.039912, lng: 121.503096, url: "https://maps.app.goo.gl/bUc5sEopVcajGWLX9" },
  { name: "四季農産行", desc: "오후11시 메인역-시먼 중간", area: "타이베이역", cat: "과일", star: 0, lat: 25.0450777, lng: 121.5098559, url: "https://maps.app.goo.gl/CNan7sdAJs41Eg8a8" },
  // 마사지
  { name: "진우맨 쿵푸마사지 1호점", desc: "발마사지 버스투어 피켓 5%할인(현금)", area: "시먼딩", cat: "마사지", star: 0, lat: 25.044335, lng: 121.5080965, url: "https://maps.app.goo.gl/CPbEKwBNiASEFrDN7" },
  { name: "진우맨 쿵푸마사지 2호점", desc: "5%할인(현금) 카드시 +10%", area: "시먼딩", cat: "마사지", star: 0, lat: 25.0454775, lng: 121.5053742, url: "https://maps.app.goo.gl/4JW5VMYt4rfReScUA" },
  { name: "승지도 마사지", desc: "5%할인 타이베이역 근처", area: "타이베이역", cat: "마사지", star: 0, lat: 25.0492901, lng: 121.5233932, url: "https://maps.app.goo.gl/48sRw5zmSneawWNr6" },
  { name: "노아 마사지", desc: "10%할인 중산 리젠트호텔 근처", area: "중산", cat: "마사지", star: 0, lat: 25.0548348, lng: 121.5237692, url: "https://maps.app.goo.gl/FkcmaGdgLhMDo2XS6" },
  // 쇼핑
  { name: "우산왕", desc: "시먼 우산 가게", area: "시먼딩", cat: "쇼핑", star: 0, lat: 25.0446814, lng: 121.5070636, url: "https://maps.app.goo.gl/QfdriLxygpK37qdE7" },
  // 스린야시장
  { name: "스린 분위기 술집", desc: "사장님 유쾌! (음식은 안팔아요)", area: "스린야시장", cat: "야시장", star: 1, lat: 25.0892056, lng: 121.5256003, url: "https://maps.app.goo.gl/MFBGkftf3iEacnYt8" },
  { name: "스린 지파이 (鷄排)", desc: "그 유명한 스린 지파이!", area: "스린야시장", cat: "야시장", star: 0, lat: 25.0880948, lng: 121.5239774, url: "https://maps.app.goo.gl/uu8XehhZNgzKJLyQ9" },
  { name: "스린 대만식 스테이크", desc: "밑에 면+위에 고기 스타일", area: "스린야시장", cat: "야시장", star: 0, lat: 25.0893296, lng: 121.5243812, url: "https://maps.app.goo.gl/f7nKySNQ9Cj5qn9i8" },
  { name: "스린 태국음식", desc: "대만 태국음식 맛있고 싸요!", area: "스린야시장", cat: "야시장", star: 0, lat: 25.0897584, lng: 121.5255471, url: "https://maps.app.goo.gl/uVopgYna3rasgKMVA" },
  { name: "스린 대만식 꼬치", desc: "진짜 추천! 맥주랑 잘어울려요", area: "스린야시장", cat: "야시장", star: 1, lat: 25.1006857, lng: 121.5226582, url: "https://maps.app.goo.gl/v7QjaihjRMJE93Vc7" },
  // 닝샤야시장
  { name: "닝샤 또우화 (豆花)", desc: "대만 필수 디저트! 닝샤 최고", area: "닝샤야시장", cat: "야시장", star: 1, lat: 25.0569144, lng: 121.5150546, url: "https://maps.app.goo.gl/LbzTbYkAkXGjJS1GA" },
  { name: "닝샤 미슐랭 굴전", desc: "미슐랭 받은 굴전! 한국과 다른 스타일", area: "닝샤야시장", cat: "야시장", star: 0, lat: 25.0563594, lng: 121.5152754, url: "https://maps.app.goo.gl/sYn4dgvisbG2cTVQ7" },
  { name: "닝샤 꿀토마토", desc: "꼭 드셔보세요!", area: "닝샤야시장", cat: "야시장", star: 0, lat: 25.061311, lng: 121.5141822, url: "https://maps.app.goo.gl/v1gpcPxSMvEXw1zo8" },
  { name: "닝샤 오징어+오이", desc: "줄 엄청 길지만 진짜 맛있어요!", area: "닝샤야시장", cat: "야시장", star: 1, lat: 25.0561877, lng: 121.515222, url: "https://maps.app.goo.gl/oUe92ZH4jr7qyVzM9" },
  // 고궁 근처
  { name: "고궁정화", desc: "동파육, 우육면 정말 맛있어요", area: "고궁", cat: "고궁근처", star: 0, lat: 25.1038016, lng: 121.5564824, url: "https://maps.app.goo.gl/p5a5CL8PhCpGcoTZ6" },
  { name: "딤섬키친", desc: "딤섬 뷔페집!", area: "고궁", cat: "고궁근처", star: 0, lat: 25.0966178, lng: 121.5327578, url: "https://maps.app.goo.gl/qaV6kJjqxcqjkrrh8" },
];

const ALL_CATS = [...new Set(places.map((p) => p.cat))];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const FoodMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [activeCat, setActiveCat] = useState<string>("all");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showList, setShowList] = useState(false);
  const [ready, setReady] = useState(false);

  // Load Leaflet CSS + JS dynamically
  useEffect(() => {
    if (document.getElementById("leaflet-css")) {
      setReady(true);
      return;
    }
    const link = document.createElement("link");
    link.id = "leaflet-css";
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, []);

  // Init map
  useEffect(() => {
    if (!ready || !mapRef.current || leafletMap.current) return;
    const L = (window as any).L;
    if (!L) return;

    const map = L.map(mapRef.current, { zoomControl: false }).setView(
      [25.048, 121.515],
      13
    );
    L.control.zoom({ position: "topright" }).addTo(map);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution: "&copy; OSM &copy; CARTO",
        maxZoom: 19,
      }
    ).addTo(map);

    leafletMap.current = map;
    renderMarkers(map, "all");

    return () => {
      map.remove();
      leafletMap.current = null;
    };
  }, [ready]);

  // Filter markers when category changes
  useEffect(() => {
    if (!leafletMap.current) return;
    renderMarkers(leafletMap.current, activeCat);
  }, [activeCat]);

  function renderMarkers(map: any, cat: string) {
    const L = (window as any).L;
    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];

    const filtered =
      cat === "all" ? places : places.filter((p) => p.cat === cat);

    filtered.forEach((p) => {
      const meta = CAT_META[p.cat];
      const size = p.star >= 2 ? 36 : 30;
      const icon = L.divIcon({
        className: "custom-marker",
        html: `<div style="
          background:${meta.color};
          width:${size}px;height:${size}px;
          border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          font-size:${p.star >= 2 ? 18 : 15}px;
          border:${p.star >= 2 ? "3px solid #fbbf24" : "2px solid white"};
          box-shadow:0 2px 6px rgba(0,0,0,0.3);
          cursor:pointer;
        ">${meta.icon}</div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });

      const starStr = p.star > 0 ? "⭐".repeat(p.star) + " " : "";
      const marker = L.marker([p.lat, p.lng], { icon }).addTo(map);
      marker.bindPopup(`
        <div style="min-width:180px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
          <div style="font-weight:700;font-size:14px;margin-bottom:3px">${starStr}${p.name}</div>
          <div style="font-size:12px;color:#666;margin-bottom:4px">${p.desc}</div>
          <div style="font-size:11px;color:#999;margin-bottom:6px">📍 ${p.area}</div>
          ${
            p.url
              ? `<a href="${p.url}" target="_blank" rel="noopener" style="
                  display:inline-block;padding:5px 14px;
                  background:#4285f4;color:#fff;
                  border-radius:6px;text-decoration:none;
                  font-size:12px;font-weight:600;
                ">Google Maps에서 보기</a>`
              : ""
          }
        </div>
      `);

      marker.on("click", () => setSelectedPlace(p));
      markersRef.current.push(marker);
    });

    if (filtered.length > 0) {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.15));
    }
  }

  function flyTo(p: Place) {
    if (!leafletMap.current) return;
    leafletMap.current.setView([p.lat, p.lng], 17);
    const marker = markersRef.current.find(
      (m: any) =>
        m.getLatLng().lat === p.lat && m.getLatLng().lng === p.lng
    );
    if (marker) marker.openPopup();
    setSelectedPlace(p);
    setShowList(false);
  }

  const filtered =
    activeCat === "all" ? places : places.filter((p) => p.cat === activeCat);

  return (
    <div className="relative flex flex-col" style={{ height: "calc(100vh - 52px)" }}>
      {/* Category filter bar */}
      <div className="flex items-center gap-2 overflow-x-auto px-3 py-2 bg-background border-b border-border shrink-0">
        <button
          onClick={() => setActiveCat("all")}
          className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
            activeCat === "all"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          전체 ({places.length})
        </button>
        {ALL_CATS.map((cat) => {
          const meta = CAT_META[cat];
          const count = places.filter((p) => p.cat === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap ${
                activeCat === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {meta.icon} {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Map */}
      <div className="relative flex-1">
        <div ref={mapRef} className="absolute inset-0 z-0" />

        {/* List toggle button (mobile) */}
        <button
          onClick={() => setShowList(!showList)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-1.5 rounded-full bg-background px-4 py-2.5 text-sm font-semibold shadow-lg border border-border sm:hidden"
        >
          {showList ? (
            <>
              <X className="h-4 w-4" /> 지도 보기
            </>
          ) : (
            <>
              <Filter className="h-4 w-4" /> 목록 보기 ({filtered.length})
            </>
          )}
        </button>

        {/* Side list (desktop) / Bottom sheet (mobile) */}
        <div
          className={`
            absolute z-[1000] bg-background/95 backdrop-blur-md overflow-y-auto border-border
            sm:top-0 sm:left-0 sm:bottom-0 sm:w-72 sm:border-r sm:block
            ${showList ? "bottom-0 left-0 right-0 h-[60%] border-t rounded-t-2xl" : "hidden sm:block"}
          `}
        >
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md px-3 py-2 border-b border-border">
            <p className="text-xs text-muted-foreground font-medium">
              {activeCat === "all" ? "전체" : `${CAT_META[activeCat as Category]?.icon} ${activeCat}`} {filtered.length}곳
            </p>
          </div>
          {filtered.map((p, i) => {
            const meta = CAT_META[p.cat];
            const isSelected = selectedPlace?.name === p.name;
            return (
              <button
                key={i}
                onClick={() => flyTo(p)}
                className={`w-full text-left flex items-start gap-2.5 px-3 py-2.5 border-b border-border/50 transition-colors ${
                  isSelected ? "bg-primary/10" : "hover:bg-muted/50"
                }`}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-content text-sm"
                  style={{ background: `${meta.color}20` }}
                >
                  <span className="mx-auto">{meta.icon}</span>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1 text-sm font-semibold text-foreground truncate">
                    {p.star > 0 && (
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400 flex-shrink-0" />
                    )}
                    {p.star >= 2 && (
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400 flex-shrink-0" />
                    )}
                    <span className="truncate">{p.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-muted-foreground/70">
                      📍 {p.area}
                    </span>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] text-blue-500 hover:underline flex items-center gap-0.5"
                      >
                        <ExternalLink className="h-2.5 w-2.5" />
                        Maps
                      </a>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodMap;
