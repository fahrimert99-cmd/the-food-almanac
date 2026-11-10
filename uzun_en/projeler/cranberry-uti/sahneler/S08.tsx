// Sahne 8 — önlemek, tedavi değil: sağda başlık, sonra NIH uyarısı ve doktora git
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNIH = K(1, "National"), tCr = K(1, "cranberry"), tIsnt = K(1, "isn't");
  const tIf = K(2, "If"), tSee = K(2, "see");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 40, 1880], [70, 90, 1780])}>
        <Etiket t={t} bas={tCr} bitis={tIf - 0.3} capa={[913, 330]} konum={[1130, 200]} metin="CRANBERRY JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "health care")} capa={[290, 720]} konum={[330, 880]} metin="STETHOSCOPE" renk={RENK.koyuYesil} />
      </Kamera>
      {/* 1. cümle: kinetik başlık */}
      <BaslikBlok t={t} bas={K(0, "prevent")} bitis={tNIH - 0.2} satirlar={["PREVENT,", "NOT TREAT"]} x={1860} y={420} boyut={130}
        hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} adim={K(0, "not") - K(0, "prevent")} />
      {/* 2. cümle: NIH ve tedavi önerilmiyor */}
      <Not t={t} bas={tNIH} bitis={tIf - 0.3} metin="NATIONAL INSTITUTES OF HEALTH" x={1180} y={400} boyut={30} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="carpi" ogeler={[{ bas: tIsnt, metin: "NOT FOR TREATING AN EXISTING INFECTION", renk: RENK.mercan, bitis: tIf - 0.3 }]}
        x={1180} y={470} boyut={36} genislik={640} />
      {/* 3. cümle: sağlık görevlisi */}
      <Not t={t} bas={tIf} metin="THINK YOU HAVE A UTI?" x={1180} y={420} boyut={34} agirlik={800} renk={RENK.lacivert} />
      <Liste t={t} isaret="onay" ogeler={[{ bas: tSee, metin: "SEE A HEALTH CARE PROVIDER", renk: RENK.yesil }]}
        x={1180} y={490} boyut={38} genislik={640} />
    </>
  );
};
export default S08;
