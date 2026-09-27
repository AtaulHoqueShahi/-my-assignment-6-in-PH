This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# FitLog — Workout Library

A dark, modern, and focused workout planning application built with **Next.js**.  
FitLog helps you browse professional workouts, add them to your daily plan, save them for later, and track your training progress — all in a clean dark interface.

---

## Live Link

[Your Live Deployment Link Here]

---

## Project Description

FitLog is a complete Workout Library and Planning website. Users can explore different exercises, view detailed information, add workouts to **Today’s Plan**, or save them for later. The application also shows live statistics and keeps the data saved even after page reload using `localStorage`.

This project was built as part of Programming Hero Assignment (B14-A6).

---

## Features

- Browse 12 professional workouts fetched from a live API
- Beautiful and responsive workout cards
- Dynamic Workout Details page with full specifications and instructions
- Add any workout to **Today’s Plan**
- Save workouts for later
- Real-time **Plan** and **Saved** counters in the Navbar
- My Plan page with two tabs: Today’s Plan & Saved
- Live stats: Exercises, Minutes, and Calories
- Mark as Done functionality
- Remove workouts from plan/saved list
- Sort workouts by Duration, Calories, or Rating
- Empty state when no workouts are added
- Loading state while data is fetching
- Toast notifications for every important action
- Data persistence using localStorage
- Fully responsive design (Mobile, Tablet, Desktop)
- Custom 404 page
- Clean and professional dark UI

---

## Technologies Used

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Context API** (Global State Management)
- **react-hot-toast** (Notifications)
- **lucide-react** (Icons)
- **localStorage** (Data Persistence)

---

## API Used

- All Workouts:  
  `https://api.abcz.workers.dev/api/fitlog`

- Single Workout:  
  `https://api.abcz.workers.dev/api/fitlog/:id`

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AtaulHoqueShahi/b14-a6-fit-log.git
cd b14-a6-fit-log
2. Install dependencies
npm install
3. Run the development server
npm run dev
4.my plan er por ki ki korbu    my-hero-project/  
│  
├── public/  
│   ├── logo.svg  
│   └── images/  
│  
├── src/  
│   │  
│   ├── app/  
│   │   ├── globals.css  
│   │   ├── layout.tsx  
│   │   ├── page.tsx  
│   │   ├── loading.tsx  
│   │   ├── not-found.tsx  
│   │   │  
│   │   ├── workouts/  
│   │   │   └── [id]/  
│   │   │       └── page.tsx  
│   │   │  
│   │   └── my-plan/  
│   │       └── page.tsx  
│   │  
│   ├── components/  
│   │   │  
│   │   ├── Navbar.tsx  
│   │   ├── Footer.tsx  
│   │   │--ToastProvider.tsx 
│   │   ├── home/  
│   │   │   ├── Hero.tsx  
│   │   │   ├── WorkoutLibrary.tsx  
│   │   │   ├── WorkoutCard.tsx  
│   │   │   ├── SortDropdown.tsx  
│   │   │   └── WorkoutSkeleton.tsx  
│   │   │  
│   │   ├── workout/  
│   │   │   ├── WorkoutDetails.tsx  
│   │   │   ├── WorkoutSpecs.tsx  
│   │   │   └── WorkoutInstructions.tsx  
│   │   │  
│   │   └── plan/  
│   │       ├── PlanSummary.tsx  
│   │       ├── PlanTabs.tsx  
│   │       ├── PlanWorkoutCard.tsx  
│   │       └── EmptyPlan.tsx  
│   │  
│   ├── context/  
│   │   └── FitLogContext.tsx  
│   │  
│   ├── lib/  
│   │   ├── api.ts  
│   │   └── utils.ts  
│   │  
│   ├── types/  
│   │   └── workout.ts  
│   │  
│   └── data/  
│       └── fitlog.json  
│  
├── package.json  
├── tsconfig.json  
├── next.config.ts  
├── postcss.config.mjs  
├── eslint.config.mjs  
├── README.md  
└── .gitignore    
5.     

Worked for 11s
ভালো অগ্রগতি হয়েছে ভাই। প্রায় সব মেইন কাজ শেষ।

