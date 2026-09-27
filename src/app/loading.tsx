const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0b0d0f] px-4 py-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <div className="h-3 w-32 animate-pulse rounded bg-[#20242b]" />

          <div className="mt-4 h-10 w-64 animate-pulse rounded bg-[#20242b]" />

          <div className="mt-3 h-4 w-80 animate-pulse rounded bg-[#20242b]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#20242b] bg-[#111418]"
            >
              <div className="aspect-[4/3] animate-pulse bg-[#181c20]" />

              <div className="space-y-3 p-5">
                <div className="h-3 w-20 animate-pulse rounded bg-[#20242b]" />

                <div className="h-5 w-40 animate-pulse rounded bg-[#20242b]" />

                <div className="h-3 w-28 animate-pulse rounded bg-[#20242b]" />

                <div className="h-px bg-[#20242b]" />

                <div className="h-3 w-full animate-pulse rounded bg-[#20242b]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Loading;