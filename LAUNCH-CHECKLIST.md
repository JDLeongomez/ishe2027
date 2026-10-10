# Before the site goes public

## 1. Technical

- [ ] `npm install`, `npm run check` and `npm run build` run without errors (never run so far).
- [ ] Deployed on Netlify and checked on a phone.
- [ ] Final domain set in Netlify and in `src/data/site.ts` (`url`).
- [ ] Contact email set in `src/data/site.ts` (`contactEmail`) and in `src/content/pages/about/contact.md`.
- [ ] Visual identity applied: `src/styles/tokens.css`, logo in the header, hero (`src/components/Ridge.astro`), favicon, a social sharing (OG) image. If the ridge keeps the church-in-the-mountains motif, make it read clearly as white and as a church — see the concept sketch at `/home/jdl/Documents/Sync/Research/Conferencias y visitas académicas/PLAN ISHE 2027/Imagen ISHE 2027/Ideas preliminares/ISHE2027_D2_linea.svg`.
- [ ] Once a final palette is decided, confirm it can be applied by editing `src/styles/tokens.css` alone, with no colours hardcoded elsewhere in the site.
- [ ] Check that the ISHE and Universidad El Bosque logos are used correctly (size, spacing, approved colour variant) against each organisation's own brand guidelines, if they have one.
- [ ] Photos added, each with a licence that allows it. None of the presentation's images were copied, because their licences are unknown.
- [x] ~~The flight map on "Getting here" was broken (CARTO's `DarkMatter` basemap started requiring an API key, showing an "API KEY REQUIRED" watermark) and loaded from a separate repo.~~ Fixed: `bog_flights_map.R` (in `Presentation-ISHE-2027`) no longer fetches any basemap tiles — it draws the world from bundled Natural Earth data instead, so there is nothing left to request and nothing that can start requiring a key again. The regenerated `bog_map.html` is copied into `public/` here and the iframe points to `/bog_map.html`. If the flight routes or destinations ever change, re-run `bog_flights_map.R` and copy the new `bog_map.html` over again — it is not symlinked or auto-synced.
- [ ] `indexable: true` in `src/data/site.ts`.

## 2. To agree with ISHE

- [ ] Official name of the meeting. The site says "ISHE Congress 2027". The 2026 meeting was the "XXVIII Biennial Congress".
- [ ] The description of ISHE on the home page and the About page (paraphrased, not the society's own wording).
- [ ] Full list of organisers and the programme committee, with titles, affiliations and a link to each person's profile.
- [ ] Code of conduct: adapt the one ISHE used for its 2026 meeting in Les Eyzies, France (https://ishe.org/conferences-and-summer-institutes/), updating event and venue details for ISHE 2027. Draft text is saved as a comment in `src/content/pages/about/code-of-conduct.md`; publish it there and delete the `status: soon` line.
- [ ] Ask Jarka to review the whole site and list what needs to change.
- [ ] Whether the Monday cocktail, the poster session at Universidad El Bosque, the city tour route and the Caribbean trip can be announced as written (all marked as preliminary).

## 3. Open points

- [ ] **Inaugural cocktail day.** The site says Monday 5 July, after the opening lecture. Confirm the day.
- [ ] **Friday 9 July 2027 may be a public holiday.** Law 2578 of 2026 made 9 July a national holiday. Sources disagree on whether in 2027 it is observed on Friday 9 or moved to Monday 12, and the law is being challenged in the Constitutional Court. The site does not mention it yet.
- [ ] **Monday 5 July 2027 is a public holiday** (San Pedro y San Pablo). The site says so on the Programme and Practical information pages.

## 4. Facts to verify

Sources are given where there is one. "General knowledge" means no source was checked.

### Getting here

- [ ] "More than 100 destinations in around 30 countries" (presentation: 103 destinations, 30 countries, FlightConnections 2026).
- [ ] Visa-free entry for the EU, UK, USA and Canada. UK confirmed on gov.uk (updated 7 October 2026). The others come from the presentation.
- [ ] Reciprocity fee for Canadian citizens (general knowledge).
- [ ] Check-Mig is optional, 72 hours to 1 hour before the flight (gov.uk, October 2026). It has been mandatory in the past.
- [ ] Passport validity recommendation of six months (gov.uk).
- [ ] Yellow fever wording (gov.uk for the certificate; "Bogotá is not a risk area" is general knowledge).
- [ ] Airport distance (14 km) and driving time (30 to 60 minutes): estimates.
- [ ] Taxi fare "USD 20 at most": your figure. Add the amount in pesos.
- [ ] Uber, DiDi, Cabify and inDrive all operating in 2027, and the sentence about sitting in the front seat.
- [ ] TransMilenio: M86 and K86 dual service, feeder 16-14, TuLlave card sold at the airport (bogota.gov.co, June 2026). The M86 ran Monday to Saturday in February 2026 (Publimetro). Sunday and holiday service, the nearest stop and the walking time to Parque de la 93 are not confirmed.

### Where to stay

- [ ] Hotel prices of USD 80 to 120 a night (presentation).
- [ ] VAT on accommodation for foreign visitors. The exemption was in force in July 2026, and a tax reform proposed removing it (Infobae, 22 July 2026). Current status unknown.
- [ ] Walking and driving times between areas: estimates.

### Weather and altitude

- [ ] Temperatures (presentation: 6 to 19 °C, 14.5 °C on average).
- [ ] "July is one of the drier months, and often windy" (general knowledge).
- [ ] The health advice, ideally read by someone with medical training.

### Practical information

- [ ] Tap water, tipping, SIM card registration, plug types (general knowledge).
- [ ] Ciclovía: Sundays and holidays, 7 am to 2 pm, more than 100 km, since 1974 (general knowledge).
- [ ] Sunrise and sunset times (general knowledge).

### Things to do

- [ ] El Chato topped Latin America's 50 Best in 2025 (presentation). A newer list may exist by launch.
- [ ] Museo Botero free entry, Museo del Oro figure, UNESCO City of Music since 2012, bird species, distances and times for day trips (general knowledge).

### Staying safe

- [ ] Tone, and whether to name the two hospitals.

### Colombia

- [ ] Biodiversity rankings (presentation, from SiB Colombia).
- [ ] 65 Indigenous languages and two Creole languages (general knowledge).
- [ ] All YouTube links still work.

### About

- [ ] Name of the lab ("Human Behaviour and Evolution Lab (EvoCo)", from the presentation) and the "High Quality" recognition.
- [ ] CODEC's A1 classification ("the top category for research groups in Colombia"): confirm the source (Minciencias ranking) and that it is still current.
