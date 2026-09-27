"use client";

type PlanTab = "today" | "saved";

type PlanTabsProps = {
  activeTab: PlanTab;
  onChange: (tab: PlanTab) => void;
};

const PlanTabs = ({
  activeTab,
  onChange,
}: PlanTabsProps) => {
  return (
    <div className="mb-6 flex w-full gap-2 rounded-xl border border-[#20242b] bg-[#111418] p-1 sm:w-fit">
      <button
        onClick={() => onChange("today")}
        className={`rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition ${
          activeTab === "today"
            ? "bg-[#ccff00] text-black"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Today Plan
      </button>

      <button
        onClick={() => onChange("saved")}
        className={`rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition ${
          activeTab === "saved"
            ? "bg-[#ccff00] text-black"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;