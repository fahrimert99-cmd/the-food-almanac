// Sahne 10 — terazi: aynı hap, daha büyük etki; saat değiştirmek geri almaz.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSaat = K(1, "another time");
  const aBir = sol(t, tSaat - 0.2, 0.4);
  const aIki = eout(ilerle(t, tSaat, 0.5));
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [40, 100, 1840], [160, 200, 1640])}>
        <Etiket t={t} bas={K(0, "single")} bitis={tSaat - 0.2} capa={[420, 730]} konum={[560, 650]} metin="SAME PILL" renk={RENK.yesil} />
      </Kamera>
      <div style={{ opacity: aBir }}>
        <BaslikBlok t={t} bas={K(0, "bigger")} satirlar={["BIGGER", "DOSE"]} x={110} y={190} boyut={104}
          renkler={[RENK.lacivert, RENK.mercan]} />
        <Not t={t} bas={K(0, "doctor")} metin="than your doctor intended" x={116} y={420} boyut={34} />
      </div>
      {aIki > 0 && (
        <div style={{ opacity: aIki }}>
          <Ikon t={t} bas={tSaat} ad="saat" x={190} y={240} zemin={RENK.lacivert} />
          <BaslikBlok t={t} bas={tSaat + 0.1} satirlar={["ANOTHER TIME", "DOESN'T UNDO IT"]} x={290} y={215} boyut={72}
            renkler={[RENK.lacivert, RENK.mercan]} />
        </div>
      )}
    </>
  );
};

export default S10;
