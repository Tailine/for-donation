import React, { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "../styles/sign_up.module.scss";

import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Select,
  Button,
  Heading,
  FormErrorMessage,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  password: string;
  confirmPassword: string;
}

type FormErrors = Record<keyof FormFields, boolean>;

const initalFormValues: FormFields = {
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [formValues, setFormValues] = useState<FormFields>(initalFormValues);
  const [errors, setErrors] = useState<FormErrors | undefined>();

  function updateFormValue(key: keyof FormFields, value: string) {
    setFormValues({ ...formValues, [key]: value });
  }

  function formHasErrors() {
    const errors: FormErrors = {} as FormErrors;

    for (const key of Object.keys(formValues)) {
      if (!formValues[key].trim()) {
        errors[key] = true;
      }
    }

    setErrors(errors);
    return !!Object.values(errors);
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formHasErrors()) {
      return;
    }
  }

  return (
    <Flex w="100vw" bg="pink" justify="center">
      <Flex
        align="center"
        direction={{ base: "column", lg: "row" }}
        justifyContent="center"
        w="100%"
        minH="100vh"
        p={{ base: "2em 0", lg: "3em" }}
      >
        <Flex direction="column">
          <Heading
            as="h1"
            fontSize={{ base: "2rem", xl: "3rem" }}
            w={{ xxl: "70%" }}
            textAlign="left"
            fontWeight="bold"
            opacity=".65"
            color="purple.900"
            mb="1em"
            p="0 1em"
          >
            Cadastre-se e ajude a quem precisa
          </Heading>
          <div className={styles.imageContainer}>
            <Image
              src="/donations.svg"
              alt="ilustração de doadores"
              width="600"
              height="600"
            />
          </div>
        </Flex>
        <Flex
          direction="column"
          borderRadius="8px"
          h="auto"
          maxWidth="50em"
          w="90%"
          p="1em"
          bg="white"
        >
          <form onSubmit={submitForm}>
            <Grid
              templateColumns={{ md: "1fr 1fr" }}
              gap={{ base: "0 0", md: "1.5em" }}
              p={{ md: "2em" }}
            >
              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="name"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={errors?.name}
                >
                  <FormLabel>Nome:</FormLabel>
                  <Input
                    placeholder="Ana"
                    onChange={({ target: { value } }) =>
                      updateFormValue("name", value)
                    }
                  />
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="phone"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={errors?.phone}
                >
                  <FormLabel>Telefone:</FormLabel>
                  <Input
                    placeholder="(11) 99999-9999"
                    onChange={({ target: { value } }) =>
                      updateFormValue("phone", value)
                    }
                  />
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl
                  id="email"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={errors?.email}
                >
                  <FormLabel>Email:</FormLabel>
                  <Input
                    type="email"
                    placeholder="ana@gmail.com"
                    onChange={({ target: { value } }) =>
                      updateFormValue("name", value)
                    }
                  />
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="state"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={errors?.state}
                >
                  <FormLabel>Estado:</FormLabel>
                  <Select
                    placeholder="Selecione seu estado"
                    onChange={({ target: { value } }) =>
                      updateFormValue("state", value)
                    }
                  />
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="city"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={errors?.city}
                >
                  <FormLabel>Cidade:</FormLabel>
                  <Input
                    placeholder="Selecione sua cidade"
                    onChange={({ target: { value } }) =>
                      updateFormValue("city", value)
                    }
                  />
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="password"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={errors?.password}
                >
                  <FormLabel>Senha:</FormLabel>
                  <Input
                    type="password"
                    placeholder="Insira uma senha"
                    onChange={({ target: { value } }) =>
                      updateFormValue("password", value)
                    }
                  />
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="confirmPassword"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={errors?.confirmPassword}
                >
                  <FormLabel>Confirmar senha:</FormLabel>
                  <Input
                    type="password"
                    placeholder="Insira novamente a senha"
                    onChange={({ target: { value } }) =>
                      updateFormValue("confirmPassword", value)
                    }
                  />
                  <FormErrorMessage>Campo obrigatório</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <Button
                  mb={{ base: "1.5em", lg: 0 }}
                  mt="1.5em"
                  type="submit"
                  textTransform="uppercase"
                  color="white"
                  w="100%"
                  bg="purple.100"
                  _hover={{
                    bg: "purple.100",
                  }}
                  _active={{
                    bg: "purple.100",
                  }}
                >
                  Confirmar
                </Button>
              </GridItem>
            </Grid>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}
