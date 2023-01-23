import { beeTypeDisplay, giftedBeeTypeDisplay, HiveSlots } from "libs/data";

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

function ImportCodeConvert(importCode: string | null) {
  const convertedCode = importCode
    ?.split("-")
    .slice(1)
    .map((item) => {
      if (item[0] !== "★" && item[0] !== "/") {
        switch (item.slice(0, 2)) {
          case "1T":
            return "1Thimble." + item.slice(2);

          case "1S":
            return "1Sweatband." + item.slice(2);

          case "1B":
            return "1Bandage." + item.slice(2);

          case "2T":
            return "2Thumbtack." + item.slice(2);

          case "1C":
            return "1CamoBandana." + item.slice(2);

          case "2B":
            return "2BottleCap." + item.slice(2);

          case "1K":
            return "1Kazoo." + item.slice(2);

          case "2S":
            return "2SmileySticker." + item.slice(2);

          case "1W":
            return "1Whistle." + item.slice(2);

          case "2C":
            return "2CharmBracelet." + item.slice(2);

          case "1P":
            return "1Paperclip." + item.slice(2);

          case "3B":
            return "3Beret." + item.slice(2);

          case "4B":
            return "4BangSnap." + item.slice(2);

          case "5B":
            return "5BeadLizard." + item.slice(2);

          case "2P":
            return "2PinkShades." + item.slice(2);

          case "1E":
            return "1ElfCap." + item.slice(2);

          case "3S":
            return "3SingleMitten." + item.slice(2);

          case "2W":
            return "2WarmScarf." + item.slice(2);

          case "3P":
            return "3PeppermintAntennas." + item.slice(2);

          case "6B":
            return "6BeesmasTop." + item.slice(2);

          case "4P":
            return "4Pinecone." + item.slice(2);

          case "1I":
            return "1Icicles." + item.slice(2);

          case "7B":
            return "7BeesmasTreeHat." + item.slice(2);

          case "8B":
            return "8BubbleLight." + item.slice(2);

          case "4S":
            return "4SnowTiara." + item.slice(2);

          case "5S":
            return "5Snowglobe." + item.slice(2);

          case "1R":
            return "1ReindeerAntlers." + item.slice(2);

          case "3T":
            return "3ToyHorn." + item.slice(2);

          case "5P":
            return "5PaperAngel." + item.slice(2);

          case "4T":
            return "4ToyDrum." + item.slice(2);

          case "1L":
            return "1LumpOfCoal." + item.slice(2);

          case "6P":
            return "6Poinsettia." + item.slice(2);

          case "2E":
            return "2ElectricCandle." + item.slice(2);

          case "1F":
            return "1FestiveWreath." + item.slice(2);
          case "9R":
            return "1Remove." + item.slice(2);
        }
      }
      return item;
    });

  const hiveSlots = convertedCode?.map((item) => {
    if (item === "/0") {
      return HiveSlots[0];
    }

    if (!item.includes(".")) {
      if (
        item.includes("AT") ||
        item.includes("CO") ||
        item.includes("GA") ||
        item.includes("EN") ||
        item.includes("AB")
      ) {
        const slotMutation = item.slice(-2);

        switch (slotMutation) {
          case "AT":
            if (item.includes("/")) {
              return {
                ...normalBees[
                  Number(item.replace("AT", "").replace("/", "")) - 1
                ],
                mutation: "attack",
              };
            }
            return {
              ...giftedBees[
                Number(item.replace("AT", "").replace("★", "")) - 1
              ],
              mutation: "attack",
            };

          case "CO":
            if (item.includes("/")) {
              return {
                ...normalBees[
                  Number(item.replace("CO", "").replace("/", "")) - 1
                ],
                mutation: "convert",
              };
            }
            return {
              ...giftedBees[
                Number(item.replace("CO", "").replace("★", "")) - 1
              ],
              mutation: "convert",
            };

          case "GA":
            if (item.includes("/")) {
              return {
                ...normalBees[
                  Number(item.replace("GA", "").replace("/", "")) - 1
                ],
                mutation: "gather",
              };
            }
            return {
              ...giftedBees[
                Number(item.replace("GA", "").replace("★", "")) - 1
              ],
              mutation: "gather",
            };

          case "EN":
            if (item.includes("/")) {
              return {
                ...normalBees[
                  Number(item.replace("EN", "").replace("/", "")) - 1
                ],
                mutation: "energy",
              };
            }
            return {
              ...giftedBees[
                Number(item.replace("EN", "").replace("★", "")) - 1
              ],
              mutation: "energy",
            };

          case "AB":
            if (item.includes("/")) {
              return {
                ...normalBees[
                  Number(item.replace("AB", "").replace("/", "")) - 1
                ],
                mutation: "ability",
              };
            }
            return {
              ...giftedBees[
                Number(item.replace("AB", "").replace("★", "")) - 1
              ],
              mutation: "ability",
            };
        }
      }
      if (item.includes("★")) {
        return {
          ...giftedBees[Number(item.replace("★", "")) - 1],
        };
      }
      return {
        ...normalBees[Number(item.replace("/", "")) - 1],
      };
    }

    if (
      item.includes("AT") ||
      item.includes("CO") ||
      item.includes("GA") ||
      item.includes("EN") ||
      item.includes("AB")
    ) {
      const slotMutation = item.slice(-2);

      switch (slotMutation) {
        case "AT":
          if (item.includes("/")) {
            return {
              ...normalBees[
                Number(item.split(".")[1].replace("AT", "").replace("/", "")) -
                  1
              ],
              mutation: "attack",
              beequip: item.split(".")[0] + ".png",
            };
          }
          return {
            ...giftedBees[
              Number(item.split(".")[1].replace("AT", "").replace("★", "")) - 1
            ],
            mutation: "attack",
            beequip: item.split(".")[0] + ".png",
          };

        case "CO":
          if (item.includes("/")) {
            return {
              ...normalBees[
                Number(item.split(".")[1].replace("CO", "").replace("/", "")) -
                  1
              ],
              mutation: "convert",
              beequip: item.split(".")[0] + ".png",
            };
          }
          return {
            ...giftedBees[
              Number(item.split(".")[1].replace("CO", "").replace("★", "")) - 1
            ],
            mutation: "convert",
            beequip: item.split(".")[0] + ".png",
          };

        case "GA":
          if (item.includes("/")) {
            return {
              ...normalBees[
                Number(item.split(".")[1].replace("GA", "").replace("/", "")) -
                  1
              ],
              mutation: "gather",
              beequip: item.split(".")[0] + ".png",
            };
          }
          return {
            ...giftedBees[
              Number(item.split(".")[1].replace("GA", "").replace("★", "")) - 1
            ],
            mutation: "gather",
            beequip: item.split(".")[0] + ".png",
          };

        case "EN":
          if (item.includes("/")) {
            return {
              ...normalBees[
                Number(item.split(".")[1].replace("EN", "").replace("/", "")) -
                  1
              ],
              mutation: "energy",
              beequip: item.split(".")[0] + ".png",
            };
          }
          return {
            ...giftedBees[
              Number(item.split(".")[1].replace("EN", "").replace("★", "")) - 1
            ],
            mutation: "energy",
            beequip: item.split(".")[0] + ".png",
          };

        case "AB":
          if (item.includes("/")) {
            return {
              ...normalBees[
                Number(item.split(".")[1].replace("AB", "").replace("/", "")) -
                  1
              ],
              mutation: "ability",
              beequip: item.split(".")[0] + ".png",
            };
          }
          return {
            ...giftedBees[
              Number(item.split(".")[1].replace("AB", "").replace("★", "")) - 1
            ],
            mutation: "ability",
            beequip: item.split(".")[0] + ".png",
          };
      }
    }

    if (item.includes("★")) {
      return {
        ...giftedBees[Number(item.split(".")[1].replace("★", "")) - 1],
        beequip: item.split(".")[0] + ".png",
      };
    }
    return {
      ...normalBees[Number(item.split(".")[1].replace("/", "")) - 1],
      beequip: item.split(".")[0] + ".png",
    };
  });

  return hiveSlots;
}

export default ImportCodeConvert;
