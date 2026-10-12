type ArtProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
  className?: string;
};

export function Art({ src, alt, width, height, eager = false, className }: ArtProps) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
    />
  );
}
