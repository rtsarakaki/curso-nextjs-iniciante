interface HobbyCardProps {
  hobby: {
    id: number;
    name: string;
    icon: string;
    color: string;
  };
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  return (
    <div className="hobby-card" style={{ backgroundColor: hobby.color }}>
      <div className="hobby-icon">{hobby.icon}</div>
      <h3 className="hobby-name">{hobby.name}</h3>
    </div>
  );
}
