# AgriVista Consulting — Website

A static website for an agriculture consultancy that serves India and clients worldwide. It covers farm consultation, agro eco-tourism and medicinal plants, and has online booking through **Calendly**.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home: hero, overview of the services, who we help, process, about, testimonials |
| `services.html` | Details for each service: India, Global, Agro Eco-Tourism, Medicinal Plants, plus an FAQ |
| `book.html` | Booking page with an embedded Calendly calendar and a service picker |

## Personalise (5 minutes)
Edit **`js/config.js`**:
- `CALENDLY_URL`: your Calendly link (Calendly → Event Types → Copy link)
- `serviceLinks`: optional separate Calendly event types for each service
- `brandName`, `consultantName`, `email`, `phone`, `whatsapp`, `location`

Then update the text in the HTML files: the stats in the hero, your bio, and real testimonials. Replace the placeholder portrait in `index.html` (`.portrait`) with `<img src="images/you.jpg">`.

Service buttons link to `book.html?service=india|global|ecotourism|medicinal|discovery`, and the booking page selects that service automatically.

## Preview locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Publish (free)
- **GitHub Pages:** in the repo, go to Settings → Pages, set Source to `main` branch and `/ (root)`, then save.
- **Netlify / Vercel:** drag and drop the folder, or import the repo. No build step is needed.
- To use a custom domain (e.g. `www.yourbrand.com`), add it in the host's settings.
