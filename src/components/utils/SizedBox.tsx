interface SizedBoxProps {
  width?: string | number;
  height?: string | number;
}

export default function SizedBox({ width, height }: SizedBoxProps) {
  const style: React.CSSProperties = {
    width: width !== undefined ? (typeof width === "number" ? `${width}px` : width) : undefined,
    height: height !== undefined ? (typeof height === "number" ? `${height}px` : height) : undefined,
  };

  return <div style={style} />;
}
