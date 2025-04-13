import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnailUrl?: string;
}

export function YouTubeEmbed({
  videoId,
  title,
  description,
  duration,
  category,
  thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="relative w-full h-0 pb-[56.25%]">
        {isPlaying ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <img
              src={thumbnailUrl}
              alt={`Miniatura de ${title}`}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={playVideo}
                className="w-16 h-16 bg-primary dark:bg-secondary rounded-full flex items-center justify-center text-white transform transition-transform hover:scale-110"
              >
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{duration}</span>
          <span className="text-xs font-medium px-2 py-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary rounded-full">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}
