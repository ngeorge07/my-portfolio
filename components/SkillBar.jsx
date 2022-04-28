export default function SkillBar({ text, level }) {
  return (
    <div>
      <h5>
        {text} - {level}%
      </h5>
      <div className="skill-bar-cont">
        <div className="skill-bar" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}
