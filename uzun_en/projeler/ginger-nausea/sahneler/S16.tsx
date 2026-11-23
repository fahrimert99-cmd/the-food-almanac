// Sahne 16 — "bir güvenlik noktası, son bölümde": hap kutusu ve zencefil yanında sağ üstte başlık.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNokta = K(0, "safety point");
  const tZen = K(0, "ginger that");
  const tSasir = K(0, "surprises");
  const tGelecek = K(1, "We'll get");
  const tSon = K(1, "last part");
  const [si, ai] = pop(t, tSasir, 0.5);
  const [sp, ap] = pop(t, tSon, 0.55);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])}>
        <Etiket t={t} bas={tZen} bitis={tGelecek + 0.5} capa={[850, 815]} konum={[1180, 900]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tNokta - 0.2} metin="A SAFETY POINT" x={1020} y={220} boyut={92} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1580, top: 168, transform: `scale(${si})`, opacity: ai, width: 92, height: 92, borderRadius: "50%",
        background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${RENK.kagitAcik}` }}>
        <IkonYol ad="uyari" boyut={52} renk="#fff" kalinlik={7} />
      </div>
      <Baslik t={t} bas={tGelecek} metin="COMING UP" x={1020} y={330} boyut={92} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1024, top: 410, transform: `scale(${sp})`, transformOrigin: "0% 50%", opacity: ap }}>
        <Hap metin="IN THE LAST PART" renk={RENK.koyuYesil} boyut={32} />
      </div>
    </>
  );
};
export default S16;
