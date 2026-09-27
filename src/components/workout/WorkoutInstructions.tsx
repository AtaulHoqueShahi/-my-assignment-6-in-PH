type WorkoutInstructionsProps = {
  instructions: string[];
};

const WorkoutInstructions = ({
  instructions,
}: WorkoutInstructionsProps) => {
  return (
    <section>
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
          HOW TO
        </p>

        <h2 className="mt-2 text-2xl font-black uppercase text-white">
          INSTRUCTIONS
        </h2>
      </div>

      <div className="space-y-3">
        {instructions.map((instruction, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-xl border border-[#20242b] bg-[#111418] p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
              {index + 1}
            </span>

            <p className="text-sm leading-6 text-gray-400">
              {instruction}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutInstructions;