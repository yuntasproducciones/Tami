interface NavSocialMediaLinkProps {
  social: string;
  image: string;
  link: string;
}

const NavSocialMediaLink: React.FC<NavSocialMediaLinkProps> = ({
  link,
  image,
  social,
}) => {
  return (
    <a href={link} className="w-4 h-4 xs:w-8 xs:h-8">
      <img
        src={image}
        alt={social}
        className="w-full h-full bg-verde_turquesa rounded-full p-[5px]"
      />
    </a>
  );
};

export default NavSocialMediaLink;
