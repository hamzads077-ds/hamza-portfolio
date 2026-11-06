# Muhammad Hamza Shah — Portfolio

Personal portfolio for Muhammad Hamza Shah, a BS Statistical Data Science student at International Islamic University Islamabad and aspiring data scientist.

## Project overview

This is a lightweight, dependency-free static website. It presents Hamza’s background, current education, technical learning areas, selected public GitHub projects, and contact links without inventing employment, completed degrees, years of experience, or achievements.

## Features

- Responsive hero, about, skills, projects, education, and contact sections
- Accessible semantic HTML, skip link, keyboard focus states, and reduced-motion support
- Mobile navigation with a small vanilla JavaScript interaction
- Project links for `mario-database`, `SQL-Student-Data-Analysis`, `python-practice-projects`, `hamza-portfolio`, and `skills-github-pages`
- ATS-friendly, text-first resume at [`resume.html`](resume.html)
- Download Resume link from the homepage; the HTML resume is also print-ready for browser **Print → Save as PDF**
- No framework, package manager, build step, or runtime dependency

## Local usage

From the repository root, run any static file server:

```bash
python -m http.server 8000
```

Open <http://localhost:8000>. The site can also be opened directly from `index.html`, although a local server is recommended for consistent browser behavior.

## Resume usage

Open [`resume.html`](resume.html) to view the ATS-friendly resume. It uses standard headings — Summary, Education, Technical Skills, Projects, and Links / Contact — with plain text, keyword-rich descriptions, and truthful student/project information. To create a PDF for an application, use the browser’s **Print → Save as PDF** option.

## GitHub Pages deployment

GitHub Pages is configured to publish the `main` branch from the repository root. To configure it manually:

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment, then open the generated site URL.

The expected public URL is <https://hamzads077-ds.github.io/hamza-portfolio-site/>.

## Public profiles

- Website: <https://hamza-ds.pages.dev>
- GitHub: <https://github.com/hamzads077-ds>
- LinkedIn: <https://www.linkedin.com/in/hamzads077>
- Email: <hamza.ds.077@gmail.com>
