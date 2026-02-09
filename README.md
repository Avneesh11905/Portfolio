# Portfolio

Personal portfolio website with editable content via JSON files.

## Quick Start

```bash
npm install
npm run dev
```

## Features

- **Dynamic Content**: All text and data driven by JSON files in `data/`.
- **Skeleton Loaders**: Polished loading states with animations for all sections.
- **SEO Optimized**: Dynamic meta tags and OpenGraph support.
- **Responsive Design**: Mobile-friendly swipeable carousels and layouts.
- **Themeable**: Built with Tailwind CSS and shadcn/ui.

## Folder Structure

```
portfolio/
├── data/                    # Editable JSON content (see example-data/)
│   ├── profile.json         # Personal info & stats
│   ├── projects.json        # Project cards
│   ├── skills.json          # Skill categories
│   ├── certifications.json  # Certifications
│   └── contact.json         # Contact links
├── example-data/            # Reference JSON templates
├── example-images/          # Reference images
├── images/                  # Profile & project images (mounted in Docker)
├── public/                  # Static assets (favicons, etc.)
├── src/
│   ├── components/          # React components
│   └── hooks/
│       └── useContent.ts    # Data fetching hook
├── docker-compose.yml
└── Dockerfile
```

## JSON Formats

### profile.json

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "subtitle": "Short tagline",
  "bio": "Brief description about yourself",
  "profileImage": "profile.webp",
  "email": "you@example.com",
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username",
}
```

### projects.json

```json
[
  {
    "title": "Project Name",
    "description": "Project description",
    "tags": ["React", "TypeScript", "Node.js"],
    "github": "https://github.com/user/repo",
    "demo": "https://demo-url.com",
    "image": "project.png"
  }
]
```

| Field | Required | Description |
|-------|----------|-------------|
| title | ✅ | Project name |
| description | ✅ | Short description |
| tags | ✅ | Technology tags (array) |
| github | ❌ | GitHub repository URL |
| demo | ❌ | Live demo URL (shows Demo button) |
| image | ❌ | Image filename in `/images/` |

### skills.json

```json
[
  {
    "category": "Category Name",
    "icon": "Code2",
    "items": ["Skill 1", "Skill 2", "Skill 3"]
  }
]
```

**Available icons:** `Code2`, `Brain`, `Globe`, `Cloud`, `Database`, `Server`

### certifications.json

```json
[
  {
    "title": "Certification Name",
    "issuer": "Issuing Organization",
    "status": "Completed",
    "description": "Brief description",
    "inProgress": false
  }
]
```

| Field | Description |
|-------|-------------|
| status | Display text (e.g., "Completed", "In Progress") |
| inProgress | `true` shows clock icon, `false` shows award icon |

### contact.json

```json
{
  "email": "you@example.com",
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username"
}
```

*Note: These values populate the Contact section and social links in the Hero.*

## Images

Place images in `images/` (in the project root) or `public/images/`.

Reference by filename only (e.g. `profile.png`). The application will look in `/images/` automatically.

```json
{
  "profileImage": "profile.webp",
  "image": "project.png"
}
```

## Docker Deployment

```bash
docker-compose up -d
```

Content is hot-reloadable - edit JSON files without rebuilding.
