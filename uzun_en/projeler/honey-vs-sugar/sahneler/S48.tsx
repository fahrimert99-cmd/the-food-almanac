// Sahne 48 — İpucu 4: bal tadı için seç; kan şekeri aracı olarak kanıt henüz yok.
import React from "react";
import { ANTON, BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tChoose = K(1, "choose"), tRaw = K(2, "raw"), tSingle = K(2, "single-flower");
  const tEv = K(3, "evidence"), tPay = K(3, "don't pay");
  const [sn, an] = pop(t, 0.05, 0.5);
  const [sp, ap] = pop(t, tPay, 0.55);
  const b1 = tEv - 0.2;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [0, 0, 1700])}>
        <Etiket t={t} bas={tRaw} bitis={b1} capa={[850, 680]} konum={[950, 430]} metin="RAW" renk={RENK.altin} />
        <Etiket t={t} bas={tSingle} bitis={b1} capa={[1200, 660]} konum={[1300, 430]} metin="SINGLE-FLOWER" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 100, top: 90, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52,
        transform: `scale(${sn})`, opacity: an }}>4</div>
      <BaslikBlok t={t} bas={tChoose} bitis={b1} satirlar={["CHOOSE HONEY", "FOR TASTE"]} x={1000} y={110} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tEv} satirlar={["NOT YET SHOWN", "AS A BLOOD SUGAR TOOL"]} x={960} y={110} boyut={72}
        renkler={[RENK.mercan, RENK.lacivert]} />
      <div style={{ position: "absolute", left: 960, top: 340, transform: `scale(${sp})`, transformOrigin: "0% 50%", opacity: ap,
        display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, borderRadius: 999, padding: "10px 30px 10px 12px",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: "#fff", whiteSpace: "nowrap" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={26} renk="#fff" kalinlik={8} />
        </span>
        DON'T PAY EXTRA
      </div>
    </>
  );
};

export default S48;
