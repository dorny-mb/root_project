import {
  Flex,
  Center,
  Image,
  useMediaQuery,
  IconButton,
  useColorMode,
  FlexProps,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useHistory } from "react-router";
import { Clock } from "..";
import { images } from "../../theme";

type NavProps = FlexProps & { isLoaded?: boolean };

const Nav: React.FC<NavProps> = ({ isLoaded, ...rest }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [isTabletOrMobile] = useMediaQuery("(max-width: 40em)");
  const history = useHistory();
  return (
    <Flex justify="space-between" my={5} width="100%" {...rest}>
      <Center
        onClick={() => history.push("/")}
        cursor="pointer"
        width={isTabletOrMobile ? "100%" : "20rem"}
      >
        <Image src={images.logo} />
      </Center>
      <Center>
        {!isTabletOrMobile && (
          <Skeleton isLoaded={isLoaded}>
            <Clock />
          </Skeleton>
        )}
        <IconButton
          onClick={toggleColorMode}
          size="sm"
          mx={4}
          aria-label="Change Theme"
          icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
        />
      </Center>
    </Flex>
  );
};
Nav.defaultProps = {
  isLoaded: true,
};

export default Nav;
