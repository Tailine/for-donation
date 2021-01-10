import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Text,
  HStack,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import SelectSearch from "react-select-search";

export default function SignUp() {
  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];
  return (
    <Flex
      align="center"
      direction="column"
      w="100vw"
      minH="100vh"
      bg="pink"
      p="2em 0"
    >
      <Text
        w="70%"
        textAlign="left"
        fontSize="2em"
        fontWeight="bold"
        opacity=".65"
        color="purple.900"
        mb="1em"
      >
        Cadastre-se e ajude a quem precisa
      </Text>
      <Flex
        direction="column"
        borderRadius="8px"
        w="90%"
        h="auto"
        p="1em"
        bg="white"
      >
        <form>
          <FormControl id="name" m="1.5em 0" isRequired>
            <FormLabel>Nome:</FormLabel>
            <Input placeholder="Ana" />
            <FormErrorMessage>Campo obrigatorio</FormErrorMessage>
          </FormControl>

          <FormControl id="email" m="1.5em 0" isRequired>
            <FormLabel>Email:</FormLabel>
            <Input type="email" placeholder="ana@gmail.com" />
          </FormControl>

          <FormControl id="phone" m="1.5em 0" isRequired>
            <FormLabel>Telefone:</FormLabel>
            <Input placeholder="(11) 99999-9999" />
          </FormControl>

          <FormControl id="state" m="1.5em 0" isRequired>
            <FormLabel>Estado:</FormLabel>
            <Input placeholder="Selecione seu estado" />
          </FormControl>

          <FormControl id="city" m="1.5em 0" isRequired>
            <FormLabel>Cidade:</FormLabel>
            <SelectSearch
              options={options}
              value="sv"
              name="language"
              placeholder="Choose your language"
            />

            {/* <Input placeholder="Selecione sua cidade" /> */}
          </FormControl>

          <FormControl id="password" m="1.5em 0" isRequired>
            <FormLabel>Senha:</FormLabel>
            <Input type="password" placeholder="Insira uma senha" />
          </FormControl>

          <FormControl id="confirmPassword" m="1.5em 0" isRequired>
            <FormLabel>Confirmar senha:</FormLabel>
            <Input
              type="confirmPassword"
              placeholder="Insira novamente a senha"
            />
          </FormControl>

          <Button
            textTransform="uppercase"
            color="white"
            w="100%"
            bg="purple.100"
          >
            Confirmar
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
