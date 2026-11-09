// Sahne 12 — Harvard ekibi iki kohortu ~25 yıl izledi: soru formu yığını + iki kohort adı.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tK = K(0, "Nurses'");
  const pPanel = eout(ilerle(t, tK - 0.5, 0.7));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [20, 100, 1850], [130, 150, 1700])}>
        <Etiket t={t} bas={K(0, "health professionals")} bitis={tK - 0.3} capa={[900, 560]} konum={[470, 300]} metin="US HEALTH PROFESSIONALS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "about 25")} bitis={tK - 0.3} capa={[800, 620]} konum={[760, 880]} metin="ABOUT 25 YEARS" renk={RENK.altin} />
      </Kamera>
      {/* iki kohort: sol panelde alt alta */}
      <Panel a={pPanel} taraf="sol" genislik={760} />
      <Baslik t={t} bas={tK} metin="NURSES'" x={70} y={300} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tK + 0.2} metin="HEALTH STUDY" x={70} y={400} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Health Professionals Follow-up")} metin="HEALTH PROFESSIONALS" x={70} y={560} boyut={64} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "Health Professionals Follow-up")+ 0.2} metin="FOLLOW-UP STUDY" x={70} y={635} boyut={64} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} y={200} />
    </>
  );
};

export default S12;
