import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    console.log("Form Data:", formData);
  };

  return (
    <ChakraProvider>
      <Box p={8} maxWidth="400px" margin="auto">
        <Heading mb={4}>{isLogin ? "Login to NearDr" : "Sign Up"}</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  required
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button type="submit" colorScheme="orange" size="lg" fontSize="md">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <Button onClick={toggleForm} variant="link">
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </Button>
          </Stack>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default AuthPage;
