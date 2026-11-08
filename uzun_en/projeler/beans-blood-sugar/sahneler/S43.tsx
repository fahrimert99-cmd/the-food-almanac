// Sahne 43 — Adım 2: konserve fasulyeyi durula
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop, VurguRozet } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tRinse = K(1, "Rinse");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        {/* durulama suyu: kevgirden kaseye */}
        <Parcaciklar t={t} bas={tRinse + 0.2} kaynak={[690, 610]} hedef={[700, 730]} adet={16} aralik={0.14} omur={0.9}
          yayilma={50} kavis={-10} hedefYayilma={70} renk="#9CC3D8" boyut={5} tohum="su" />
        {/* 1. vuruş: konserve, kevgir, tuzsuz seçenek */}
        <Etiket t={t} bas={K(1, "canned")} capa={[1290, 450]} konum={[1730, 330]} metin="CANNED" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "colander")} capa={[570, 450]} konum={[290, 330]} metin="COLANDER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "salt")} capa={[1400, 560]} konum={[1660, 650]} metin="NO SALT ADDED" renk={RENK.yesil} />
      </Kamera>
      {/* sol boş kâğıt: adım numarası ve başlık */}
      <div style={{ position: "absolute", left: 70, top: 470, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76,
        transform: `scale(${sc})`, opacity: al }}>2</div>
      <Baslik t={t} bas={tRinse} metin="RINSE" x={70} y={660} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tRinse + 0.18} metin="CANNED" x={70} y={760} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tRinse + 0.36} metin="BEANS" x={70} y={860} boyut={100} renk={RENK.lacivert} />
      {/* 2. cümle: sodyum */}
      <VurguRozet t={t} bas={K(2, "sodium") - 0.3} vurgu="LESS SODIUM" not="trims some of it" x={1690} y={790} genislik={400} boyut={64} renk={RENK.yesil} />
    </>
  );
};

export default S43;
