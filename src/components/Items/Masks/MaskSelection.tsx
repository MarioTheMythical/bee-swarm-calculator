import { masks } from "../../../libs/data";

type Props = {
  maskSelection: number;
  changeMaskSelection: (selection: number) => void;
};

function MaskSelection({ maskSelection, changeMaskSelection }: Props) {
  return (
    <div className="masks-title-container">
      {masks.map((mask, index) => {
        return (
          <div
            key={index}
            className={
              maskSelection === index
                ? "items-titles items-titles-selected"
                : "items-titles"
            }
            onClick={() => changeMaskSelection(index)}
          >
            <div className="items-content">
              <span>{mask.name}</span>
            </div>
            <img
              src={require(`../../../images/${mask.image}`)}
              alt={mask.name}
              style={{ width: 50 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MaskSelection;
