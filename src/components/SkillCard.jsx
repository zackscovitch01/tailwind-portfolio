const SkillCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="w-16 mx-auto block">{icon}</span>
      <h4 className="mt-6 font-bold text-center">{title}</h4>
      <p className="mt-2 text-slate-500 text-center">{text}</p>
    </article>
  );
};
export default SkillCard;
