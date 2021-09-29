import React from "react";

import { Kind } from "../../types";
import { Tooltip, useColorModeValue, Image, Center } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";
import { Table, Td, Tr, TableLabel } from "./styles";
import { genCharArray } from "../../utils";
import { images } from "../../theme";

type MatrixTableProps = {
  arr: any[][];
};
type StatElement = { kind: Kind; location: string };

const getBg = (el: StatElement, defaultTheme: any) => {
  // TODO:: Will be adding other cases
  switch (el.kind) {
    case "maintenance_performed":
    case "dino_fed":
    case "dino_removed":
      return "#51B687";
    case "dino_location_updated":
    case "dino_added":
      return theme.colors.red[400];
    default:
      return defaultTheme;
  }
};

const MatrixTable: React.FC<MatrixTableProps> = ({ arr }) => {
  const emptyTheme = useColorModeValue("white", "#e4e4e4");

  const rows = arr.map((item, i) => {
    const entry = item.map((element: StatElement, j: number) => {
      return (
        <Td
          key={j}
          style={{
            border: "1px solid #eee",
            backgroundColor: getBg(element, emptyTheme),
          }}
        >
          {/* TODO:: Will be adding other cases here  */}
          {element.location && (
            <Tooltip
              hasArrow
              label={`${element.location}: ${element.kind}`}
              bg="gray.300"
              color="black"
              placement="top"
            >
              <Center
                cursor="pointer"
                bg="transparent"
                position="absolute"
                height="100%"
                width="100%"
                top={0}
                left={0}
              >
                {/* TODO:: Add more conditions */}
                {element.kind !== "maintenance_performed" &&
                  element.kind !== "dino_fed" && (
                    <Image src={images.wrench} width="50%" />
                  )}
              </Center>
            </Tooltip>
          )}
        </Td>
      );
    });
    return (
      <Tr key={i}>
        <Td>
          <TableLabel>{i}</TableLabel>
        </Td>
        {entry}
      </Tr>
    );
  });
  return (
    <Table>
      <tbody>{rows}</tbody>
      <tfoot>
        <Tr>
          <Td />
          {genCharArray("A", "Z").map((char, index) => (
            <Td key={index}>
              <TableLabel>{char}</TableLabel>
            </Td>
          ))}
        </Tr>
      </tfoot>
    </Table>
  );
};

export default MatrixTable;
