// Sahne 63 — bir haftalık düşük sodyum: tansiyon aleti, rakam rozeti, karşılaştırma, kanıt gücü.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";
import { Hap } from "../kutuphane";

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBP = K(0, "blood pressure"), tSayi = K(0, "about 7 to 8"), tKars = K(0, "compared with"), tHigh = K(0, "high-sodium");
  const tGuc = K(1, "strong"), tKisa = K(1, "shorter");
  const tSon = K(1, "The evidence");
  // karşılaştırma hapları: rozet gidince gelir, kanıt paneli gelince solar
  const hapA = (bas: number) => eout(ilerle(t, bas, 0.4)) * sol(t, tSon - 0.1, 0.3);
  return (
    <>
      {/* pencere sol manşet kusurlarını (yazı izi, çizik) dışarıda tutar */}
      <Kamera gorsel="tam/63" pencere={kameraYolu(t, s.sure, [610, 40, 1310], [640, 170, 1250])}>
        <Etiket t={t} bas={tBP} bitis={tSayi + 0.6} capa={[925, 230]} konum={[1240, 120]} metin="BLOOD PRESSURE" renk={RENK.mercan} boyut={20} />
      </Kamera>
      <VurguRozet t={t} bas={tSayi} bitis={tKars + 0.3} vurgu="–7 TO 8" not="mmHg · TOP NUMBER" x={1480} y={120} genislik={420} boyut={96} />
      <div style={{ position: "absolute", left: 1270, top: 110, display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
        <div style={{ opacity: hapA(tKars), transform: `translateX(${(1 - hapA(tKars)) * 30}px)` }}>
          <Hap metin="LOW-SODIUM WEEK" renk={RENK.yesil} boyut={32} />
        </div>
        <div style={{ opacity: hapA(tHigh), transform: `translateX(${(1 - hapA(tHigh)) * 30}px)` }}>
          <Hap metin="HIGH-SODIUM WEEK" renk={RENK.mercan} boyut={32} />
        </div>
      </div>
      <Panel a={eout(ilerle(t, tSon, 0.6))} taraf="sag" genislik={1080} opak={1} />
      <BaslikBlok t={t} bas={tSon + 0.1} satirlar={["EVIDENCE"]} x={1860} y={280} boyut={96} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Liste t={t} x={1130} y={400} aralik={110} boyut={34} isaret="onay" genislik={740}
        ogeler={[{ bas: tGuc, metin: "STRONG: BLOOD PRESSURE", renk: RENK.yesil }, { bas: tKisa, metin: "SHORTER: LONG-TERM OUTCOMES", renk: RENK.altin }]} />
    </>
  );
};

export default S63;
