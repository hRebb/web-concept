interface WebProps {
  url: string;
}

export const Web: React.FC<WebProps> = ({ url }) => {
  return <iframe src={url} />;
};
