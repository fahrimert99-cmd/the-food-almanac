// Sahne 8 — boş bekleme odası sandalyeleri; "20%+" başlığı ve beş kişilik sıra.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Küçük kişi simgesi (baş + omuz)
const Kisi: React.FC<{ x: number; y: number; renk: string; sc: number; al: number }> = ({ x, y, renk, sc, al }) => (
  <svg width={70} height={80} viewBox="0 0 70 80" style={{ position: "absolute", left: x - 35, top: y - 40, opacity: al,
    transform: `scale(${sc})`, filter: "drop-shadow(0 5px 8px rgba(48,40,34,0.25))" }}>
    <circle cx={35} cy={20} r={15} fill={renk} />
    <path d="M6 76 C6 48 22 40 35 40 C48 40 64 48 64 76 Z" fill={renk} />
  </svg>
);

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMiss = K(0, "easy to miss"), tMore = K(1, "more than"), tFive = K(2, "one in five"), tKnow = K(2, "many may not");
  const [sH, aH] = pop(t, tKnow, 0.5);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [80, 30, 1760]);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={pencere}>
        {/* kazak sandalyesi: kolay gözden kaçar */}
        <Etiket t={t} bas={tMiss} bitis={tMiss + 2.4} capa={[1510, 790]} konum={[1380, 440]} metin="EASY TO MISS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={s.cumleler[1].bas + 0.1} y={150} />
      <Baslik t={t} bas={tMore} metin="OVER 20%" x={1840} y={230} boyut={140} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={tMore + 0.2} metin="OF OLDER ADULTS" x={1840} y={355} boyut={72} renk={RENK.lacivert} hiza="sag" />
      {[0, 1, 2, 3, 4].map((i) => {
        const [sc, al] = pop(t, tFive + 0.12 * i, 0.45);
        const vurgu = t > tFive + 0.8 && i === 0;
        return <Kisi key={i} x={1530 + i * 82} y={470} renk={vurgu ? RENK.mercan : RENK.lacivert} sc={sc} al={al * 0.95} />;
      })}
      <div style={{ position: "absolute", left: 960, top: 225, transform: `translate(-50%, 0) scale(${sH})`, opacity: aH }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
          borderRadius: 999, padding: "10px 28px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 28,
          letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
          <IkonYol ad="soru" boyut={36} renk={RENK.altin} />MANY MAY NOT KNOW IT
        </div>
      </div>
    </>
  );
};

export default S08;
