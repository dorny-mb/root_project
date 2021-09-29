import React, { useEffect, useRef } from "react";
import { Center, Container } from "@chakra-ui/react";
import { EmptyHandler, Nav, StatTable } from "../../components";
import { PageWrap } from "../../layouts";
import { useFetch } from "../../hooks";
import { DINOPARK_ENDPOINT } from "../../constants";
import { extractXY, genCharArray } from "../../utils";
import { Park } from "../../types";

const letterArr = genCharArray("A", "Z");

const Home: React.FC = () => {
  const arr = useRef(
    Array.from(
      Array(16)
        .fill(" ")
        .map(() => Array(26).fill(" "))
    )
  );
  const { data, state } = useFetch(DINOPARK_ENDPOINT);
  useEffect(() => {
    if (data) {
      data?.forEach((item: Park) => {
        // Not selecting items that do not have a sell, I'm assuming the data doesn't need to be logged.
        if (item.location) {
          const { x, y } = extractXY(item.location, letterArr);
          if (y !== -1 && arr.current?.[y]?.[x]) {
            arr.current[y][x] = {
              kind: item.kind,
              location: item.location,
            };
          }
        }
      });
    }
  }, [data]);

  const error = state === "network-error";

  const loading = state === "loading";

  if (error) return <EmptyHandler subTitle={state} />;
  return (
    <PageWrap title="Home">
      <Container
        maxW="container.lg"
        display="flex"
        p={0}
        flexDirection="column"
        flex={1}
      >
        <Nav />
        <Center flex={1}>
          <StatTable arr={arr.current} isLoaded={!loading} />
        </Center>
      </Container>
    </PageWrap>
  );
};

export default Home;
