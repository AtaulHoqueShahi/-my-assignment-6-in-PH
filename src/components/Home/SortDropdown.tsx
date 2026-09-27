"use client";

type SortOption = "duration" | "calories" | "rating";

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

const SortDropdown = ({
  value,
  onChange,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort"
        className="text-xs font-bold uppercase tracking-wide text-gray-500"
      >
        Sort
      </label>

      <select
        id="sort"
        value={value}
        onChange={(event) =>
          onChange(event.target.value as SortOption)
        }
        className="rounded-full border border-[#343a40] bg-[#111418] px-4 py-2 text-xs font-semibold text-white outline-none transition focus:border-[#ccff00]"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;