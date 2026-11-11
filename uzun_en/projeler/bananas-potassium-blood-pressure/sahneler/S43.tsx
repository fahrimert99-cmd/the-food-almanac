// Sahne 43 — böbrek hastalığı: solda böbrek gravürü, sağda başlık ve not.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBobrek = K(0, "kidneys"), tK = K(0, "potassium"), tHast = K(1, "chronic kidney disease");
  const tBirik = K(2, "build up"), tHiper = K(2, "hyperkalemia"), tKan = K(2, "blood");
  const [sc, al] = pop(t, tHiper, 0.55);
  const [s2, a2] = pop(t, tKan, 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800])}>
        <Etiket t={t} bas={tBobrek} bitis={2.8} capa={[790, 520]} konum={[1250, 480]} metin="KIDNEYS" renk={RENK.mercan} />
        <Etiket t={t} bas={tK} bitis={2.8} capa={[500, 300]} konum={[1250, 270]} metin="POTASSIUM" renk={RENK.altin} />
        <Parcaciklar t={t} bas={tBirik} kaynak={[460, 160]} hedef={[460, 700]} adet={16} aralik={0.18} yayilma={60} hedefYayilma={60} kavis={0} tohum="b43" />
      </Kamera>
      <BaslikBlok t={t} bas={tHast - 0.1} satirlar={["KIDNEY", "DISEASE"]} x={1860} y={260} boyut={110} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tBirik} metin="potassium can build up" x={1860} y={500} hiza="sag" boyut={38} genislik={700} />
      <div style={{ position: "absolute", left: 1000, top: 640, opacity: a2, transform: `scale(${s2})`, transformOrigin: "0 50%" }}>
        <Hap metin="IN THE BLOOD" renk={RENK.mercan} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 760, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="HYPERKALEMIA" renk={RENK.mercan} boyut={44} />
      </div>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S43;
