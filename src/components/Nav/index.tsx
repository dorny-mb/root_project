import {
  Flex,
  Center,
  Image,
  useMediaQuery,
  IconButton,
  useColorMode,
  FlexProps,
} from "@chakra-ui/react";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useHistory } from "react-router";
import { Clock } from "..";
import { images } from "../../theme";

type NavProps = FlexProps;

const Nav: React.FC<NavProps> = ({ ...rest }) => {
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
        {!isTabletOrMobile && <Clock />}
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

export default Nav;
