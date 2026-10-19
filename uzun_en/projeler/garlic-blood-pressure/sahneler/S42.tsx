// Sahne 42 — kan sulandırıcı kullananlar önce sorsun: takviye kanama riskini artırabilir.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSup = K(0, "supplements"), tMay = K(0, "may"), tIf = K(1, "If");
  const b = s.meta.baslik?.satirlar ?? ["BLOOD THINNERS:", "ASK FIRST"];
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 60, 1740])}>
        {/* sağ yarıdaki dikiş çizgisi ve alt imza kalıntıları örtülür */}
        <div style={{ position: "absolute", left: 940, top: 0, width: 980, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 5%, ${kagit(1)} 100%)` }} />
        <div style={{ position: "absolute", left: 0, top: 1010, width: 1000, height: 70,
          background: `linear-gradient(to bottom, ${kagit(0)} 0%, ${kagit(1)} 40%)` }} />
        <Etiket t={t} bas={tSup} bitis={tIf - 0.2} capa={[865, 540]} konum={[1380, 520]} metin="GARLIC SUPPLEMENTS" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.7} />
      <Not t={t} bas={tMay} bitis={tIf - 0.2} metin="may increase the risk of bleeding" x={1180} y={590} boyut={36} agirlik={800} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tIf} satirlar={b} x={1120} y={170} boyut={100} renkler={[RENK.mercan, RENK.koyuYesil]} />
      <Liste t={t} isaret="nokta" x={1120} y={400} aralik={72} boyut={34} genislik={720}
        ogeler={[
          { bas: K(1, "warfarin"), metin: "WARFARIN", renk: RENK.mercan },
          { bas: K(1, "aspirin"), metin: "ASPIRIN", renk: RENK.mercan },
          { bas: K(1, "another"), metin: "ANOTHER BLOOD THINNER", renk: RENK.mercan },
        ]} />
      <Not t={t} bas={K(1, "talk")} metin="Talk with your doctor or pharmacist" x={1120} y={680} boyut={40} agirlik={800} genislik={720} />
      <Not t={t} bas={K(1, "before")} metin="BEFORE STARTING A GARLIC SUPPLEMENT" x={1120} y={800} boyut={34} agirlik={800} renk={RENK.altin} genislik={720} />
    </>
  );
};
export default S42;
