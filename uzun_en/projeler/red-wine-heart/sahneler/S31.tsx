// Sahne 31 — sonuç: ölümlerle bağ yok.
import React from "react";
import { BaslikBlok, Hap, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pop: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "268")} bitis={4.3} vurgu="268" not="PEOPLE DIED" x={420} y={170} genislik={380} />
      <Pop t={t} bas={K(1, "highest")} x={330} y={220} metin="HIGHEST LEVELS" renk={RENK.koyuYesil} />
      <Pop t={t} bas={K(1, "lowest")} x={330} y={330} metin="LOWEST LEVELS" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "no less")} satirlar={["NO LINK", "TO DEATHS"]} x={1860} y={170} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "no less") + 0.6} metin={s.meta.baslik!.not!} x={1860} y={400} hiza="sag" genislik={760} boyut={34} />
      <Not t={t} bas={K(1, "heart")} metin="LEVELS NOT LINKED WITH:" x={1100} y={480} boyut={30} agirlik={800} renk={RENK.gri} />
      <Liste t={t} x={1100} y={530} aralik={84} boyut={38} isaret="carpi" genislik={700}
        ogeler={[{ bas: K(1, "heart"), metin: "HEART DISEASE", renk: RENK.mercan }, { bas: K(1, "cancer"), metin: "CANCER", renk: RENK.mercan }]} />
      <Pop t={t} bas={K(2, "observational")} x={1440} y={735} metin="OBSERVATIONAL STUDY" renk={RENK.altin} />
      <Pop t={t} bas={K(2, "can't")} x={1440} y={815} metin="CAN'T PROVE CAUSE" renk={RENK.mercan} />
    </>
  );
};

export default S31;
