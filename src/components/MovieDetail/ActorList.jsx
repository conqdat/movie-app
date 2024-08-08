import ActorInfor from "../MediaDetail/ActorInfor";

const ActorList = () => {
  return (
    <div>
      <p>Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4">
        <ActorInfor />
        <ActorInfor />
        <ActorInfor />
        <ActorInfor />
      </div>
    </div>
  );
};
export default ActorList;
