// Sahne 6 — sloganın kökeni: tahıl ve domuz pastırması pazarlaması; bilimsel bulgu değil.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const bit = K(1, "slogan") - 0.2;
  const [sc, al] = pop(t, K(0, "accounts"), 0.5);
  const a = al * sol(t, bit);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 50, 1760])}>
        {/* kutudaki bozuk yazı kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 365, top: 640, width: 130, height: 70,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(250,198,82) 0%, rgb(250,198,82) 65%, rgba(250,198,82,0) 100%)" }} />
        <Etiket t={t} bas={K(0, "cereal")} bitis={bit} capa={[330, 250]} konum={[760, 230]} metin="CEREAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "bacon")} bitis={bit} capa={[640, 800]} konum={[950, 740]} metin="BACON" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "early")} bitis={bit} metin="EARLY 20TH CENTURY" x={1860} y={230} boyut={40} hiza="sag" font="inter" renk={RENK.altin} aralik={3} />
      <Baslik t={t} bas={K(0, "marketing,")} bitis={bit} metin="MARKETING" x={1860} y={340} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <div style={{ position: "absolute", right: 60, top: 450, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
        <Hap metin="ACCOUNTS DIFFER" renk={RENK.gri} boyut={34} />
      </div>
      <Baslik t={t} bas={K(1, "slogan")} metin={b.satirlar[0]} x={1860} y={330} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin={b.satirlar[1]} x={1860} y={450} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "finding.")} metin="NOT A SCIENTIFIC FINDING" x={1860} y={550} hiza="sag" boyut={32} agirlik={800} genislik={600} />
    </>
  );
};

export default S06;
