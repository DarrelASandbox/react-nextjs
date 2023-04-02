## About The Project

- Next.js & React - The Complete Guide (incl. Two Paths!)
- Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!
- [GitHub - nextjs-course-code](https://github.com/mschwarzmueller/nextjs-course-code)
- [Maximilian Schwarzmüller](https://github.com/maxschwarzmueller)
- [Academind](https://academind.com/)

&nbsp;

---

&nbsp;

## Why NextJS

- The React Framework for Production
- **Key Features:**
  - **Server-Side Rendering (SSR)**
    - Automatic page pre-rendering: Great for SEO and initial load
    - Blending client-side and server-side: Fetch data on the server and render finished pages
  - **File-Based Routing**
    - Define pages and routes with files and folders instead of code
    - Less code, less work, highly understandable
  - **Fullstack Capabilities**
    - Easily add backend (server-side) code to your Next/ React apps
    - Storing data, getting data, authentication etc. can be added to your React projects

&nbsp;

---

&nbsp;

## Course Outline

- **Basic & Foundation** (Introducing key features)
  - File-Based Routing
  - Page Pre-Rendering & Data Fetching
  - Combining "Standard Rect" & NextJS
  - API Routes & Fullstack Capabilities
- **Advanced Concepts** (Building for production)
  - Optimization Opportunities
  - Looking Behind the Scenes & Theory
  - Deployment & Configuration
  - Authentication
- **Summaries & Refreshers** (Optimizing your time)
  - ReactJS Refresher
  - NextJS Summary

&nbsp;

---

&nbsp;

## Setup

- `npx create-next-app`
- Parsing error : Cannot find module 'next/babel' -> `.eslintrc.json` -> `"extends": ["next/babel","next/core-web-vitals"]`
- `next dev`

&nbsp;

---

&nbsp;

## Basic & Foundation

### File-Based Routing

![file-based-routing](diagrams/file-based-routing.png)

&nbsp;

---

&nbsp;

## next-events-app

### Planning The Project Routes

|        Path         |         Page         |       Remarks        |
| :-----------------: | :------------------: | :------------------: |
|         `/`         |     Landing Page     | Show featured event  |
|      `/events`      |     Events Page      |   Show all events    |
| `/events/<some-id>` |  Event Details Page  | Show selected event  |
|  `/events/...slug`  | Filtered Events Page | Show filtered events |

&nbsp;

---

&nbsp;
