const LazyImage = ({ src, alt, placeholder, darkMode }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`w-full h-48 object-cover ${loaded ? '' : 'blur-sm'}`}
      loading="lazy"
      onLoad={() => {
        setLoaded(true);
        setImageSrc(src);
      }}
      onError={() => setImageSrc(placeholder)} // Fallback to placeholder if image fails to load
      style={{
        filter: loaded ? 'none' : 'blur(10px)',
        transition: 'filter 0.3s ease',
      }}
    />
  );
};
