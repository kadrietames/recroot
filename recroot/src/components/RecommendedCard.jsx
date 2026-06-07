function RecommendedCard({ title, difficulty, color }) {
  return (
    <div className="bg-white rounded-xl border p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-500 text-xs">10 Questions</p>
      {/* This dynamically sets the color based on the data array */}
      <span className={`text-sm ${color}`}>
        {difficulty}
      </span>
    </div>
  );
}

export default RecommendedCard;