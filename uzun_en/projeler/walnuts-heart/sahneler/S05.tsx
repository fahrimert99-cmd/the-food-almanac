// Sahne 5 — bir ons ≈ 180 kalori: terazi + ölçü kabı, sağda başlık ve değer hapları
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapci: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string }> = ({ t, bas, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1650, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={34} />
    </div>
  );
};

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [130, 90, 1660])}>
        <Etiket t={t} bas={K(1, "cup")} capa={[1150, 640]} konum={[1130, 480]} metin="¼ CUP OF HALVES" renk={RENK.altin} />
        {/* ölçü kabındaki bozuk işaretleri örten leke */}
        <div style={{ position: "absolute", left: 1235, top: 650, width: 150, height: 100,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(250,246,238,1) 0%, rgba(250,246,238,1) 55%, rgba(250,246,238,0) 100%)" }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "mostly")} bitis={c[1].bas - 0.1} metin="MOSTLY FAT" x={1000} y={200} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "One")} metin={b.satirlar[0]} x={1000} y={180} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "180")} metin={b.satirlar[1]} x={1000} y={290} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "quarter")} metin={b.not!} x={1000} y={370} boyut={30} />
      <Hapci t={t} bas={K(1, "4")} metin="4 G PROTEIN" y={620} renk={RENK.yesil} />
      <Hapci t={t} bas={K(1, "2")} metin="2 G FIBER" y={730} renk={RENK.altin} />
    </>
  );
};

export default S05;
