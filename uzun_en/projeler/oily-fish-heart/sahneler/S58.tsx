// Sahne 58 — reçeteli EPA: belirli bir grup için ilaç, herkes için takviye değil.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tR = K(0, "prescription"), tT = K(0, "triglycerides,"), tG = K(0, "specific"), tN = K(0, "not");
  const aN = eout(ilerle(t, tN, 0.5));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 40, 1760], [90, 90, 1640])}>
        <Etiket t={t} bas={tR} bitis={tT - 0.1} capa={[520, 470]} konum={[780, 250]} metin="PRESCRIPTION EPA" renk={RENK.altin} />
        <Etiket t={t} bas={tG} bitis={tN - 0.1} capa={[1330, 910]} konum={[1520, 400]} metin="SPECIFIC GROUP" renk={RENK.yesil} />
      </Kamera>
      {/* yüksek trigliserit başlığı */}
      <Baslik t={t} bas={tT - 0.1} bitis={tG - 0.2} metin="HIGH TRIGLYCERIDES" x={1090} y={190} boyut={72} renk={RENK.koyuYesil} hiza="orta" />
      {/* son vuruş: herkes için takviye değil */}
      {aN > 0 && (
        <div style={{ position: "absolute", left: 1120, top: 200, transform: `translate(-50%, -50%) translateY(${(1 - aN) * 14}px)`,
          opacity: aN * sol(t, 1e9), display: "flex", alignItems: "center", gap: 20 }}>
          <Ikon t={t} bas={tN} ad="carpi" x={0} y={0} boyut={84} zemin={RENK.mercan} />
          <div style={{ marginLeft: 70 }}>
            <Hap metin="NOT FOR EVERYONE" renk={RENK.mercan} boyut={44} />
          </div>
        </div>
      )}
    </>
  );
};

export default S58;
