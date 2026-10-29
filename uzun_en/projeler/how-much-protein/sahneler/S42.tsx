// Sahne 42 — böbrek istisnası: sağlıklı yaşlılar için hedefler; ciddi böbrek hastalığında kısıtlama gerekebilir.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSaglikli = K(1, "The") - 0.1, tCik = K(2, "PROT-AGE") - 0.1;
  const pill = (bas: number, metin: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return <div style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "100% 50%" }}><Hap metin={metin} renk={renk} boyut={28} /></div>;
  };
  const aS = sol(t, tCik);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "kidney")} bitis={tSaglikli + 0.1} capa={[330, 520]} konum={[380, 200]} metin="KIDNEYS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "healthy")} bitis={tCik} capa={[900, 540]} konum={[900, 250]} metin="HEALTHY OLDER ADULTS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={K(0, "biggest")} satirlar={["THE KIDNEY", "EXCEPTION"]} x={1860} y={200} boyut={100} hiza="sag" />
      <Ikon t={t} bas={K(1, "higher")} bitis={tCik} ad="onay" x={1560} y={520} />
      <Not t={t} bas={K(1, "higher")} bitis={tCik} metin="higher targets: generally healthy older adults" x={1860} y={590} hiza="sag" genislik={520} />
      <div style={{ position: "absolute", right: 60, top: 450, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 16, opacity: 1 }}>
        {pill(K(2, "severe"), "SEVERE KIDNEY DISEASE", RENK.mercan)}
        {pill(K(2, "not"), "NOT ON DIALYSIS", RENK.altin)}
        {pill(K(2, "limit"), "MAY NEED TO LIMIT PROTEIN", RENK.mercan)}
      </div>
    </>
  );
};

export default S42;
