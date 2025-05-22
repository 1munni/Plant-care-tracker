import React from 'react';

const ConsumerReview = () => {
  return (
    <div className="flex flex-col max-w-xl p-8 bg-white text-gray-800 shadow-lg rounded-xl lg:p-12">
      <div className="flex flex-col w-full">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Customer Reviews
        </h2>

        {/* Star Rating */}
        <div className="flex items-center justify-center space-x-2 mb-1">
          {/* Filled Stars */}
          {[1, 2, 3].map((i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 text-[#74b72e]"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}

          {/* Unfilled Stars */}
          {[4, 5].map((i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}

          <span className="text-gray-600">3 out of 5</span>
        </div>

        <p className="text-sm text-gray-500 mb-4">861 global ratings</p>

        {/* Rating Breakdown */}
        <div className="flex flex-col space-y-2">
          {[
            { label: '5 star', percent: 83 },
            { label: '4 star', percent: 67 },
            { label: '3 star', percent: 50 },
            { label: '2 star', percent: 33 },
            { label: '1 star', percent: 17 },
          ].map(({ label, percent }) => (
            <div key={label} className="flex items-center space-x-2">
              <span className="w-12 text-sm text-gray-600">{label}</span>
              <div className="flex-1 h-4 bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-4 bg-[#74b72e]"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <span className="w-12 text-sm text-right text-gray-600">
                {percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumerReview;
