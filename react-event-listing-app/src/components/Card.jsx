const Card = ({ children, bg = 'bg-[#FAEBD7]' }) => {
    return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};
export default Card;
