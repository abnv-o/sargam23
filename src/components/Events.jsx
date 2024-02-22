import React from 'react';

function Events() {
  return (
    <div className="flex items-center justify-center  bg-gray-100 p-36">
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Events</h2>
          <div className=" flex flex-row justify-evenly items-center gap-24">
            <div className="flex flex-col items-center justify-center rounded-lg bg-red-400 shadow-md hover:shadow-lg w-40 h-56 hover:animate-bounce">
              <img
                src="images/literature.png"
                alt="Literature"
                className="w-24 h-24 mb-2 hover:animate-pulse"
              />
              <a href="/literature" className="text-lg font-medium text-center">
                Literature
              </a>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-green-400 shadow-md hover:shadow-lg w-40 h-56 hover:animate-bounce">
              <img
                src="images/musical-note.png"
                alt="Music"
                className="w-24 h-24 mb-2 hover:animate-pulse"
              />
              <a href="/music" className="text-lg font-medium text-center">
                Music
              </a>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-red-400 shadow-md hover:shadow-lg w-40 h-56 hover:animate-bounce">
              <img
                src="images/fine-arts.png"
                alt="Fine Arts"
                className="w-24 h-24 mb-2 hover:animate-pulse"
              />
              <a href="/finearts" className="text-lg font-medium text-center">
                Fine Arts
              </a>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-green-400 shadow-md hover:shadow-lg w-40 h-56 hover:animate-bounce">
              <img
                src="images/dancing.png"
                alt="Dance"
                className="w-24 h-24 mb-2 hover:animate-pulse"
              />
              <a href="/dance" className="text-lg font-medium text-center">
                Dance
              </a>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-red-400 shadow-md hover:shadow-lg w-40 h-56 hover:animate-bounce">
              <img
                src="images/theatre.png"
                alt="Theatre"
                className="w-24 h-24 mb-2 hover:animate-pulse"
              />
              <a href="/theatre" className="text-lg font-medium text-center">
                Theatre
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
