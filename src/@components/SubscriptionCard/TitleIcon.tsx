import Icon from "../Icon/Icon";

interface ITitleProps {
  iconName: string;
  option: string;
}

const TitleIcon: React.FC<ITitleProps> = ({ iconName, option }) => {
  return (
    <div className="flex items-center mt-2">
      <Icon className="text-[#009999] " variant="outlined" name={iconName} />
      <p className="ms-2 text-sm">{option}</p>
    </div>
  );
};

export default TitleIcon;
