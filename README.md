This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:


npm run dev


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


git clone https://github.com/AtaulHoqueShahi/b14-a6-fit-log.git
cd b14-a6-fit-log
2. Install dependencies
npm install
3. Run the development server
npm run dev
4.my plan er por ki ki korbu    my-hero-project/  
│  
├── public/  
│    └──fitlog.json
│     
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
│   └──   
│    
│  
├── package.json  
├── tsconfig.json  
├── next.config.ts  
├── postcss.config.mjs  
├── eslint.config.mjs  
├── README.md  
└── .gitignore    
5.     
Key Functionalities
Add to Today’s Plan → Adds workout + updates counter + shows toast
Save for Later → Saves workout + updates counter + shows toast
Mark as Done → Removes from plan + shows success toast
Remove → Removes from plan/saved list
Sort → Sort current list by Duration / Calories / Rating
Plan Limit → Maximum 5 workouts can be added to Today’s Plan          
