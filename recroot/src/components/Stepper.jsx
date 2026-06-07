function Stepper() {
  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8">

      {/* Step 1 */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">
          1
        </div>

        <span className="font-medium text-blue-900">
          Interview Prep
        </span>
      </div>

      {/* Line */}
      <div className="hidden sm:block w-12 md:w-16 h-[2px] bg-green-400"></div>

      {/* Step 2 */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center font-semibold">
          2
        </div>

        <span className="font-medium text-gray-600">
          Practice
        </span>
      </div>

      {/* Line */}
      <div className="hidden sm:block w-12 md:w-16 h-[2px] bg-green-400"></div>

      {/* Step 3 */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center font-semibold">
          3
        </div>

        <span className="font-medium text-gray-600">
          Track Progress
        </span>
      </div>

    </div>
  );
}

export default Stepper;