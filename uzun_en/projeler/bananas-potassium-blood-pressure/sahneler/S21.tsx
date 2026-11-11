// Sahne 21 — en büyük düşüşler: 90–120 mmol/gün ≈ 3.500–4.700 mg; net doz-yanıt örüntüsü yok.
import React from "react";
import { BaslikBlok, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [], not: "" };
  const t90 = K(0, "90"), tMg = K(0, "3,500"), tNo = K(1, "no clear");
  const [sc, al] = pop(t, tNo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [90, 190, 1740])} />
      <VurguRozet t={t} bas={t90} vurgu="90–120" not="MILLIMOLES A DAY" x={520} y={110} genislik={420} boyut={100} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tMg} satirlar={b.satirlar} x={1100} y={150} boyut={104} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tMg + 0.5} metin={b.not ?? ""} x={1106} y={365} boyut={32} agirlik={700} genislik={700} />
      <div style={{ position: "absolute", left: 1000, top: 540, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NO CLEAR DOSE-RESPONSE" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S21;
