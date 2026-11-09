// Sahne 45 — hedefe ulaşanlar: %36 ve %11 (anlatımdaki sayılar), 30 ay sonrası.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHedef = K(0, "1,800"), tSod = K(0, "sodium");
  const t36 = K(1, "36"), t11 = K(1, "11"), t30 = K(2, "30");
  const bitis0 = s.cumleler[1].bas - 0.1;
  const pB1 = eout(ilerle(t, t36, 0.9)), pB2 = eout(ilerle(t, t11, 0.7));
  const [sc3, al3] = pop(t, t30, 0.55);
  const BX = 1290, W15 = 15; // 15 px / %: oranlı çubuklar
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 60, 1800])}>
        <Etiket t={t} bas={tSod} bitis={bitis0} capa={[385, 470]} konum={[760, 190]} metin="SALT SHAKER" renk={RENK.altin} />
        <Etiket t={t} bas={tHedef + 0.9} bitis={bitis0} capa={[870, 800]} konum={[1180, 760]} metin="THE GOAL" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: hedef */}
      <div style={{ position: "absolute", right: 60, top: 300, opacity: 1 }}>
        {tHedef > 0 && (() => { const [sc, al] = pop(t, tHedef, 0.55); const a = al * (1 - eout(ilerle(t, bitis0, 0.4)));
          return a > 0 ? <div style={{ transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
            <Hap metin="GOAL: ≤ 1,800 MG SODIUM" renk={RENK.yesil} boyut={32} /></div> : null; })()}
      </div>
      {/* 2. cümle: başlık + oranlı çubuklar */}
      <BaslikBlok t={t} bas={K(1, "Only") } satirlar={["ONLY 36%", "HIT THE GOAL"]} x={1860} y={140} boyut={92} hiza="sag"
        renkler={[RENK.altin, RENK.lacivert]} />
      {pB1 > 0 && (
        <div style={{ position: "absolute", left: BX, top: 470, opacity: pB1 }}>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>SODIUM GROUP · BY 9 MONTHS</div>
          <div style={{ marginTop: 10, height: 64, width: 36 * W15 * pB1, background: RENK.yesil, borderRadius: 10, display: "flex",
            alignItems: "center", justifyContent: "flex-end", paddingRight: 16, fontFamily: ANTON, fontSize: 44, color: "#fff" }}>36%</div>
        </div>
      )}
      {pB2 > 0 && (
        <div style={{ position: "absolute", left: BX, top: 640, opacity: pB2 }}>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>THE OTHERS</div>
          <div style={{ marginTop: 10, height: 64, width: 11 * W15 * pB2, background: RENK.gri, borderRadius: 10, display: "flex",
            alignItems: "center", justifyContent: "flex-end", paddingRight: 12, fontFamily: ANTON, fontSize: 44, color: "#fff" }}>11%</div>
        </div>
      )}
      {/* 3. cümle */}
      {al3 > 0 && (
        <div style={{ position: "absolute", left: BX, top: 810, transform: `scale(${sc3})`, transformOrigin: "0 50%", opacity: al3 }}>
          <Hap metin="NEXT 30 MONTHS: DID BETTER" renk={RENK.altin} boyut={30} />
        </div>
      )}
    </>
  );
};
export default S45;
