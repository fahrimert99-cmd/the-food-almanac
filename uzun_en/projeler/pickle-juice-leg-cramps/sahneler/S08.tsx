// Sahne 8 — idiyopatik: neden bilinmiyor
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kelimeZamani, pencereAra, einout, ilerle } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const tSwap = c[1].bas - 0.15;
  // görsel sağa kaydırılır: solda yazı için kâğıt alanı açılır (sınırlama kapalı)
  const pen = pencereAra([-640, -135, 2400], [-640, -108, 2300], einout(ilerle(t, 0, s.sure + 0.7)));
  return (
    <>
      <Kamera gorsel="tam/08" pencere={pen} sinirla={false}>
        <Etiket t={t} bas={K(1, "unknown.")} capa={[780, 430]} konum={[1250, 110]} metin="UNKNOWN" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "no")} bitis={tSwap} metin="NO CLEAR" x={56} y={330} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "cause")} bitis={tSwap} metin="CAUSE" x={56} y={425} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={c[1].bas} metin="DOCTORS CALL IT" x={56} y={300} boyut={28} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "idiopathic,")} metin="IDIOPATHIC" x={56} y={395} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "means")} metin="THE CAUSE IS UNKNOWN" x={56} y={470} boyut={28} agirlik={800} renk={RENK.lacivert} genislik={500} />
    </>
  );
};

export default S08;
