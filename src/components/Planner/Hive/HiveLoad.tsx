import { useContext, useEffect, useState } from "react";
import { PlannerThemeContext } from "components/Interface/PlannerMain";
import { beeTypeDisplay, giftedBeeTypeDisplay, HiveSlots } from "libs/data";

function HiveLoad({
  changeHiveSlots,
}: {
  changeHiveSlots: (
    data: {
      name: string;
      id: string;
      image: string;
    }[]
  ) => void;
}) {
  const theme = useContext(PlannerThemeContext);
  const [loadCheck, setLoadCheck] = useState(false);
  const [hiveSlotSelection, setHiveSlotSelection] = useState(0);
  const [hiveSlotNames, setHiveSlotNames] = useState<string[]>([]);
  const [importCode, setImportCode] = useState("");

  useEffect(() => {
    setHiveSlotNames([]);

    for (let i = 0; i < 3; i++) {
      let saveSlot = localStorage.getItem(`HiveSlot-${i + 1}`);
      if (saveSlot) {
        if (saveSlot?.split("-")[0] === "") {
          setHiveSlotNames((current) => [...current, `Save Slot ${i + 1}`]);
        } else {
          setHiveSlotNames((current) => [
            ...current,
            saveSlot?.split("-")[0] || "",
          ]);
        }
      } else {
        setHiveSlotNames((current) => [...current, "Empty"]);
      }
    }
  }, [loadCheck]);

  const loadHiveData = () => {
    const giftedBees: { name: string; id: string; image: string }[] = [
      ...giftedBeeTypeDisplay.rare,
      ...giftedBeeTypeDisplay.epic,
      ...giftedBeeTypeDisplay.legendary,
      ...giftedBeeTypeDisplay.mythic,
      ...giftedBeeTypeDisplay.event,
    ];

    const normalBees: { name: string; id: string; image: string }[] = [
      ...beeTypeDisplay.rare,
      ...beeTypeDisplay.epic,
      ...beeTypeDisplay.legendary,
      ...beeTypeDisplay.mythic,
      ...beeTypeDisplay.event,
    ];

    closeLoad();

    if (
      (importCode.length > 0 && hiveSlotSelection > 0) ||
      importCode.length > 0
    ) {
      const loadHive = importCode
        .split("-")
        .slice(1)
        .map((item) => {
          if (item === "0") {
            return HiveSlots[0];
          }
          if (item.includes("G")) {
            return giftedBees[Number(item.replace("G", "")) - 1];
          }
          return normalBees[Number(item.replace("G", "")) - 1];
        });

      const hiveCheck = loadHive.filter((item) => item === undefined).length;

      if (loadHive.length < 50 || hiveCheck > 0) return;

      changeHiveSlots(loadHive.slice(0, 50));

      return closeLoad();
    }

    const hiveSlot = localStorage.getItem(`HiveSlot-${hiveSlotSelection}`);

    if (hiveSlot) {
      const loadHive = hiveSlot
        .split("-")
        .slice(1)
        .map((item) => {
          if (item === "0") {
            return HiveSlots[0];
          }
          if (item.includes("G")) {
            return giftedBees[Number(item.replace("G", "")) - 1];
          }
          return normalBees[Number(item.replace("G", "")) - 1];
        });

      const hiveCheck = loadHive.filter((item) => item === undefined).length;

      if (loadHive.length < 50 || hiveCheck > 0) return;

      changeHiveSlots(loadHive.slice(0, 50));

      return closeLoad();
    }
  };

  const closeLoad = () => {
    setLoadCheck(false);
    setImportCode("");
    setHiveSlotSelection(0);
  };

  return (
    <div className="planner-btn-container ">
      {loadCheck && (
        <div
          className={
            loadCheck
              ? "planner-blur planner-load-blur planner-visible"
              : "planner-blur"
          }
          onClick={closeLoad}
        />
      )}
      {loadCheck && (
        <div
          className={
            loadCheck
              ? theme
                ? "planner-save-display planner-load-blur planner-visible dark-info"
                : "planner-save-display planner-load-blur planner-visible planner-light"
              : "planner-save-display"
          }
        >
          <div className="planner-save-name-container">
            <div className="planner-save-title">Import code</div>
            <div className="planner-save-desc">
              Enter a valid export code to import an existing hive.
            </div>
            <input
              className="planner-save-input"
              placeholder="Max 10 Characters"
              onChange={(event) => setImportCode(event.currentTarget.value)}
            />
          </div>
          <div className="planner-save-slot-container">
            <div className="planner-save-title">Hive load slot</div>
            <div className="planner-save-desc">
              Pick an existing hive slot save to load data from.
            </div>
            <div className="planner-save-slots">
              {hiveSlotNames.map((name, index) => {
                return (
                  <div
                    key={index}
                    className={
                      name === "Empty"
                        ? "planner-save-slot-content planner-slot-empty"
                        : name.toLocaleLowerCase().includes("blue")
                        ? "planner-save-slot-content planner-slot-blue"
                        : name.toLocaleLowerCase().includes("red")
                        ? "planner-save-slot-content planner-slot-red"
                        : "planner-save-slot-content planner-slot-filled"
                    }
                    style={
                      hiveSlotSelection - 1 === index
                        ? theme
                          ? { border: "2px solid #fff" }
                          : { border: "2px solid #111" }
                        : {}
                    }
                    onClick={() => setHiveSlotSelection(index + 1)}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
            <div className="planner-save-desc">
              If both import code and load slot are selected, only the import
              code data will be loaded.
            </div>
          </div>
          <div className="planner-btn-container">
            <div
              className={
                hiveSlotSelection > 0 || importCode.length > 0
                  ? "planner-btn planner-save-btn planner-load"
                  : "planner-btn planner-save-btn planner-disabled"
              }
              onClick={() =>
                hiveSlotSelection > 0 || importCode.length > 0
                  ? loadHiveData()
                  : ""
              }
            >
              Load
            </div>
            <div
              className="planner-btn planner-save-btn planner-load"
              onClick={closeLoad}
            >
              Close
            </div>
          </div>
        </div>
      )}
      <div
        className="planner-btn planner-load"
        onClick={() => setLoadCheck(true)}
      >
        Load
      </div>
    </div>
  );
}

export default HiveLoad;
