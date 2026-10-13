// Sahne 21 — 55 çalışma / 2.652 kişi; her +100 mg diyet kolesterolü için LDL +2–4,5 mg/dL (Vincent 2019).
// Kitabın bozuk yazılı sayfaları kâğıt kartla örtülür; sayılar kartın üstüne yazılır.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKart = K(0, "analysis") - 0.3;
  const [sc, al] = pop(t, tKart, 0.6);
  const tB = 7.0;
  const ort = 980;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 17, 1860])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      {/* sayfaları örten kart */}
      <div style={{ position: "absolute", left: 530, top: 308, width: 900, height: 496, transform: `scale(${sc})`, opacity: al,
        background: RENK.kagitAcik, border: `4px solid ${RENK.murekkep}`, borderRadius: 14, boxShadow: "0 14px 34px rgba(48,40,34,0.22)" }} />
      {/* aşama A: çalışma ve kişi sayısı */}
      <Baslik t={t} bas={K(0, "55")} bitis={tB} metin="55 STUDIES" x={ort} y={470} boyut={104} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "2,652")} bitis={tB} metin="2,652 PEOPLE" x={ort} y={600} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      {/* aşama B: +100 mg → LDL */}
      <Baslik t={t} bas={K(1, "100")} metin="+100 MG A DAY" x={ort} y={420} boyut={84} renk={RENK.altin} hiza="orta" />
      <Not t={t} bas={K(1, "dietary")} metin="DIETARY CHOLESTEROL" x={ort} y={485} boyut={30} hiza="orta" agirlik={800} />
      <Baslik t={t} bas={K(1, "LDL")} metin="LDL ROSE BY" x={ort} y={590} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "2")} metin="2 TO 4.5 MG/DL" x={ort} y={690} boyut={92} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={K(1, "depending")} metin="DEPENDING ON THE MODEL" x={ort} y={758} boyut={28} hiza="orta" agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S21;
