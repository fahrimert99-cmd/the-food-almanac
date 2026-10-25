// Sahne 40 — böbrek taşı uyarısı: pancar oksalat bakımından zengin (NKF); kalsiyum oksalat taşı olanlar sınırlayabilir.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTas = K(0, "kidney"), tBeets = K(1, "beets"), tOks = K(1, "oxalate.");
  const tCalc = K(2, "calcium"), tDoktor = K(2, "doctor");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [40, 60, 1700])}>
        {/* alttaki kutulu minik böbrek çizimi ve sahte yazı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 880, top: 800, width: 340, height: 300,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 85%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tBeets} capa={[460, 470]} konum={[330, 230]} metin="BEETS" renk={RENK.mercan} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={800} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <BaslikBlok t={t} bas={tTas - 0.2} satirlar={["OXALATE", "AND STONES"]} x={1860} y={140} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1230} y={470} isaret="nokta" boyut={32} aralik={96} genislik={640} ogeler={[
        { bas: tBeets, metin: "BEETS: HIGH IN OXALATE", renk: RENK.mercan },
        { bas: tCalc, metin: "CALCIUM OXALATE STONES", renk: RENK.altin },
        { bas: tDoktor, metin: "DOCTOR MAY ADVISE: LIMIT", renk: RENK.lacivert },
      ]} />
    </>
  );
};

export default S40;
