import { useState } from "react";
import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import Tweet from "./tweet";

function PostInput() {
  const [value, setValue] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleSubmit = () => {
    if (value) {
      setTweets([{ text: value }, ...tweets]);
      setValue("");
    }
  };

  return (
    <>
      <Box
        bg="white"
        border="1px solid #E6ECF0"
        borderRadius="md"
        boxShadow="sm"
        p={4}
        mt={8}
      >
        <Textarea
          placeholder="What's happening?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="lg"
          resize="none"
          border="none"
          _focus={{ outline: "none" }}
        />
        <Flex justifyContent="space-between" alignItems="center" mt={3}>
          <Box>
            <Button
              colorScheme="twitter"
              size="sm"
              variant="solid" // set variant to "solid"
              onClick={handleSubmit}
              disabled={!value}
              _disabled={{ cursor: "not-allowed" }}
            >
              Tweet
            </Button>
          </Box>
          <Box>
            <Text fontSize="sm" color="#657786">
              {value ? `${value.length}/280` : "0/280"}
            </Text>
          </Box>
        </Flex>
      </Box>

      {tweets.map((tweet, index) => (
        <Tweet key={index} post={tweet} />
      ))}
    </>
  );
}

export default PostInput;
