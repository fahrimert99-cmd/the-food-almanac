// Sahne 3 — ne kadar yemeli: ölçü kabı solda, sağda başlık
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [40, 30, 1800], [110, 60, 1660])}>
        <Etiket t={t} bas={K(0, "walnuts")} capa={[580, 260]} konum={[1080, 150]} metin="WALNUTS" renk={RENK.altin} />
        {/* ölçek yazısı kusurunu örten leke */}
        <div style={{ position: "absolute", left: 360, top: 430, width: 380, height: 400,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(214,178,128,1) 0%, rgba(214,178,128,0.95) 55%, rgba(214,178,128,0) 100%)" }} />
      </Kamera>
      <Ikon t={t} bas={K(0, "can")} ad="onay" x={1130} y={290} />
      <Ikon t={t} bas={K(0, "can't")} ad="carpi" x={1270} y={290} zemin={RENK.mercan} />
      <BaslikBlok t={t} bas={K(0, "how")} satirlar={s.meta.baslik!.satirlar} x={1010} y={470} boyut={112} />
    </>
  );
};

export default S03;
