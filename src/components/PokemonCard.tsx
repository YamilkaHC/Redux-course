import StarBorderIcon from "@mui/icons-material/StarBorder";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

interface PokemonCardI {
  title: string;
  img: string;
  text: string;
}

const PokemonCard = ({ title, img, text }: PokemonCardI) => {
  return (
    <div className="pokemon-card">
      <img
        className="pokemon-img"
        src={`https://github.com/Superviral/Pokemon-GO-App-Assets-and-Images/blob/master/Pokemon%20Models%20(PNG%20Format)/001%20-%20ymJUN7U.png?raw=true?w=248&fit=crop&auto=format`}
        srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
      />
      <div className="d-flex justify-content-around">
        <span className="text-18 text-card">Lorem ipsum</span>
        <img className="start" width={23}  height={23} src="/assets/star.png" />
      </div>
    </div>
  );
};
export default PokemonCard;
