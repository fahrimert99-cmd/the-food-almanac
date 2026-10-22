// Sahne 31 — yazarların sonucu; kitap sayfasındaki sahte yazı kartla örtülü.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tK = K(0, "findings");
  const p = eout(ilerle(t, tK - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* kitap sayfaları (yazı kusuru) kâğıt kartla örtülü */}
        <div style={{ position: "absolute", left: 500, top: 480, width: 860, height: 340, opacity: p, background: RENK.kagitAcik,
          border: `4px solid ${RENK.lacivert}`, borderRadius: 18, boxShadow: "0 14px 30px rgba(48,40,34,0.25)" }} />
        <Etiket t={t} bas={K(0, "caffeine")} capa={[1310, 470]} konum={[1230, 320]} metin="COFFEE" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "question")} metin="QUESTION THE NOTION" x={930} y={555} boyut={70} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "caffeine")} metin="CAFFEINE = DIURETIC?" x={930} y={645} boyut={70} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={K(0, "over")} metin="OVER THE LONG TERM" x={930} y={735} boyut={70} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S31;
