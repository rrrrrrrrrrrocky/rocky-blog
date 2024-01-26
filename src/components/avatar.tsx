'use client';

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img alt={name} className="mr-4 h-12 w-12 rounded-full" src={picture} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
