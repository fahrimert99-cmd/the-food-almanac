// Sahne 7 — beyin dostu yiyecek listesi: sağda sıklık satırları, solda yiyecek etiketleri.
import React from "react";
import { ANTON, BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Liste satırı: onay + ad + sıklık
const Satir: React.FC<{ t: number; bas: number; bitis: number; ad: string; deger?: string; y: number; sira: number }> = ({
  t, bas, bitis, ad, deger, y, sira,
}) => {
  const p = eout(ilerle(t, bas, 0.5));
  const a = p * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1290 , top: y + sira * 82, width: 570, opacity: a, display: "flex", alignItems: "center",
      gap: 18, transform: `translateX(${(1 - p) * 40}px)`, background: "#FCF8EC", border: `3px solid ${RENK.yesil}`, borderRadius: 999,
      padding: "8px 26px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <div style={{ width: 48, height: 48, flex: "none", borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center",
        justifyContent: "center" }}><IkonYol ad="onay" boyut={30} renk="#fff" /></div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert, whiteSpace: "nowrap", flex: 1 }}>{ad}</div>
      {deger && <div style={{ fontFamily: ANTON, fontSize: 32, color: RENK.altin, whiteSpace: "nowrap" }}>{deger}</div>}
    </div>
  );
};

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSon = K(3, "Plus") - 0.05;
  const Y1 = 400;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "leafy greens")} bitis={K(0, "other vegetables") - 0.1} capa={[400, 330]} konum={[760, 100]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "Berries")} bitis={K(2, "Nuts") - 0.1} capa={[370, 700]} konum={[190, 540]} metin="BERRIES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "Nuts")} bitis={tSon - 0.3} capa={[800, 913]} konum={[1180, 890]} metin="NUTS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "brain-healthy")} satirlar={b.satirlar} x={1860} y={170} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Satir t={t} bas={K(0, "leafy greens")} bitis={tSon} ad="LEAFY GREENS" deger="6+ / WEEK" y={Y1} sira={0} />
      <Satir t={t} bas={K(0, "other vegetables")} bitis={tSon} ad="OTHER VEGETABLES" deger="DAILY" y={Y1} sira={1} />
      <Satir t={t} bas={K(1, "Berries")} bitis={tSon} ad="BERRIES" deger="2+ / WEEK" y={Y1} sira={2} />
      <Satir t={t} bas={K(2, "Nuts")} bitis={tSon} ad="NUTS" deger="5+ / WEEK" y={Y1} sira={3} />
      <Satir t={t} bas={K(3, "beans")} bitis={1e9} ad="BEANS" y={Y1} sira={0} />
      <Satir t={t} bas={K(3, "whole grains")} bitis={1e9} ad="WHOLE GRAINS" y={Y1} sira={1} />
      <Satir t={t} bas={K(3, "fish")} bitis={1e9} ad="FISH" y={Y1} sira={2} />
      <Satir t={t} bas={K(3, "poultry")} bitis={1e9} ad="POULTRY" y={Y1} sira={3} />
      <Satir t={t} bas={K(3, "olive oil")} bitis={1e9} ad="OLIVE OIL" deger="MAIN OIL" y={Y1} sira={4} />
    </>
  );
};

export default S07;
