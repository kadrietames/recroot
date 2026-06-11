import React from 'react';

function Stepper({ currentStep = 1 }) {
  const steps = [
    { num: 1, label: 'Interview Prep' },
    { num: 2, label: 'Practice' },
    { num: 3, label: 'Track Progress' },
  ]

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1">
      {steps.map((step, i) => {
        const isCompleted = currentStep > step.num
        const isActive = currentStep === step.num

        return (
          <React.Fragment key={step.num}>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-xs text-white ${
                isCompleted ? 'bg-emerald-500' : isActive ? 'bg-[#163C6B]' : 'bg-white border border-slate-300'
              }`}>
                <span className={isCompleted || isActive ? 'text-white' : 'text-slate-400'}>
                  {step.num}
                </span>
              </div>
              <span className={`text-xs font-bold hidden sm:block ${
                isCompleted ? 'text-emerald-500' : isActive ? 'text-[#163C6B]' : 'text-slate-400'
              }`}>
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-[1.5px] w-8 sm:w-16 shrink-0 ${
                isCompleted ? 'bg-emerald-500' : 'bg-slate-200'
              }`} />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Stepper;