document.addEventListener("DOMContentLoaded", () => {
  console.log(document.querySelector("#procenter"));
  document.querySelector("#død").addEventListener("click", infomap);
  document.querySelector("#tilskade").addEventListener("click", infomap2);
  document.querySelector("#procenter").addEventListener("click", infomap3);
});

function infomap() {
  console.log("infomap");
  document.querySelector(".info-text > h2").textContent = "Dødstal";
  document.querySelector(".placeholder").textContent =
    "I perioden 2020 til 2024 mistede 48 cyklister livet som følge af hovedskader og uden brug af cykelhjelm";
  document.querySelector("#efficiency").textContent =
    "Hovedskader ved cykelstyrt uden cykelhjelm kan være meget alvorlige. Når man falder, er hovedet ubeskyttet, og selv små ulykker kan føre til hjernerystelse, kraniebrud eller skader på hjernen. En cykelhjelm beskytter ved at absorbere stødet og mindske belastningen på hovedet. Uden hjelm øges risikoen for alvorlige og varige skader betydeligt. Derfor er det vigtigt altid at bruge cykelhjelm, da den kan forebygge skader og i nogle tilfælde redde liv.";

  document.querySelector("#requirement").textContent =
    "Hvor meget er dit liv værd? Hvem vil savne dig? Hvad med dem omkring?";
}

function infomap2() {
  console.log("infomap2");
  document.querySelector(".info-text > h2").textContent = "Tilskadekomne";
  document.querySelector(".placeholder").textContent =
    "Tilskadekomne cyklister ved styrt kan få alt fra skrammer til alvorlige hovedskader. Uden hjelm er risikoen for alvorlige skader meget større, selv ved lav fart. Cykelhjelm reducerer risikoen betydeligt.";
  document.querySelector("#efficiency").textContent =
    "Tilskadekomne cyklister uden hjelm har en markant højere risiko for alvorlige hovedskader ved styrt. Uden beskyttelse kan selv mindre ulykker føre til hjernerystelse eller andre skader på hjernen. Mange af disse skader kunne være undgået eller mindre alvorlige med brug af cykelhjelm. Derfor er det vigtigt altid at køre med hjelm for at beskytte sig selv bedst muligt.";
}

function infomap3() {
  console.log("infomap3");
  document.querySelector(".info-text > h2").textContent = "Procenter";
  document.querySelector(".placeholder").textContent =
    "Procenter viser, at cyklister uden hjelm oftere får hovedskader ved styrt end dem med hjelm. Målinger viser også, at cykelhjelm kan reducere risikoen for alvorlige skader med op til omkring 60 %. Data peger på, at brug af hjelm markant øger sikkerheden ved cykling.";
  document.querySelector("#efficiency").textContent =
    "Ca. 31 % af tilskadekomne cyklister uden hjelm får hovedskader. Til sammenligning får kun 15 % med hjelm hovedskader. En cykelhjelm kan reducere risikoen for hovedskader med omkring 60 %. Omkring 51 % af cyklister i Danmark bruger hjelm, men langt færre unge gør det (ca. 32 %).";
}
