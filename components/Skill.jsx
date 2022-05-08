export default function Skill({ imgUrl, caption }) {
  return (
    <figure>
      <img
        src={imgUrl}
        alt={caption}
        style={{ width: "80px", height: "80px" }}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
