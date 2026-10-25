// Sahne 47 — adım 1: seyrelt. Solda görsel, sağ boş kâğıt alanında numara, başlık, doz rozeti ve etiketler.
import React from "react";
import { ANTON, Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "one"), tDil = K(1, "dilute"), tTbsp = K(2, "tablespoons"), tOne2 = K(2, "one to two");
  const tVin = K(2, "apple cider vinegar"), tGlass = K(2, "glass of water"), tNot = K(2, "not a shot");
  const [sc, al] = pop(t, tOne, 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1760])}>
        {/* alttaki küçük sahte harf kalıntısı yer rengiyle örtülür */}
        <div style={{ position: "absolute", left: 730, top: 975, width: 140, height: 70,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(232,218,183) 0%, rgb(232,218,183) 60%, rgba(232,218,183,0) 100%)" }} />
        <Etiket t={t} bas={tTbsp - 0.1} bitis={tGlass - 0.2} capa={[615, 490]} konum={[960, 560]} metin="TABLESPOONS" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tGlass} capa={[690, 800]} konum={[1010, 790]} metin="GLASS OF WATER" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <div style={{ position: "absolute", left: 1000, top: 125, width: 120, height: 120, borderRadius: "50%", background: RENK.koyuYesil, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 80, transform: `scale(${sc})`, opacity: al }}>1</div>
      <Baslik t={t} bas={tDil} metin="DILUTE IT" x={1150} y={185} boyut={130} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tOne2} vurgu="1–2 TBSP" not="in a glass of water" x={1560} y={330} genislik={420} />
      <Not t={t} bas={tVin} metin="apple cider vinegar" x={1560} y={540} boyut={34} hiza="orta" agirlik={800} />
      <Ikon t={t} bas={tNot} ad="carpi" x={1150} y={700} boyut={84} zemin={RENK.mercan} />
      <Baslik t={t} bas={tNot} metin="NOT A SHOT" x={1220} y={700} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S47;
