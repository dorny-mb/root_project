import {
  Container,
  Heading,
  Skeleton,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import moment from "moment";
import React, { memo } from "react";
import { MatrixTable } from "..";
import { theme } from "../../theme";

import Card from "../Card";
import CardHeader from "../Card/CardHeader";

type StatTableProps = {
  arr: any[];
  isLoaded?: boolean;
};

const StatTable: React.FC<StatTableProps> = ({ isLoaded, arr }) => {
  const cardTheme = useColorModeValue("white", "gray.700");

  const [isTabletOrMobile] = useMediaQuery("(max-width: 40em)");
  return (
    <Card
      shouldAnimate
      m={4}
      width="100%"
      bg={cardTheme}
      style={{ transition: "box-shadow .2s ease-in-out 0s" }}
      _hover={{ boxShadow: theme.boxShadow }}
    >
      <CardHeader justify="space-between" align="center">
        <Heading as="h3" size="lg">
          Park Zones
        </Heading>
        <Heading as="h5" color="gray.400" size="md" fontWeight="medium">
          {moment().format("DD MMM YYYY")}
        </Heading>
      </CardHeader>
      <Container
        maxW="container.lg"
        overflowX={isTabletOrMobile ? "auto" : "hidden"}
        mb={6}
      >
        <Skeleton isLoaded={isLoaded}>
          <MatrixTable arr={arr} />
        </Skeleton>
      </Container>
    </Card>
  );
};

StatTable.defaultProps = {
  isLoaded: true,
};
export default memo(StatTable);
