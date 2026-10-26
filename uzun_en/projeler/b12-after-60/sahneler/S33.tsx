// Sahne 33 — Framingham Offspring: takviye kullananlar %8, kullanmayanlar %20. Rozetler üstte boş kâğıtta.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCik = K(1, "8 percent") - 0.35;
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [600, 330, 1320], [640, 330, 1240])}>
        {/* soldaki alakasız dalga çizimi kalıntısı kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 560, top: 720, width: 300, height: 150,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(1, "supplement")} capa={[760, 955]} konum={[850, 895]} metin="SUPPLEMENTS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "evidence")} bitis={1.9} metin="THE EVIDENCE" x={570} y={170} boyut={60} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "Framingham")} bitis={tCik} metin="FRAMINGHAM OFFSPRING STUDY" x={570} y={170} boyut={60} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "2,999")} bitis={tCik} metin="2,999 ADULTS" x={574} y={226} boyut={34} renk={RENK.koyuYesil} agirlik={800} />
      <Not t={t} bas={K(1, "ages")} bitis={tCik} metin="AGES 26 TO 83" x={574} y={270} boyut={34} renk={RENK.koyuYesil} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "8 percent")} vurgu="8%" not="SUPPLEMENT USERS" x={780} y={120} renk={RENK.yesil} genislik={340} boyut={92} />
      <VurguRozet t={t} bas={K(1, "20 percent")} vurgu="20%" not="NON-USERS" x={1130} y={120} renk={RENK.mercan} genislik={340} boyut={92} />
    </>
  );
};

export default S33;
