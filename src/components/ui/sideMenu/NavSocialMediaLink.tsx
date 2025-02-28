interface NavSocialMediaLinkProps {
  socialMediaName: string;
  image: string;
  link: string;
}

const NavSocialMediaLink: React.FC<NavSocialMediaLinkProps> = ({
  link,
  image,
  socialMediaName,
}) => {
  return (
    <a href={link} className="max-w-5" target="_blank">
      <img src={image} alt={socialMediaName} className="w-full h-full" />
    </a>
  );
};

export default NavSocialMediaLink;
