// Sahne 47 — İpucu 3: bir çay kaşığını ölç (21 kcal, 6 g şeker); kavanozdan dökülen ~3 katı olabilir.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOlc = K(1, "measure"), tLevel = K(2, "level"), tThird = K(2, "third"), t21 = K(2, "21"), t6 = K(2, "6 grams");
  const tPour = K(3, "pour"), tJar = K(3, "jar"), tThree = K(3, "three times");
  const [sn, an] = pop(t, 0.05, 0.5);
  const bit = tPour - 0.15;
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        {/* kadran üzerindeki bozuk küçük yazıyı kapat */}
        <div style={{ position: "absolute", left: 1195, top: 805, width: 130, height: 66,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F1EDE0 0%, #F1EDE0 70%, rgba(241,237,224,0) 100%)" }} />
        <Etiket t={t} bas={tOlc} bitis={bit} capa={[1190, 790]} konum={[880, 800]} metin="MEASURE IT" renk={RENK.lacivert} />
        <Etiket t={t} bas={tJar} capa={[1613, 760]} konum={[1640, 610]} metin="STRAIGHT FROM JAR" renk={RENK.mercan} />
      </Kamera>
      {/* parça numarası */}
      <div style={{ position: "absolute", left: 100, top: 90, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52,
        transform: `scale(${sn})`, opacity: an }}>3</div>
      <Baslik t={t} bas={tLevel} metin="1 TEASPOON" x={100} y={320} boyut={150} renk={RENK.koyuYesil} />
      <Not t={t} bas={tThird} metin="A level teaspoon = ⅓ tablespoon" x={104} y={410} boyut={36} />
      <VurguRozet t={t} bas={t21} vurgu="21" not="CALORIES" x={300} y={520} genislik={340} renk={RENK.altin} bitis={bit} />
      <VurguRozet t={t} bas={t6} vurgu="6 G" not="OF SUGAR" x={680} y={520} genislik={340} renk={RENK.altin} bitis={bit} />
      <VurguRozet t={t} bas={tThree} vurgu="≈ 3×" not="A POUR FROM THE JAR" x={490} y={520} genislik={460} renk={RENK.mercan} />
    </>
  );
};

export default S47;
