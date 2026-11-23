// Sahne 21 — USDA Pesticide Data Program 2021: örneklerin %99+ limitin içinde.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, INTER, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, pop, sol, kagit } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tF = K(0, "thousands"), tDep = K(0, "department"), tPDP = K(0, "pesticide");
  const t21 = K(1, "2021"), t10 = K(1, "10,000"), t99 = K(1, "99 percent"), tEPA = K(1, "EPA");
  const aP = eout(ilerle(t, 0.3, 0.8));
  const aA = eout(ilerle(t, tDep, 0.5)) * sol(t, t21 - 0.2);
  const [s21, a21] = pop(t, t21, 0.5);
  const [s10, a10] = pop(t, t10, 0.5);
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])}>
        {/* sağ panel: görseldeki yüzen eldivenleri örter */}
        <div style={{ position: "absolute", left: 880, top: -300, width: 1500, height: 1700, opacity: aP,
          background: `linear-gradient(to right, ${kagit(0)} 0px, ${kagit(1)} 50px, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={tF} capa={[707, 400]} konum={[760, 175]} metin="THOUSANDS OF FOODS" renk={RENK.yesil} />
        {/* A bloğu: kurum ve program */}
        <div style={{ position: "absolute", left: 1010, top: 175, opacity: aA, fontFamily: INTER, fontWeight: 800, fontSize: 30,
          letterSpacing: 4, color: RENK.altin, whiteSpace: "nowrap" }}>US DEPARTMENT OF AGRICULTURE</div>
        <BaslikBlok t={t} bas={tPDP} bitis={t21 - 0.2} satirlar={["PESTICIDE DATA", "PROGRAM"]} x={1010} y={290} boyut={96} />
        {/* B bloğu: 2021 raporu, örnek sayısı */}
        <div style={{ position: "absolute", left: 1010, top: 175, transform: `scale(${s21})`, transformOrigin: "0 50%", opacity: a21 }}>
          <Hap metin="2021 REPORT" renk={RENK.altin} boyut={30} />
        </div>
        <div style={{ position: "absolute", left: 1010, top: 270, transform: `scale(${s10})`, transformOrigin: "0 50%", opacity: a10 }}>
          <Hap metin="OVER 10,000 SAMPLES" renk={RENK.lacivert} boyut={30} />
        </div>
        {/* C bloğu: sonuç */}
        <BaslikBlok t={t} bas={t99} satirlar={["OVER 99%", "WITHIN LIMITS"]} x={1010} y={470} boyut={120}
          renkler={[RENK.yesil, RENK.koyuYesil]} />
        <Not t={t} bas={tEPA} metin="at or below the EPA limit" x={1010} y={690} boyut={38} />
        <Not t={t} bas={tEPA + 0.5} metin="of 10,127 samples tested in 2021" x={1010} y={745} boyut={30} renk="#585862" />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
    </AbsoluteFill>
  );
};

export default S21;
