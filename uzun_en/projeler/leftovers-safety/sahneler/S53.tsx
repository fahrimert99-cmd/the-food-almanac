// Alışkanlık 3: tarih etiketi, 3–4 gün, 4. gün son çağrı. Görseldeki bozuk yazılar kendi etiket/takvimle örtülür.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDate = K(1, "Date"), t34 = K(1, "three to four"), tLast = K(2, "last call"), tFz = K(2, "freeze");
  const [sk] = pop(t, tDate, 0.5);
  const pT = eout(ilerle(t, tDate - 0.2, 0.5));
  const gunler = [1, 2, 3, 4];
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [160, 20, 1800], [260, 70, 1600])}>
        {/* kavanoz etiketindeki bozuk yazıyı örten temiz etiket */}
        <div style={{ position: "absolute", left: 510, top: 400, width: 230, height: 250, opacity: pT, transform: `rotate(2deg) scale(${0.9 + 0.1 * sk})`,
          background: "#EADFC3", border: `4px solid ${RENK.lacivert}`, borderRadius: 10, display: "flex", alignItems: "center",
          justifyContent: "center", flexDirection: "column", boxShadow: "0 6px 16px rgba(48,40,34,0.3)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 64, color: RENK.lacivert, lineHeight: 1 }}>DATE</div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.mercan, letterSpacing: 2, marginTop: 8 }}>IT!</div>
        </div>
        {/* takvim sayfasındaki sahte rakamları örten temiz gün kutuları */}
        <div style={{ position: "absolute", left: 840, top: 640, width: 275, height: 265, background: "#F1EADA", borderRadius: 8,
          border: `3px solid ${RENK.murekkep}`, opacity: eout(ilerle(t, 0.1, 0.5)) }} />
        {gunler.map((g, i) => {
          const son = g === 4;
          const [sc, al] = pop(t, son ? tLast : t34 + 0.15 * i, 0.45);
          return (
            <div key={g} style={{ position: "absolute", left: 862 + (i % 2) * 125, top: 665 + Math.floor(i / 2) * 115, width: 112, height: 100,
              borderRadius: 10, opacity: al, transform: `scale(${sc})`, background: son ? RENK.mercan : RENK.kagitAcik, color: son ? "#fff" : RENK.lacivert,
              border: `3px solid ${son ? RENK.mercan : RENK.lacivert}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 2 }}>DAY</div>
              <div style={{ fontFamily: ANTON, fontSize: 52, lineHeight: 1 }}>{g}</div>
            </div>
          );
        })}
        <Etiket t={t} bas={tLast + 0.2} capa={[1043, 830]} konum={[1290, 800]} metin="LAST CALL" renk={RENK.mercan} />
        <Etiket t={t} bas={tFz} capa={[1300, 420]} konum={[1350, 170]} metin="FREEZE EARLY" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={0.0} metin="HABIT 3" x={60} y={90} boyut={34} renk={RENK.altin} font="inter" aralik={7} />
      <VurguRozet t={t} bas={t34} vurgu="3–4 DAYS" not="eat it within" x={330} y={130} genislik={440} boyut={92} renk={RENK.yesil} />
    </>
  );
};

export default S53;