এখন যা বাকি আছে (প্রায়োরিটি অনুযায়ী):
কাজ	স্ট্যাটাস	প্রায়োরিটি
README.md	❌ বাকি	হাই
Mark as Done চেক আইকন	আইকন বাকি	মিডিয়াম
Remove X আইকন	আইকন বাকি	মিডিয়াম
5-workout cap	অপশনাল	লো
Deployment	❌ বাকি	হাই ( Sabmit এর আগে)
এখন কী করব?
আমি সাজেশন দিচ্ছি এই অর্ডারে:

README.md বানিয়ে দিই (খুব দ্রুত)
Mark as Done ও Remove বাটনে সঠিক আইকন বসাই
(চাইলে) ৫টা Workout-এর লিমিট যোগ করি
শেষে Deployment গাইড দিই
কোনটা দিয়ে শুরু করতে চাও?

1 → README বানাও
2 → Mark as Done + Remove আইকন ঠিক করো
3 → দুইটাই একসাথে করো
4 → সরাসরি Deployment-এ যাই
নম্বর বলে দাও।

potom 3 ta dao


Worked for 12s
ঠিক আছে, প্রথম ৩টা একসাথে দিচ্ছি।

১. README.md
প্রজেক্টের রুট ফোল্ডারে README.md ফাইল তৈরি করে নিচের কোড পেস্ট করো:

# FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse workouts, add them to today’s plan or save for later, and track your training.

## Live Demo

[Your Live Link Here]

## Features

- Browse 12 professional workouts from a live API
- Dynamic workout details page with full specs and instructions
- Add workouts to **Today’s Plan** or **Saved** list
- Real-time Plan & Saved counters in the navbar
- My Plan page with tabs, live stats (Exercises, Minutes, Calories)
- Mark as Done and Remove functionality
- Sort workouts by Duration, Calories, or Rating
- Data persists using localStorage
- Fully responsive design (mobile, tablet, desktop)
- Toast notifications for user actions
- Custom 404 page

## Technologies Used

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Context API** (State Management)
- **react-hot-toast**
- **lucide-react** (Icons)
- **localStorage**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
Open http://localhost:3000 in your browser.

API
All workouts: https://api.abcz.workers.dev/api/fitlog
Single workout: https://api.abcz.workers.dev/api/fitlog/:id
Project Structure
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── my-plan/page.tsx      # My Plan page
│   ├── workouts/[id]/page.tsx
│   └── not-found.tsx
├── components/
├── context/
├── lib/
└── types/
Author
Ataul Hoque Shahi

---

## ২ & ৩. Mark as Done + Remove বাটনে আইকন

`lucide-react` ইনস্টল করা না থাকলে আগে ইনস্টল করো:

```bash
npm install lucide-react
এখন যেখানে Mark as Done এবং Remove বাটন আছে, সেখানে নিচের মতো করে দাও:

import { Check, X } from "lucide-react";

// Mark as Done বাটন
<button
  onClick={() => markAsDone(workout.id)}
  className="flex items-center gap-1.5 bg-[#ccff00] text-black text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#b8e600] transition-colors"
>
  <Check size={16} />
  Mark as Done
</button>

// Remove বাটন
<button
  onClick={() => removeFromPlan(workout.id)} // অথবা removeFromSaved
  className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#333] text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors"
>
  <X size={16} />
</button>
সংক্ষেপে যা করতে হবে:
README.md ফাইল তৈরি করে উপরের কনটেন্ট দাও
Check এবং X আইকন ইমপোর্ট করো
Mark as Done ও Remove বাটনে আইকন বসাও
এগুলো করে ফেললে বলো।

এরপর Deployment গাইড দিয়ে দিব।

README.md বানিয়ে দিই (খুব দ্রুত)
Mark as Done ও Remove বাটনে সঠিক আইকন বসাই
(চাইলে) ৫টা Workout-এর লিমিট যোগ করি eita bolci barti kichu diyu na just jenu paste kore diya dite pari

Worked for 2m 10s
নিচে শুধু কপি-পেস্ট করার মতো করে দিলাম।

১. README.md
পুরো ফাইল রিপ্লেস করো:

# FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse workouts, add them to today’s plan or save for later, and track your training.

## Live Demo

[Your Live Link Here]

## Features

- Browse 12 professional workouts from a live API
- Dynamic workout details page with full specs and instructions
- Add workouts to Today’s Plan or Saved list
- Real-time Plan & Saved counters in the navbar
- My Plan page with tabs and live stats
- Mark as Done and Remove functionality
- Sort by Duration, Calories, or Rating
- Data persists using localStorage
- Fully responsive design
- Toast notifications
- Custom 404 page

## Technologies Used

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Context API
- react-hot-toast
- lucide-react
- localStorage

## Getting Started

```bash
npm install
npm run dev
API
All workouts: https://api.abcz.workers.dev/api/fitlog
Single workout: https://api.abcz.workers.dev/api/fitlog/:id
Author
Ataul Hoque Shahi

