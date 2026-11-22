// Sahne 26 — yazarların ölçülü görüşü (sağ panelde sıralı mesajlar).
import React from "react";
import { Baslik, Etiket, IkonYol, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820]);
  const pPanel = eout(ilerle(t, 0.2, 0.8));
  const tNot = K(1, "isn't");
  const tBut = K(1, "because");
  const tTest = K(1, "people");
  const X = 1390;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={pen}>
        {/* şişe etiketindeki bozuk yazı boş etiketle örtülür */}
        <div style={{ position: "absolute", left: 792, top: 792, width: 100, height: 134, background: "#EFE6CC", border: `3px solid ${RENK.murekkep}`, borderRadius: 6, opacity: 0.97 }} />
        <Etiket t={t} bas={K(1, "vitamin")} bitis={tBut - 0.2} capa={[842, 790]} konum={[420, 330]} metin="VITAMIN C" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={660} opak={0.96} />
      <Baslik t={t} bas={K(0, "reviewers'")} bitis={c[1].bas - 0.1} metin="THE REVIEWERS'" x={X} y={300} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "measured")} bitis={c[1].bas - 0.1} metin="MEASURED VIEW" x={X} y={380} boyut={64} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "routine")} bitis={tBut - 0.2} metin="ROUTINE VITAMIN C" x={X} y={240} boyut={60} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "everyone")} bitis={tBut - 0.2} metin="FOR EVERYONE" x={X} y={310} boyut={60} renk={RENK.lacivert} />
      <Liste t={t} x={X} y={380} boyut={40} isaret="carpi" genislik={480} ogeler={[{ bas: tNot, bitis: tBut - 0.2, metin: "NOT JUSTIFIED", renk: RENK.mercan }]} />
      <Liste t={t} x={X} y={250} boyut={40} isaret="onay" genislik={480} aralik={200} ogeler={[
        { bas: tBut, metin: "INEXPENSIVE", renk: RENK.yesil },
        { bas: tTest, metin: "PEOPLE WITH COLDS MAY TEST WHETHER IT HELPS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S26;
