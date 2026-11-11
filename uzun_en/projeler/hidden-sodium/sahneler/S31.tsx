// Sahne 31 — Günlük değer 2.300 mg; %20 ≈ 460 mg. Üstte çubuk: 20% dilimi dolar.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const X0 = 160, GEN = 1600, Y = 285, YUK = 62;

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDv = K(0, "daily value"), tNum = K(0, "2,300"), tTw = K(1, "twenty percent"), t460 = K(1, "460"), tServ = K(1, "single serving");
  const pBar = eout(ilerle(t, tDv, 0.6));
  const pTw = eout(ilerle(t, tTw, 0.8));
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tServ} capa={[733, 540]} konum={[1300, 420]} metin="ONE SERVING" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={tDv} metin="DAILY VALUE FOR SODIUM" x={X0} y={52} boyut={32} agirlik={800} renk={RENK.gri} />
      <Baslik t={t} bas={tNum} metin="2,300 MG" x={X0} y={150} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={t460} metin="≈ 460 MG" x={X0 + GEN} y={150} boyut={100} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={t460} metin="AT 20% IN ONE SERVING" x={X0 + GEN} y={212} boyut={28} agirlik={800} renk={RENK.gri} hiza="sag" />
      {/* çubuk: tam genişlik = günlük değer, ilk %20 dolu */}
      <div style={{ position: "absolute", left: X0, top: Y, width: GEN * pBar, height: YUK, borderRadius: 14, background: RENK.kagitAcik,
        border: `4px solid ${RENK.murekkep}`, boxSizing: "border-box", overflow: "hidden" }}>
        <div style={{ width: GEN * 0.2 * pTw, height: "100%", background: RENK.mercan }} />
      </div>
      {pTw > 0.5 && (
        <div style={{ position: "absolute", left: X0 + 16, top: Y + 5, fontFamily: ANTON, fontSize: 40, color: "#fff", opacity: pTw }}>20%</div>
      )}
    </>
  );
};
export default S31;
