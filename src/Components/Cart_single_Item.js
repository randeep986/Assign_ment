import {
  Box,
  Grid,
  GridItem,
  Text,
  Stack,
  Link,
  Image,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

const Cart_single_Item = ({ elem, Update }) => {
  const [count, Setcount] = useState(1);
  
  const toast = useToast();
  
  return (
    <Box display={"flex"} key={elem._id} mb={"20px"}>
      <Grid
        h="auto"
        templateRows="auto"
        templateColumns="1.3fr 2fr 3fr"
        columnGap={"20px"}
        rowGap="20px"
      >
        <GridItem>
          <Image src={elem.image} w={"100%"}></Image>
        </GridItem>
        <GridItem>
          <Box>
            <Text mb={"5px"} fontSize={"15px"}>
              {elem.title ? elem.title : elem.name}
            </Text>
            <Text mb={"5px"} fontSize={"15px"}>
              Style{" "}
              <Text as={"span"} color="gray">
                #79422903
              </Text>
            </Text>
            <Text mb={"5px"} fontSize={"15px"}>
              Color{" "}
              <Text as={"span"} color="gray">
                Taupe
              </Text>
            </Text>
            <Text mb={"5px"} fontSize={"15px"}>
              Size{" "}
              <Text as={"span"} color="gray">
                32
              </Text>
            </Text>
            <Link color={"#167A92"} fontSize={"15px"}>
              Edit
            </Link>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              m={"0px 10px"}
              h={"150px"}
            >
              <Text>${elem.price}</Text>
              
              <Text>
                {elem.quantity ? elem.price * elem.quantity : elem.price}
              </Text>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} m={"10px"}>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Cart_single_Item;
