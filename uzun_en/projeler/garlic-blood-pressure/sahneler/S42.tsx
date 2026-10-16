// Sahne 42 — kan sulandırıcı uyarısı (sağ panel, solda şişe rafı).
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSup = K(0, "supplements"), tRisk = K(0, "risk"), tIf = K(1, "if you take"), tDoc = K(1, "doctor");
  const [sc, al] = pop(t, tDoc, 0.5);
  return (
    <>
      {/* sol karanlık şerit ve sağdaki sahte etiketli şişe kadraj/panel dışında */}
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [280, 40, 1500], [310, 50, 1420])} />
      <Panel a={eout(ilerle(t, tIf - 0.1, 0.6))} taraf="sag" genislik={820} opak={0.97} />
      <Etiket t={t} bas={tSup} bitis={tIf} capa={[820, 650]} konum={[640, 820]} metin="SUPPLEMENTS" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tRisk} bitis={tIf} capa={[1010, 600]} konum={[1020, 800]} metin="BLEEDING RISK" renk={RENK.mercan} boyut={26} />
      <BaslikBlok t={t} bas={tIf} satirlar={["BLOOD THINNERS:", "ASK FIRST"]} x={1860} y={200} boyut={84} hiza="sag" adim={0.2} />
      <Liste t={t} isaret="nokta" x={1140} y={400} aralik={90} boyut={34} genislik={740}
        ogeler={[
          { bas: K(1, "warfarin"), metin: "WARFARIN", renk: RENK.mercan },
          { bas: K(1, "aspirin"), metin: "ASPIRIN", renk: RENK.mercan },
          { bas: K(1, "another blood thinner"), metin: "OTHER BLOOD THINNERS", renk: RENK.mercan },
        ]} />
      <div style={{ position: "absolute", right: 60, top: 740, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="DOCTOR OR PHARMACIST" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S42;
