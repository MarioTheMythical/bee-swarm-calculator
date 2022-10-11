function Slots({
  hiveSlots,
}: {
  hiveSlots: {
    name: string;
    id: string;
    image: string;
  }[];
}) {
  return (
    <div className="hive-slot-container">
      {hiveSlots.map((hive, index) => {
        return (
          <div key={index} className="hive-slot">
            {hive.name}
          </div>
        );
      })}
    </div>
  );
}

export default Slots;
