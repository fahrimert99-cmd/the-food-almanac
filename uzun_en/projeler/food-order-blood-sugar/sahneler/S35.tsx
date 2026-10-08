// Sahne 35 — Kuwata 2016 (Japonya): pirinçten önce balık/et → mide daha yavaş boşaldı, GLP-1 daha yüksek, kan şekeri yükselişi daha küçük.
// Düzen: sol üst boşlukta kaynak + başlık + yatay üç sonuç kartı; yiyeceklerde sıra etiketleri; midede "yavaş" halkası + saat.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, IkonYol, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, einout, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

type Simge = "saat" | "hormon" | "glukoz";
const HALKA_N = 32;
// midenin çevresindeki elips (görsel koordinatı): mide, yemek borusu ve onikiparmak ucu içinde kalır
const HALKA = { cx: 1480, cy: 300, rx: 226, ry: 188 };

// kart simgesi: saat (mide), parçacıklar (GLP-1), altıgen (glukoz)
const KartSimgesi: React.FC<{ ad: Simge }> = ({ ad }) => {
  if (ad === "saat") return <IkonYol ad="saat" boyut={30} renk="#fff" kalinlik={5} />;
  if (ad === "hormon") {
    return (
      <svg width={30} height={30} viewBox="0 0 30 30">
        {[[9, 19, 5], [20, 11, 5.5], [21, 23, 3.5], [8, 7, 3]].map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="#fff" />)}
      </svg>
    );
  }
  const alt = Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 3) * k + Math.PI / 6;
    return `${(15 + 11 * Math.cos(a)).toFixed(1)},${(15 + 11 * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return <svg width={30} height={30} viewBox="0 0 30 30"><polygon points={alt} fill="none" stroke="#fff" strokeWidth={4} strokeLinejoin="round" /></svg>;
};

// sonuç kartı: üstte ölçüm, altta Anton sonuç, sağda yön oku
const SonucKarti: React.FC<{
  t: number; bas: number; x: number; y: number; w: number; olcu: string; sonuc: string; simge: Simge; zemin: string;
  yon?: "yukari" | "asagi";
}> = ({ t, bas, x, y, w, olcu, sonuc, simge, zemin, yon }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  const pOk = eout(ilerle(t, bas + 0.35, 0.5));
  const h = 122;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: w, height: h, opacity: al, transform: `scale(${sc})`,
      transformOrigin: "50% 100%", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 22,
      boxShadow: "0 10px 26px rgba(48,40,34,0.16)", boxSizing: "border-box" }}>
      <div style={{ position: "absolute", left: 16, top: 14, width: 44, height: 44, borderRadius: "50%", background: zemin,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <KartSimgesi ad={simge} />
      </div>
      <div style={{ position: "absolute", left: 72, top: 23, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 1.5,
        color: RENK.lacivert, whiteSpace: "nowrap" }}>{olcu}</div>
      <Baslik t={t} bas={bas + 0.2} metin={sonuc} x={18} y={86} boyut={52} renk={RENK.yesil} />
      {yon && pOk > 0 && (
        <svg width={44} height={56} style={{ position: "absolute", right: 22, top: 52, opacity: pOk,
          transform: `translateY(${(1 - pOk) * (yon === "yukari" ? 12 : -12)}px)` }}>
          <g transform={yon === "asagi" ? "rotate(180 22 28)" : undefined}>
            <line x1={22} y1={50} x2={22} y2={14} stroke={RENK.yesil} strokeWidth={7} strokeLinecap="round" />
            <polygon points="6,22 22,3 38,22" fill={RENK.yesil} />
          </g>
        </svg>
      )}
    </div>
  );
};

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [20, 10, 1880], [70, 30, 1780]);
  // 1. cümle
  const tJapan = K(0, "from Japan"), tTest = K(0, "tested exactly"), tBu = K(0, "exactly this");
  // 2. cümle
  const tT2 = K(1, "type 2 diabetes"), tBalik = K(1, "fish or meat"), tPirinc = K(1, "before rice");
  const tMide = K(1, "stomachs emptied"), tGlp = K(1, "GLP-1 levels"), tKs = K(1, "rise in blood sugar");
  const tKarsi = K(1, "than when");
  const etiketSon = tGlp - 0.45;
  const [sT, aT] = pop(t, tT2 - 0.05, 0.5);
  // midenin çevresinde yavaş halka
  const pHalka = einout(ilerle(t, tMide, 1.2));
  const donus = Math.max(0, t - tMide) * 0.1;
  const kartX = [64, 462, 860];
  return (
    <>
      <Kamera gorsel="tam/35" pencere={pencere}>
        <Etiket t={t} bas={tBalik - 0.05} bitis={etiketSon} capa={[600, 702]} konum={[560, 546]} metin="FISH OR MEAT FIRST"
          renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tPirinc} bitis={etiketSon} capa={[1420, 622]} konum={[1196, 520]} metin="THEN RICE" renk={RENK.mercan}
          boyut={26} />
        {pHalka > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            {Array.from({ length: HALKA_N }, (_, k) => k).filter((k) => k / HALKA_N < pHalka).map((k) => {
              // kesikler elips üzerinde yavaşça döner
              const a0 = (2 * Math.PI * k) / HALKA_N - Math.PI / 2 + donus, a1 = a0 + ((2 * Math.PI) / HALKA_N) * 0.55;
              const nx = (a: number) => (HALKA.cx + HALKA.rx * Math.cos(a)).toFixed(1), ny = (a: number) => (HALKA.cy + HALKA.ry * Math.sin(a)).toFixed(1);
              const d = `M ${nx(a0)} ${ny(a0)} A ${HALKA.rx} ${HALKA.ry} 0 0 1 ${nx(a1)} ${ny(a1)}`;
              return <path key={k} d={d} fill="none" stroke={RENK.lacivert} strokeWidth={5} strokeLinecap="round" opacity={0.6} />;
            })}
          </svg>
        )}
        <Ikon t={t} bas={tMide + 0.2} ad="saat" x={1698} y={349} boyut={80} zemin={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? "Kuwata et al. · Diabetologia · 2016"} />
      {/* başlık bloğu */}
      <Baslik t={t} bas={tJapan - 0.1} metin="A STUDY FROM JAPAN" x={66} y={160} boyut={26} renk={RENK.altin} font="inter" aralik={5} />
      {aT > 0 && (
        <div style={{ position: "absolute", left: 482, top: 160, transform: `translateY(-50%) scale(${sT})`, transformOrigin: "0% 50%",
          opacity: aT }}>
          <Hap metin="TYPE 2 DIABETES" renk={RENK.mercan} boyut={22} />
        </div>
      )}
      <Baslik t={t} bas={tTest} metin="FISH" x={62} y={244} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBu - 0.1} metin="BEFORE RICE" x={62 + 189} y={244} boyut={104} renk={RENK.koyuYesil} />
      {/* sonuçlar: balık/et önce */}
      <SonucKarti t={t} bas={tMide} x={kartX[0]} y={322} w={372} olcu="STOMACH EMPTYING" sonuc="SLOWER" simge="saat" zemin={RENK.lacivert} />
      <SonucKarti t={t} bas={tGlp - 0.05} x={kartX[1]} y={322} w={372} olcu="GLP-1 LEVELS" sonuc="HIGHER" simge="hormon"
        zemin={RENK.mercan} yon="yukari" />
      <SonucKarti t={t} bas={tKs - 0.05} x={kartX[2]} y={322} w={372} olcu="BLOOD SUGAR RISE" sonuc="SMALLER" simge="glukoz"
        zemin={RENK.altin} yon="asagi" />
      <Not t={t} bas={tKarsi} metin="compared with eating the rice first" x={68} y={462} boyut={26} renk={RENK.gri} agirlik={600} />
    </>
  );
};

export default S35;
