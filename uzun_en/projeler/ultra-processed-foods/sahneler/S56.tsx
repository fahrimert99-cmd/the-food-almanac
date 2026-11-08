// Sahne 56 — büyük çalışmalar: ilişki var, kanıt değil.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, kis, pop, sol } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAss = K(1, "association"), tNot = K(1, "not"), tMod = K(1, "modest");
  const son = tAss - 0.15; // ilk cümle öğeleri çarpışmasın diye solar
  const [sc, al] = pop(t, tMod, 0.5);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        {/* tartı üzerindeki anlamsız yazı kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 850, top: 700, width: 150, height: 40,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #86898a 0%, #86898a 60%, rgba(134,137,138,0) 100%)" }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "studies")} bitis={son} metin="LARGE STUDIES" x={140} y={130} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "type")} bitis={son} metin="+ TYPE 2 DIABETES" x={144} y={215} boyut={40} renk={RENK.mercan} font="inter" agirlik={800} />
      <Etiket t={t} bas={K(0, "higher")} bitis={son} capa={[700, 520]} konum={[330, 440]} metin="HIGHER INTAKE" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "heart")} bitis={son} capa={[1000, 300]} konum={[1330, 170]} metin="HEART DISEASE" renk={RENK.mercan} />
      <Baslik t={t} bas={tAss} metin="ASSOCIATION," x={140} y={130} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} metin="NOT PROOF" x={140} y={225} boyut={84} renk={RENK.mercan} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 960, top: 884, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
          <Hap metin="MODEST DIFFERENCES PER PERSON" renk={RENK.altin} boyut={30} />
        </div>
      )}
    </>
  );
};

export default S56;
