'use client';

import { useState, useRef, useEffect} from 'react';
import { Play, Pause } from 'lucide-react';
import styles from './AudioPlayer.module.scss';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
  const playAudio = async () => {
    if (!audioRef.current || hasPlayed) return;

    try {
      if (fadeIntervalRef.current) return;
      audioRef.current.volume = 0;

      await audioRef.current.play();

      let v = 0;

    fadeIntervalRef.current = setInterval(() => {
      if (!audioRef.current) return;

      v += 0.05;
      audioRef.current.volume = Math.min(v, 1);

      if (v >= 1 && fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
    }, 100);

      setHasPlayed(true);
      removeListeners();
    } catch (e) {}
  };

  const removeListeners = () => {
    window.removeEventListener('scroll', playAudio);
    window.removeEventListener('click', playAudio);
    window.removeEventListener('touchstart', playAudio);
  };

  window.addEventListener('scroll', playAudio, { passive: true });
  window.addEventListener('click', playAudio);
  window.addEventListener('touchstart', playAudio);

  return removeListeners;
}, [hasPlayed]);

  return (
    <div className={styles.audioPlayer}>
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/Music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay} aria-label="Toggle music">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        <span className={styles.audioText}>
          Música
        </span>
      </button>
    </div>
  );
}
