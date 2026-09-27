
"use client";

export type SortOption = "duration" | "calories" | "rating";

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

const SortDropdown = ({
  value,
  onChange,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort"
        className="text-sm font-medium text-gray-700"
      >
        Sort:
      </label>

      <select
        id="sort"
        value={value}
        onChange={(e) =>
          onChange(e.target.value as SortOption)
        }
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-purple-500"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
