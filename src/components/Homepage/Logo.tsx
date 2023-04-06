const avatar = "https://www.pngarts.com/files/11/Avatar-PNG-Picture.png";
const logo = "h-32 w-auto mx-auto";

function Logo(props: any) {
  const userPic = <img className={logo} src={avatar} />;
  return userPic;
}
export default Logo;
