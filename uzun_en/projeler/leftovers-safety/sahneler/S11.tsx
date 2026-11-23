// Sahne 11 — piknik örtüsü: üç durum listesi, sonra 'discard it'.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = [K(0, "holiday"), K(0, "picnic,"), K(0, "pot")];
  const tUzun = K(1, "longer,"), tAt = K(1, "discard");
  const [sc, al] = pop(t, tUzun, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [40, 70, 1840], [150, 130, 1640])}>
        <Etiket t={t} bas={tListe[1]} bitis={tUzun} capa={[500, 640]} konum={[330, 900]} metin="PICNIC BASKET" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tListe[2]} bitis={tUzun} capa={[1400, 760]} konum={[1500, 920]} metin="COVERED POT" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Liste t={t} x={1400} y={130} aralik={86} boyut={36} isaret="nokta" genislik={640}
        ogeler={[
          { bas: tListe[0], metin: "HOLIDAY TABLE", renk: RENK.altin, bitis: tUzun - 0.1 },
          { bas: tListe[1], metin: "PICNIC", renk: RENK.altin, bitis: tUzun - 0.1 },
          { bas: tListe[2], metin: "POT AFTER DINNER", renk: RENK.altin, bitis: tUzun - 0.1 },
        ]} />
      <div style={{ position: "absolute", left: 1400, top: 150, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
        padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.mercan }} />
        OUT LONGER
      </div>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "Nebraska")} />
      <Baslik t={t} bas={tAt} metin="DISCARD IT" x={1470} y={330} boyut={96} renk={RENK.mercan} />
      <Ikon t={t} bas={tAt + 0.2} ad="carpi" x={1405} y={330} boyut={70} zemin={RENK.mercan} />
    </>
  );
};

export default S11;
