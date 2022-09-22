

const Skeleton = ({size}: {size?: number}) => {

  return (
    <div id="search-sections" className="list-group d-grid">
   
      {[...Array(size || 5)].map(() => (
        <div className="flip-card skeleton">
        </div>
      ))}
    </div>
  );
};
export default Skeleton;
