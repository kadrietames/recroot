function ProgressCard() {
  return (
    <div className="bg-white rounded-xl border p-6">

      <h2 className="text-2xl font-bold mb-6">
        Your Progress
      </h2>

      <div className="flex justify-center">

        <div className="w-36 h-36 rounded-full border-8 border-gray-100 flex items-center justify-center">

          <div className="text-center">
            <h3 className="text-4xl font-bold">
              0%
            </h3>

            <p className="text-sm text-gray-500">
              Overall Progress
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;