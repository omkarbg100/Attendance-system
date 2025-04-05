import React from 'react'

const Period = ({ title, data, onClick }) => {
    return (
      <div
        className={`cursor-pointer rounded-lg p-4 shadow-md mb-4 transition-all ${
          data.Break ? 'bg-red-100' : 'bg-green-100'
        } hover:scale-[1.02]`}
        onClick={() => onClick(data)} // Send data back to parent on click
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {data.Break ? (
          <p className="text-red-500 font-medium">Break</p>
        ) : (
          <>
            <p><strong>Subject:</strong> {data.Subject}</p>
            <p><strong>Teacher:</strong> {data.Teacher}</p>
            <p><strong>Room:</strong> {data.Room}</p>
            <p><strong>Branch:</strong> {data.Branch} - Sec {data.Section}</p>
          </>
        )}
      </div>
    );
}

export default Period
