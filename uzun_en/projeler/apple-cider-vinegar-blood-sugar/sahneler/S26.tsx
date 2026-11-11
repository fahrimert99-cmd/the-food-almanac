// Sahne 26 — yavaş salınım: nişasta bağırsağa yavaş ulaşır; sonda ILLUSTRATIVE keskin tepe / daha düz eğri.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Kart içi eğri yolları (kart koordinatı 0..760 x 0..300)
const KESKIN = "M 40 250 C 160 250 190 40 290 40 C 400 40 440 230 720 244";
const DUZ = "M 40 250 C 190 250 230 130 340 130 C 460 130 500 232 720 246";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYavas = K(0, "slows down");
  const tBag = K(0, "intestine");
  const tGlu = K(0, "glucose");
  const tEgri = K(1, "flatter curve");
  const aKart = eout(ilerle(t, tEgri - 0.1, 0.5));
  const pDuz = eout(ilerle(t, tEgri + 0.2, 1.2));
  const pKeskin = eout(ilerle(t, K(1, "sharp peak") - 0.2, 1.2));
  const [sk, ak] = pop(t, K(1, "sharp peak"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Parcaciklar t={t} bas={tYavas} kaynak={[900, 650]} hedef={[1110, 775]} adet={9} aralik={0.7} omur={1.9} yayilma={80}
          hedefYayilma={20} kavis={-60} boyut={9} tohum="p26" />
        <Etiket t={t} bas={tBag} bitis={tEgri - 0.2} capa={[1115, 770]} konum={[700, 890]} metin="INTO THE INTESTINE" renk={RENK.altin} />
        <Etiket t={t} bas={tGlu} bitis={tEgri - 0.2} capa={[960, 715]} konum={[330, 790]} metin="GLUCOSE, MORE SLOWLY" renk={RENK.yesil} />
      </Kamera>
      {/* meta.baslik: sol üst boş kâğıt */}
      <div style={{ opacity: sol(t, tEgri - 0.2) }}>
        <BaslikBlok t={t} bas={tYavas} satirlar={["SLOWER", "RELEASE"]} x={80} y={190} boyut={112} />
      </div>
      {/* temsili eğri kartı (sayı yok) */}
      {aKart > 0 && (
        <div style={{ position: "absolute", left: 80, top: 110, width: 800, height: 400, opacity: aKart, background: "#FCF8EC",
          border: `3px solid ${RENK.murekkep}`, borderRadius: 24, boxShadow: "0 12px 30px rgba(48,40,34,0.2)",
          transform: `translateY(${(1 - aKart) * 16}px)` }}>
          <svg width={800} height={400} viewBox="0 0 800 400">
            <line x1={50} y1={330} x2={770} y2={330} stroke={RENK.murekkep} strokeWidth={4} />
            <line x1={50} y1={330} x2={50} y2={70} stroke={RENK.murekkep} strokeWidth={4} />
            <text x={62} y={90} style={{ fontFamily: INTER, fontWeight: 700, fontSize: 22, fill: RENK.lacivert }}>blood sugar</text>
            <g transform="translate(10 80)">
              <path d={KESKIN} pathLength={1} fill="none" stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round"
                strokeDasharray={1} strokeDashoffset={1 - pKeskin} />
              <path d={DUZ} pathLength={1} fill="none" stroke={RENK.yesil} strokeWidth={9} strokeLinecap="round"
                strokeDasharray={1} strokeDashoffset={1 - pDuz} />
            </g>
          </svg>
          <div style={{ position: "absolute", left: 520, top: 118, opacity: eout(ilerle(t, tEgri, 0.5)), display: "flex", alignItems: "center",
            gap: 10, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.yesil }} />FLATTER CURVE</div>
          <div style={{ position: "absolute", left: 520, top: 164, opacity: ak, transform: `scale(${sk})`, transformOrigin: "0% 50%",
            display: "flex", alignItems: "center", gap: 10, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5,
            color: RENK.mercan, whiteSpace: "nowrap" }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.mercan }} />SHARP PEAK</div>
          <div style={{ position: "absolute", right: 22, top: 16, background: RENK.lacivert, color: "#fff", borderRadius: 999,
            padding: "4px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 18, letterSpacing: 3 }}>ILLUSTRATIVE</div>
        </div>
      )}
    </>
  );
};

export default S26;
