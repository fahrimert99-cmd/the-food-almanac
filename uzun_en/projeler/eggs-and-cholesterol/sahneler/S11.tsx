// Sahne 11 — "evet" varsayımı ve 2010'daki 300 mg sınırı (rozetler sol üst boşlukta).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2010 = K(1, "2010");
  const cik = t2010 - 0.2;
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [120, 90, 1700])}>
        {/* saat kadranındaki sahte yazı yaması */}
        <div style={{ position: "absolute", left: 1262, top: 722, width: 50, height: 28, borderRadius: 14, background: "#F2EBD8" }} />
        <Etiket t={t} bas={K(2, "cholesterol")} capa={[700, 700]} konum={[740, 560]} metin="EGGS" renk={RENK.altin} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "decades")} bitis={cik} metin="FOR DECADES" x={100} y={250} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "assumed")} bitis={cik} metin="DOCTORS ASSUMED: YES TO BOTH" x={104} y={330} boyut={34} agirlik={800} genislik={800} />
      <VurguRozet t={t} bas={t2010} vurgu="2010" not="U.S. GUIDELINES" x={340} y={170} genislik={380} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(2, "300")} vurgu="< 300 MG" not="CHOLESTEROL A DAY" x={800} y={170} genislik={500} boyut={96} renk={RENK.mercan} />
    </>
  );
};

export default S11;
