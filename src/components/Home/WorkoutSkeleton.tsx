const WorkoutSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#20242b] bg-[#111418]">
      
      <div className="aspect-[4/3] animate-pulse bg-[#20242b]" />

  
      <div className="space-y-4 p-5">

        <div className="flex gap-2">
          <div className="h-5 w-16 animate-pulse rounded-full bg-[#20242b]" />
          <div className="h-5 w-20 animate-pulse rounded-full bg-[#20242b]" />
        </div>

        <div className="h-6 w-3/4 animate-pulse rounded bg-[#20242b]" />

        <div className="h-4 w-1/2 animate-pulse rounded bg-[#20242b]" />

        <div className="grid grid-cols-3 gap-3 border-t border-[#20242b] pt-4">
          <div className="space-y-2">
            <div className="h-3 w-14 animate-pulse rounded bg-[#20242b]" />
            <div className="h-4 w-16 animate-pulse rounded bg-[#20242b]" />
          </div>

          <div className="space-y-2">
            <div className="h-3 w-14 animate-pulse rounded bg-[#20242b]" />
            <div className="h-4 w-16 animate-pulse rounded bg-[#20242b]" />
          </div>

          <div className="space-y-2">
            <div className="h-3 w-14 animate-pulse rounded bg-[#20242b]" />
            <div className="h-4 w-16 animate-pulse rounded bg-[#20242b]" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkoutSkeleton;