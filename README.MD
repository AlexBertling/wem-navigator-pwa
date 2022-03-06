# Web Engineering Master Semesterprojekt

## PWA Navigator

[![Netlify Status](https://api.netlify.com/api/v1/badges/a4ac3166-c00b-4eda-b6ac-b8cb1ea5cffd/deploy-status)](https://app.netlify.com/sites/wem-navigator-pwa/deploys)

Subrepository für das Semesterprojekt im Masterkurs "Web Engineering" im Wintersemester 2021.

[Link zum Main-Repository](https://github.com/AlexBertling/web-engineering-semesterprojekt)

Diese Navigator-Version wurde als Progressive Web App (PWA) implementiert. Dazu wurden folgende Anpassungen im Vergleich zur ursprünglichen Variante vorgenommen:

- Deployment mit HTTPS
- Service-Worker mit Caching-Strategie
  - Cache on Install von vordefinierten URLs
  - kumulatives Caching für nicht vorhergesehene URLs
- Einführung von erforderlichen Meta-Tags in index.html
- Anlegen eine manifest.json

[Link zum Lighthouse-Report](./report.html)
