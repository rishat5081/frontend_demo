import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { FaComment, FaHeart, FaUser } from "react-icons/fa";

function Tweet({ post }) {
  return (
    <Box
      bg="white"
      border="1px solid #E6ECF0"
      borderRadius="md"
      boxShadow="sm"
      p={4}
      mt={4}
      width={{ base: "100%", md: "80%" }}
      mx={{ base: 0, md: "auto" }}
    >
      <Text fontSize={{ base: "md", md: "lg" }}>{post.text}</Text>
      <Flex
        alignItems={{ base: "center", md: "initial" }}
        justifyContent={{ base: "space-between", md: "initial" }}
        flexDirection={{ base: "column", md: "row" }}
        mt={4}
      >
        <Box mb={{ base: 2, md: 0 }}>
          <IconButton
            aria-label="Comment"
            icon={<FaComment />}
            size="sm"
            variant="ghost"
            mr={2}
          />
          <IconButton
            aria-label="Like"
            icon={<FaHeart />}
            size="sm"
            variant="ghost"
            mr={2}
          />
          <IconButton
            aria-label="User"
            icon={<FaUser />}
            size="sm"
            variant="ghost"
          />
        </Box>
        <Text
          fontSize={{ base: "sm", md: "sm" }}
          color="#657786"
          mt={{ base: 2, md: 0 }}
        >
          {new Date().toLocaleTimeString()}
        </Text>
      </Flex>
    </Box>
  );
}

export default Tweet;
