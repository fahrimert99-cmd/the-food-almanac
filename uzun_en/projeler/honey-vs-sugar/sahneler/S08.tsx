// Sahne 8 — glisemik indeks: bal 61, sofra şekeri 65 (Atkinson 2008).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tGi = K(0, "glycemic index"), tGlu = K(0, "pure glucose");
  const tSeker = K(1, "table sugar"), t65 = K(1, "65"), tBal = K(1, "honey about"), t61 = K(1, "61");
  const kam = kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800]);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kam}>
        {/* kronometre kadranındaki anlamsız yazıyı kadran rengiyle kapat */}
        <div style={{ position: "absolute", left: 944, top: 784, width: 82, height: 32, borderRadius: "50%",
          background: "radial-gradient(ellipse, #F1EBDA 0%, #F1EBDA 70%, rgba(241,235,218,0) 100%)" }} />
        <Etiket t={t} bas={tSeker} bitis={1e9} capa={[1370, 800]} konum={[1640, 660]} metin="TABLE SUGAR" renk={RENK.lacivert} />
        <Etiket t={t} bas={tBal} bitis={1e9} capa={[600, 790]} konum={[300, 660]} metin="HONEY" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle: tanım */}
      <Baslik t={t} bas={tGi} bitis={c[1].bas - 0.2} metin="GLYCEMIC INDEX" x={960} y={250} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tGlu - 0.1} bitis={c[1].bas - 0.2} metin="SPEED OF BLOOD SUGAR RISE vs. PURE GLUCOSE" x={960} y={340} hiza="orta" boyut={36} renk={RENK.lacivert} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={c[1].bas} />
      {/* 2. cümle: iki skor */}
      <Baslik t={t} bas={t65 - 0.05} metin="SUGAR 65" x={1370} y={520} boyut={104} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={t61 - 0.05} metin="HONEY 61" x={600} y={520} boyut={104} renk={RENK.altin} hiza="orta" />
      <VurguRozet t={t} bas={t61 + 0.5} vurgu="61 vs 65" not="glycemic index" x={960} y={150} genislik={420} />
    </>
  );
};

export default S08;
