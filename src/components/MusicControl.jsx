import React from "react";

const MusicControl = ({ audioRef, musicPlaying, setMusicPlaying }) => {
  const handleMusicToggle = () => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.play();
      setMusicPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      <button
        onClick={handleMusicToggle}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow-lg border-2 border-white/30 focus:outline-none transition-all duration-300 ${musicPlaying ? 'animate-spin-slow' : ''}`}
        style={{ minWidth: 120 }}
      >
        {musicPlaying ? (
          <span role="img" aria-label="pause">⏸️</span>
        ) : (
          <span role="img" aria-label="play">▶️</span>
        )}
        {musicPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
};

export default MusicControl;
