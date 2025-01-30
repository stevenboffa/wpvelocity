const ParticleBackground = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: i % 2 === 0 ? 'rgba(155, 135, 245, 0.3)' : 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${Math.random() * 6 + 2}s`,
            filter: `blur(${Math.random() * 2}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;