// Sahne 44 — TONE: ilaç çekilir; bir grup sodyum azaltma koçluğu, diğeri olağan bakım.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIlac = K(0, "medicine");
  return (
    <>
    <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
      {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
      <div style={{ position: "absolute", left: 1730, top: 960, width: 190, height: 120,
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      <Etiket t={t} bas={K(1, "coached")} capa={[950, 480]} konum={[800, 150]} metin="COACHED TO CUT SODIUM" renk={RENK.yesil} />
      <Etiket t={t} bas={K(2, "Others")} capa={[1250, 540]} konum={[1580, 650]} metin="USUAL CARE" renk={RENK.altin} />
    </Kamera>
      <VurguRozet t={t} bas={K(0, "three months")} bitis={tIlac - 0.15} vurgu="3 MONTHS" not="OF COACHING" x={1400} y={130} genislik={400} boyut={88} />
      <Baslik t={t} bas={tIlac} metin="MEDICINE" x={1860} y={185} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "withdrawn")} metin="WITHDRAWN" x={1860} y={290} boyut={90} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S44;
