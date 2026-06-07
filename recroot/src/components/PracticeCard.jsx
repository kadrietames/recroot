function PracticeCard({ title, description, isSelected, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`rounded-xl border-2 p-6 text-center cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <div className="text-3xl mb-4">💡</div>
      
      <h3 className={`font-bold text-xl ${isSelected ? 'text-blue-700' : 'text-gray-900'}`}>
        {title}
      </h3>
      
      <p className="text-sm text-gray-500 mt-2">
        {description}
      </p>

      {/* Visual Indicator (Optional: replace with an icon if you prefer) */}
      <div className={`mt-4 w-4 h-4 rounded-full border-2 mx-auto ${isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`} />
    </div>
  );
}

export default PracticeCard;