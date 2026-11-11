import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// Sahne 7 — dolap = depo; belirtiler yıllar sonra çıkabilir
const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "National"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* alttaki küçük karalama kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 560, top: 1000, width: 260, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "large")} capa={[480, 575]} konum={[1000, 560]} metin="LARGE RESERVE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "several")} capa={[417, 135]} konum={[860, 140]} metin="SEVERAL YEARS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "shortage")} satirlar={["SLOW TO", "SHOW UP"]} x={1860} y={230} boyut={112} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", right: 60, top: 640, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
        <Hap metin="NATIONAL INSTITUTES OF HEALTH" renk={RENK.altin} boyut={30} />
      </div>
      <Not t={t} bas={K(1, "symptoms")} metin="SYMPTOMS MAY TAKE SEVERAL YEARS TO APPEAR" x={1860} y={720} hiza="sag" genislik={760} boyut={42} agirlik={800} />
    </>
  );
};

export default S07;
