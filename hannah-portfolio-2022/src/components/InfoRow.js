import { v4 as uuidv4 } from "uuid";
import "./../styles/components/InfoRow.css";

function InfoRow({ hannahInfoRow }) {
  const paragraphs = hannahInfoRow.text.split("#");
  return (
    <div className="InfoRow">
      <div className="Info__image-wrapper">
        <img
          alt={`${hannahInfoRow.title}`}
          src={hannahInfoRow.image_url}
          style={{ width: `500px` }}
          className="InfoRow__image"
        />
      </div>
      <div className="InfoRow__title-text-wrapper">
        <h2 className="InfoRow__title">{hannahInfoRow.title}</h2>
        <div className="InfoRow__text-wrapper">
          {paragraphs.map((paragraph) => {
            return (
              <p key={uuidv4()} className="InfoRow__text-paragraph">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoRow;
