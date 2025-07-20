interface Props {
  label: string;
}
const Badge = ({ label }: Props) => {
  return (
    <div className="px-2 py-0.5 bg-blue-200 w-fit rounded-lg text-xs flex items-center justify-center">
      {label}
    </div>
  );
};

export default Badge;
