import { Box, SimpleGrid, Image, Text, Link, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$699" },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199" },
];

const Products = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4} align="start">
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`} color="teal.500">
                View Details
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;