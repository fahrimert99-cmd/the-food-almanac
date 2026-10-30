// Sahne 15 — Women's Health Initiative: katılımcılar, dozlar, süre, kaynak. El + kavanoz solda; yazılar sağdaki boş kâğıtta.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, INTER, kameraYolu, kelimeZamani, pop, eout, ilerle } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const tN = K(0, "36,282"), tMeno = K(0, "postmenopausal"), tCa = K(0, "1,000"), tD = K(0, "400"), tYil = K(0, "seven"), tKay = K(1, "Rebecca");
  const [sD, aD] = pop(t, tD, 0.5);
  const aK = eout(ilerle(t, tKay, 0.5));
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 50, 1800])}>
        <Etiket t={t} bas={tCa} capa={[727, 693]} konum={[1340, 560]} metin="1,000 MG CALCIUM" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tN} satirlar={b?.satirlar ?? []} x={1860} y={170} boyut={120} hiza="sag" />
      <Not t={t} bas={tMeno} metin="POSTMENOPAUSAL · AGED 50–79" x={1860} y={430} boyut={30} agirlik={800} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 625, transform: `scale(${sD})`, transformOrigin: "100% 50%", opacity: aD }}>
        <Hap metin="+ 400 IU VITAMIN D" renk={RENK.koyuYesil} boyut={28} />
      </div>
      <VurguRozet t={t} bas={tYil} vurgu="7 YRS" not="average follow-up" x={1650} y={700} genislik={400} boyut={92} />
      <div style={{ position: "absolute", right: 60, top: 890, opacity: aK, display: "flex", alignItems: "center", gap: 14,
        background: RENK.lacivert, borderRadius: 999, padding: "10px 26px 10px 18px", color: "#fff", fontFamily: INTER, fontWeight: 800,
        fontSize: 24, transform: `translateY(${(1 - aK) * 10}px)`, whiteSpace: "nowrap" }}>
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: RENK.altin }} />
        {s.meta.etiket}
      </div>
    </>
  );
};

export default S15;