---

### ২. Mark as Done + Remove আইকন

```tsx
import { Check, X } from "lucide-react";

{/* Mark as Done */}
<button
  onClick={() => markAsDone(workout.id)}
  className="flex items-center gap-1.5 bg-[#ccff00] text-black text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#b8e600] transition-colors"
>
  <Check size={16} />
  Mark as Done
</button>

{/* Remove */}
<button
  onClick={() => removeFromPlan(workout.id)}
  className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#333] text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors"
>
  <X size={16} />
</button>
৩. ৫টা Workout লিমিট
addToPlan ফাংশনে এই কোডটা দাও:

const addToPlan = (workout: Workout) => {
  if (todayPlan.length >= 5) {
    toast.error("Plan is full! Maximum 5 workouts allowed.");
    return;
  }

  if (todayPlan.some((w) => w.id === workout.id)) {
    toast.error("Already in today's plan");
    return;
  }

  setTodayPlan((prev) => [...prev, workout]);
  toast.success("Added to today's plan");
};
এই ৩টাই। আর কিছু না।

readme eta aru boro kore dao

# FitLog — Workout Library

A dark, modern, and focused workout planning application built with **Next.js**.  
FitLog helps you browse professional workouts, add them to your daily plan, save them for later, and track your training progress — all in a clean dark interface.

---

## Live Link

[Your Live Deployment Link Here]

---

## Project Description

FitLog is a complete Workout Library and Planning website. Users can explore different exercises, view detailed information, add workouts to **Today’s Plan**, or save them for later. The application also shows live statistics and keeps the data saved even after page reload using `localStorage`.

This project was built as part of Programming Hero Assignment (B14-A6).

---

## Features

- Browse 12 professional workouts fetched from a live API
- Beautiful and responsive workout cards
- Dynamic Workout Details page with full specifications and instructions
- Add any workout to **Today’s Plan**
- Save workouts for later
- Real-time **Plan** and **Saved** counters in the Navbar
- My Plan page with two tabs: Today’s Plan & Saved
- Live stats: Exercises, Minutes, and Calories
- Mark as Done functionality
- Remove workouts from plan/saved list
- Sort workouts by Duration, Calories, or Rating
- Empty state when no workouts are added
- Loading state while data is fetching
- Toast notifications for every important action
- Data persistence using localStorage
- Fully responsive design (Mobile, Tablet, Desktop)
- Custom 404 page
- Clean and professional dark UI

---

## Technologies Used

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Context API** (Global State Management)
- **react-hot-toast** (Notifications)
- **lucide-react** (Icons)
- **localStorage** (Data Persistence)

---

## API Used

- All Workouts:  
  `https://api.abcz.workers.dev/api/fitlog`

- Single Workout:  
  `https://api.abcz.workers.dev/api/fitlog/:id`

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AtaulHoqueShahi/b14-a6-fit-log.git
cd b14-a6-fit-log
2. Install dependencies
npm install
3. Run the development server
npm run dev
Open http://localhost:3000 in your browser.

Project Structure
src/
├── app/
│   ├── page.tsx                 # Home Page
│   ├── my-plan/
│   │   └── page.tsx             # My Plan Page
│   ├── workouts/
│   │   └── [id]/
│   │       └── page.tsx         # Workout Details Page
│   ├── not-found.tsx            # 404 Page
│   ├── layout.tsx
│   └── globals.css
├── components/                  # Reusable UI Components
├── context/                     # Plan Context (State Management)
├── lib/                         # API functions
└── types/                       # TypeScript types
Key Functionalities
Add to Today’s Plan → Adds workout + updates counter + shows toast
Save for Later → Saves workout + updates counter + shows toast
Mark as Done → Removes from plan + shows success toast
Remove → Removes from plan/saved list
Sort → Sort current list by Duration / Calories / Rating
Plan Limit → Maximum 5 workouts can be added to Today’s Plan          