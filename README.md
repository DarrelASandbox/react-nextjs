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

### Page Pre-Rendering & Data Fetching

![page-pre-rendering](diagrams/page-pre-rendering.png)

- **Static Site Generation (SSG)**
  - Pre-generation a page (with data prepared on the server-side) during build time
  - Pages are prepared ahead to time and can be cached by the server/ CDN serving the app
  - `export async function getStaticProps(context){...}`
- **Incremental Static Regeneration (ISR)**
  - Pre-generate Page
  - Re-generate it on every request, at most every X seconds
    - Serve "old" page if re-generation is not needed yet
    - Generate, store and serve "new" page otherwise
  - `export async function getStaticPaths(){...}`

&nbsp;

### Combining "Standard Rect" & NextJS

- **Server Side Rendering (SSR)**
  - Pre-render for every request
  - Need to access to the request object (e.g. cookies)
  - `export async function getServerSideProps(){...}`
- **Client-Side Data Fetching**
  - Data that doesn't require pre-rendering
    - Data changing with high frequency (e.g. stock data)
    - User specific data (e.g. last orders in an online shop)
    - Partial data (e.g. data that's only used on a part of an page)
  - Pre-fetching the data for page generation might not work or be required
    - "Traditional" client-side data fetching (e.g. `useEffect()` with `fetch()` is fine)
  - `npm i swr` ([SWR - React Hooks for Data Fetching](https://swr.vercel.app/))

&nbsp;

### API Routes & Fullstack Capabilities

- Store server side code in `./pages/api`
- Using NodeJS features in `api` folder

&nbsp;

---

&nbsp;

## Advanced Concepts

### Optimization Opportunities

- Adding meta and <head> tags
- Re-using components, logic & configuration
- Optimizing images

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

- [Firebase](https://console.firebase.google.com)
  - Create Project
  - Create Realtime Database in test mode
  - Import `dummy-data.json`

&nbsp;

---

&nbsp;

## next-full-blog

&nbsp;

---

&nbsp;
