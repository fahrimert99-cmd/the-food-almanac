// Sahne 32 — NIH önerisi: 50 yaş üstü için güçlendirilmiş gıda ya da takviye.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [560, 180, 1360], [620, 215, 1250]);
  const tKapan = K(1, "Their");
  const [sc, al] = pop(t, K(1, "absorb"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={pencere}>
        <Etiket t={t} bas={K(0, "foods")} bitis={tKapan} capa={[740, 787]} konum={[860, 570]} metin="FORTIFIED FOODS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "supplements")} bitis={tKapan} capa={[1320, 873]} konum={[1200, 740]} metin="SUPPLEMENTS" renk={RENK.yesil} />
      </Kamera>
      <Not t={t} bas={K(0, "National")} bitis={tKapan} metin="NATIONAL INSTITUTES OF HEALTH" x={120} y={150} boyut={26} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={K(0, "fortified")} bitis={tKapan} metin="FORTIFIED FOODS" x={116} y={250} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "supplements")} bitis={tKapan} metin="OR SUPPLEMENTS" x={116} y={350} boyut={88} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "over")} bitis={tKapan} vurgu="50+" not="OVER 50" x={1500} y={180} genislik={300} />
      <div style={{ position: "absolute", left: 960, top: 230, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
        display: "flex", alignItems: "center", gap: 18, background: RENK.kagitAcik, border: `4px solid ${RENK.yesil}`,
        borderRadius: 999, padding: "14px 40px 14px 16px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)", whiteSpace: "nowrap" }}>
        <span style={{ width: 62, height: 62, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={40} renk="#fff" kalinlik={7} />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 44, letterSpacing: 2, color: RENK.koyuYesil }}>B12 USUALLY ABSORBED</span>
      </div>
    </>
  );
};

export default S32;
