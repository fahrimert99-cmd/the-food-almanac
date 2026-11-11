// Sahne 29 — SSaSS: 600 köy, rastgele atama; yarısı normal tuz, kalanı %25 potasyum klorürlü tuz.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCalisma = K(0, "Salt Substitute"), tNeal = K(0, "Bruce"), tKoy = K(0, "600"), tKirsal = K(0, "rural"), tRast = K(0, "randomly");
  const tYari = K(1, "Half"), tRegular = K(1, "regular"), tGerisi = K(2, "rest"), tSub = K(2, "substitute"), t25 = K(2, "25"), tKCl = K(2, "potassium");
  const bit0 = s.cumleler[1].bas - 0.2;
  const o0 = sol(t, bit0);
  const [s1, a1] = pop(t, tCalisma, 0.5);
  const [s2, a2] = pop(t, tNeal, 0.5);
  const [s3, a3] = pop(t, tRast, 0.5);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1840])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {/* 1. cümle: çalışma adı, yazar, köy sayısı */}
      <div style={{ position: "absolute", left: 1000, top: 150, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 * o0 }}>
        <Hap metin="SALT SUBSTITUTE AND STROKE STUDY" renk={RENK.altin} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 232, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 * o0 }}>
        <Hap metin="LED BY BRUCE NEAL" renk={RENK.lacivert} boyut={30} />
      </div>
      <BaslikBlok t={t} bas={tKoy} satirlar={["600", "VILLAGES"]} x={1000} y={420} boyut={130} bitis={bit0} />
      <Not t={t} bas={tKirsal} metin="RURAL CHINA" x={1006} y={660} boyut={36} agirlik={800} bitis={bit0} />
      <div style={{ position: "absolute", left: 1000, top: 740, transform: `scale(${s3})`, transformOrigin: "0 50%", opacity: a3 * o0 }}>
        <Hap metin="RANDOMLY ASSIGNED" renk={RENK.yesil} boyut={32} />
      </div>
      {/* 2-3. cümle: yarısı normal tuz, geri kalanı ikame */}
      <Baslik t={t} bas={tYari} metin="HALF" x={1000} y={250} boyut={140} renk={RENK.lacivert} />
      <Not t={t} bas={tRegular} metin="used regular salt" x={1006} y={340} boyut={38} agirlik={800} />
      <Baslik t={t} bas={tGerisi} metin="THE REST" x={1000} y={500} boyut={140} renk={RENK.koyuYesil} />
      <Not t={t} bas={tSub} metin="used a salt substitute" x={1006} y={590} boyut={38} agirlik={800} />
      <Etiket t={t} bas={tRegular + 0.2} capa={[150, 790]} konum={[380, 910]} metin="REGULAR SALT" renk={RENK.lacivert} boyut={28} />
      <Etiket t={t} bas={tSub} capa={[560, 800]} konum={[860, 910]} metin="SALT SUBSTITUTE" renk={RENK.yesil} boyut={28} />
      <VurguRozet t={t} bas={t25} vurgu="25%" not="potassium chloride" x={1500} y={680} renk={RENK.yesil} genislik={440} />
    </>
  );
};

export default S29;
