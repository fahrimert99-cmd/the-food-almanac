// Sahne 49 — Fikir 2: etiketi oku (sol panel başlık, şişe etiketinde yazı, şeker rozeti).
import React from "react";
import { ANTON, AltSis, Baslik, BaslikBlok, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tLabel = K(1, "read the label"), tAdd = K(2, "added sugars"), t25 = K(2, "25 grams");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={pencere}>
        {/* şişenin boş etiketi üzerinde */}
        <Baslik t={t} bas={tAdd} metin="ADDED" x={960} y={640} boyut={64} renk={RENK.mercan} hiza="orta" />
        <Baslik t={t} bas={tAdd + 0.18} metin="SUGARS" x={960} y={712} boyut={64} renk={RENK.mercan} hiza="orta" />
      </Kamera>
      <AltSis a={0.6} />
      {/* sol panel: soldaki sahte yazı da örtülür */}
      <Panel a={1} taraf="sol" genislik={780} opak={0.97} />
      <div style={{ position: "absolute", left: 70, top: 120, width: 92, height: 92, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60, transform: `scale(${sc})`, opacity: al,
        border: `5px solid ${RENK.kagitAcik}` }}>2</div>
      <BaslikBlok t={t} bas={tLabel - 0.1} satirlar={["READ THE", "LABEL"]} x={70} y={340} boyut={120} />
      <Not t={t} bas={tAdd} metin="Check the added sugars" x={74} y={560} boyut={36} />
      <VurguRozet t={t} bas={t25 - 0.1} vurgu="≈ 25 G" not="sugar in 8 oz of sweetened cocktail" x={1540} y={330} genislik={560} />
    </>
  );
};

export default S49;
