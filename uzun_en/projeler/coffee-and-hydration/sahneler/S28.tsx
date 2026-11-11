// Sahne 28 — Armstrong 2005: 59 erkek, 11 gün (takvim görseli).
import React from "react";
import { Baslik, Etiket, Hap, ANTON, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// İlk 11 takvim hücresinin merkezleri (görsel koordinatı): 1. satır 7, 2. satır 4
const HUCRE: [number, number][] = [
  [220, 312], [307, 308], [391, 303], [471, 298], [547, 293], [622, 288], [692, 283],
  [225, 390], [310, 385], [396, 379], [474, 373],
];

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t11 = K(2, "eleven");
  const [sa, aa] = pop(t, K(1, "seems"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1800])}>
        {/* sağ kenardaki görsel sınırını kâğıtla örter */}
        <div style={{ position: "absolute", left: 1150, top: -20, width: 900, height: 1120,
          background: "linear-gradient(to right, rgba(246,243,236,0) 0%, rgba(246,243,236,1) 8%, rgba(246,243,236,1) 100%)" }} />
        {/* takvimin başlık satırındaki bozuk rakamları örter */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <polygon points="167,237 806,210 808,241 174,270" fill="#F8F4E8" />
        </svg>
        <Etiket t={t} bas={K(0, "without")} bitis={4.6} capa={[950, 470]} konum={[1060, 190]} metin="NO CAFFEINE FOR DAYS" renk={RENK.mercan} />
        {HUCRE.map(([x, y], i) => {
          const [sc, al] = pop(t, t11 + i * 0.09, 0.4);
          return (
            <div key={i} style={{ position: "absolute", left: x - 25, top: y - 25, width: 50, height: 50, borderRadius: "50%",
              background: RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 28, transform: `scale(${sc})`, opacity: al, border: `3px solid ${RENK.kagitAcik}`,
              boxShadow: "0 4px 10px rgba(48,40,34,0.25)" }}>{i + 1}</div>
          );
        })}
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(2, "Armstrong") - 0.3} />
      <div style={{ position: "absolute", left: 1560, top: 640, transform: `translate(-50%, -50%) scale(${sa})`, opacity: aa }}>
        <Hap metin="SEEMS TO ADAPT" renk={RENK.yesil} />
      </div>
      <Baslik t={t} bas={K(2, "59")} metin="59 MEN" x={1840} y={230} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={t11} metin="11 DAYS" x={1840} y={360} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S28;
