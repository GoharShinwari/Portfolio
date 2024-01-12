import React, { useEffect, useState } from "react";
import { Box, Flex, Link, ChakraProvider, Button } from "@chakra-ui/react";

function TypeName() {
  const [name, setName] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    const fullName: string = "Gohar Shinwari";
    let charIndex: number = 0;

    const typeText = () => {
      if (charIndex <= fullName.length) {
        setName(fullName.slice(0, charIndex));
        charIndex++;
      }
    };

    const toggleCursor = () => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    };

    const textIntervalId = setInterval(typeText, 100);
    const cursorIntervalId = setInterval(toggleCursor, 1000);

    return () => {
      clearInterval(textIntervalId);
      clearInterval(cursorIntervalId);
    };
  }, []);

  return (
    <ChakraProvider resetCSS>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundColor="#2F6542"
      >
        <Box
          fontSize="8vh"
          fontFamily="Source Code Pro"
          color="white"
          textAlign="center"
          className="typing-animation"
          mb={4}
        >
          <h1>
            {name}
            <span
              style={{
                display: "inline-block",
                transition: "opacity 0.5s ease 0s",
                opacity: showCursor ? 1 : 0,
              }}
            >
              _
            </span>
          </h1>
        </Box>

        <Flex flexDirection="column" alignItems="center" color="white" mt={2}>
          <p
            className="my-custom-class chakra-text css-1638ci3"
            style={{
              fontFamily: "Source Code Pro",
              fontSize: "2rem",
              animationFillMode: "both",
              animationDuration: "1000ms",
              animationDelay: "0ms",
              animationIterationCount: "1",
              opacity: "1",
              padding: 10,
              animationName: "react-reveal-907529300631610-1",
            }}
          >
            Computer Science Major @ Rutgers University '27
          </p>

          <Flex
            className="css-h94677"
            style={{
              animationFillMode: "both",
              animationDuration: "1000ms",
              animationDelay: "0ms",
              animationIterationCount: "1",
              opacity: "1",
              animationName: "react-reveal-907529300631610-1",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/gohar-shinwari-496939272/"
              isExternal
              mx={2}
              padding={5}
              className="chakra-link css-uvgg6t"
              aria-label="Linkedin"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>

            <Link
              href="https://github.com/GoharShinwari"
              isExternal
              mx={2}
              padding={5}
              className="chakra-link css-uvgg6t"
              aria-label="GitHub"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>

            <Link
              href="mailto:goharshinwari15@gmail"
              mx={2}
              padding={5}
              className="chakra-link css-uvgg6t"
              aria-label="Email"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
          </Flex>
          <Button
            backgroundColor="#2F6542"
            color="white"
            _hover={{ backgroundColor: "#1F4A33" }}
            onClick={() => window.open('./GoharShinwari.pdf', '_blank')}
            mt={2}
            padding={5}
          >
            Open Resume
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default TypeName;
