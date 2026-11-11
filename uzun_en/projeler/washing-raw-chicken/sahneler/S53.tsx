// Sahne 53 — alışkanlık 2: ayrı kesme tahtası; sonra sıcak sabunlu suyla yıka.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSep = K(1, "separate"), tRaw = K(1, "raw chicken"), tAfter = K(2, "afterward");
  const tBoard = K(2, "board"), tUt = K(2, "utensils"), tCt = K(2, "countertops"), tSoap = K(2, "soapy"), tBef = K(2, "before you");
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        {/* görselin sağ kenarı: kâğıt panelle yumuşat */}
        <div style={{ position: "absolute", left: 1235, top: 0, width: 685, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 7%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={tRaw} bitis={tSoap - 0.3} capa={[330, 700]} konum={[440, 500]} metin="RAW CHICKEN ONLY" renk={RENK.mercan} />
        <Etiket t={t} bas={tSoap} capa={[700, 400]} konum={[900, 110]} metin="HOT, SOAPY WATER" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 1310, top: 110, width: 100, height: 100, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        transform: `scale(${sc})`, opacity: al }}>2</div>
      <BaslikBlok t={t} bas={tSep} satirlar={["A SEPARATE", "BOARD"]} x={1310} y={270} boyut={96} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tAfter} metin="AFTERWARD, WASH:" x={1310} y={520} boyut={28} genislik={560} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="onay" x={1310} y={580} aralik={78} boyut={34} genislik={560}
        ogeler={[{ bas: tBoard, metin: "THE BOARD" }, { bas: tUt, metin: "UTENSILS" }, { bas: tCt, metin: "COUNTERTOPS" }]} />
      <Not t={t} bas={tBef} metin="BEFORE PREPARING ANYTHING ELSE" x={1310} y={830} boyut={28} genislik={560} />
    </>
  );
};

export default S53;
