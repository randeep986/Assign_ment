import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Divider,
  HStack,
  Image,
  Icon,
  Text,
  VStack,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add_to_bag } from "../Redux/action";

const ClothesSingle = () => {
  const [data, setData] = useState({});
  const [image, setImage] = useState();
  // const [state, setState] = useState(false);
  const dispatch = useDispatch();
  // const datam = useSelector((state) => state.cartData);
  
  const { id } = useParams();
  const toast = useToast();

  React.useEffect(() => {
    axios
      .get(`https://dataapi.onrender.com/cloths/${id}`)
      .then((res) => {
        setData(res.data);
        // datam(res.data)
        dispatch(add_to_bag(res.data));
      })
      .catch((error) => console.log(error));
  // console.log(datam);

  }, []);

  const AddToCart = () => {
    fetch("http://localhost:8026/todo/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        
      },
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((er) => console.log(er));
    toast({
      title: "Added",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  // console.log(datam);
  
  return (
    <Wrap spacing={10} justify="center" marginTop="60px">
      <HStack spacing={5}>
        <Image
          borderRadius={15}
          src={image ? image : data.img1}
          w="370px"
          minW="200px"
        />
      </HStack>

      <VStack width={550} align="revert-layer" spacing={5} marginTop={50}>
        <Text fontSize="2xl" color="gray.500">
          {data.title}
        </Text>
        <div style={{ display: "flex", marginTop: "-5px" }}>
          <Badge
            fontSize="18px"
            variant="outline"
            width="60px"
            height="35px"
            mt="10px"
            colorScheme="teal"
          >
            {"4.4  ⭐"}
          </Badge>

          <HStack alignContent="center">
            <Text fontWeight="bold" fontSize="4xl" ml="5px">
              ${data.price}
            </Text>
            <Text as="s" marginLeft={4} fontSize="xl">
              ${data.price - 15}
            </Text>
          </HStack>
        </div>
        <Divider />

        <div style={{ display: "flex" }}>
          <Link to="/cloth">
            {" "}
            <Button colorScheme="teal" variant="outline" padding="6px">
              GO BACK
            </Button>
          </Link>
          <Button
            onClick={() => AddToCart(data.id)}
            ml="10px"
            w="230px"
            padding="6px"
            colorScheme="yellow"
          >
            <Icon as={MdAddShoppingCart} mr="10px" />
            ADD TO BASKET
          </Button>
        </div>
      </VStack>
    </Wrap>
  );
};

export default ClothesSingle;
