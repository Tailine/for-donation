import React, { useRef } from "react";
import Image from "next/image";
import { default as NextLink } from "next/link";
import NumberFormat from "react-number-format";

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
  Text,
  Link,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { validateEmail, validatePhoneNumber } from "../helpers/validators";

import styles from "../styles/sign_up.module.scss";

interface FormFields {
  name: string;
  email: string;
  phoneNumber: string;
  state: string;
  city: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const {
    handleSubmit,
    errors,
    register,
    control,
    getValues,
  } = useForm<FormFields>();
  const inputRef = useRef<any>();

  function submitForm(values: FormFields) {
    event.preventDefault();
    console.log("values", values);
  }

  function checkIfPasswordsMatch(confirmPassword: string) {
    const password = getValues("password");
    return password === confirmPassword;
  }

  return (
    <Flex w="100%" bg="pink" justify="center" overflowX="hidden">
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
          <form onSubmit={handleSubmit(submitForm)}>
            <Grid
              templateColumns={{ md: "1fr 1fr" }}
              gap={{ base: "0 0", md: "0 2em", lg: "2em" }}
              p={{ md: "2em 2em 0" }}
            >
              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="name"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={!!errors?.name}
                >
                  <FormLabel htmlFor="name">Nome:</FormLabel>
                  <Input
                    name="name"
                    ref={register({ required: true })}
                    placeholder="Ana"
                  />
                  {errors.name && (
                    <FormErrorMessage>
                      Este campo é obrigatório
                    </FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="phone"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={!!errors?.phoneNumber}
                >
                  <FormLabel htmlFor="phoneNumber">Telefone:</FormLabel>
                  <Controller
                    name="phoneNumber"
                    defaultValue={""}
                    control={control}
                    rules={{
                      validate: {
                        isPhoneNumberValid: validatePhoneNumber,
                      },
                    }}
                    onFocus={() => inputRef.current?.focus()}
                    as={
                      <NumberFormat
                        getInputRef={(elem) => (inputRef.current = elem)}
                        customInput={Input}
                        format="(##) ##### ####"
                        mask="_"
                      />
                    }
                  />
                  {errors.phoneNumber?.type === "isPhoneNumberValid" && (
                    <FormErrorMessage>Telefone inválido</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <FormControl
                  id="email"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={!!errors?.email}
                >
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input
                    name="email"
                    ref={register({
                      validate: {
                        isEmailValid: validateEmail,
                      },
                    })}
                    placeholder="ana@gmail.com"
                  />
                  {errors.email?.type === "isEmailValid" && (
                    <FormErrorMessage>Email inválido</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="state"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={!!errors?.state}
                >
                  <FormLabel htmlFor="state">Estado:</FormLabel>
                  <Select
                    name="state"
                    ref={register({ required: true })}
                    placeholder="Selecione seu estado"
                  >
                    <option value="first">1</option>
                  </Select>
                  {errors.state && (
                    <FormErrorMessage>
                      Este campo é obrigatório
                    </FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="city"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={!!errors?.city}
                >
                  <FormLabel htmlFor="city">Cidade:</FormLabel>
                  <Input
                    name="city"
                    ref={register({ required: true })}
                    placeholder="Ex: Salvador"
                  />
                  {errors.city && (
                    <FormErrorMessage>
                      Este campo é obrigatório
                    </FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="password"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={!!errors?.password}
                >
                  <FormLabel htmlFor="password">Senha:</FormLabel>
                  <Input
                    name="password"
                    ref={register({ required: true })}
                    type="password"
                    placeholder="Insira uma senha"
                  />
                  {errors.password && (
                    <FormErrorMessage>
                      Este campo é obrigatório
                    </FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem colSpan={{ base: 2, md: "auto" }}>
                <FormControl
                  id="confirmPassword"
                  m={{ base: "1em 0", lg: 0 }}
                  isInvalid={!!errors?.confirmPassword}
                >
                  <FormLabel htmlFor="confirmPassword">
                    Confirmar senha:
                  </FormLabel>
                  <Input
                    name="confirmPassword"
                    ref={register({
                      validate: { passwordsMatch: checkIfPasswordsMatch },
                    })}
                    type="password"
                    placeholder="Insira novamente a senha"
                  />
                  {errors.confirmPassword?.type === "passwordsMatch" && (
                    <FormErrorMessage>Senhas não coincidem</FormErrorMessage>
                  )}
                </FormControl>
              </GridItem>

              <GridItem
                colSpan={{ base: 2 }}
                colStart={{ md: 2 }}
                colEnd={{ md: 2 }}
              >
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
            <Text
              fontSize="sm"
              align={{ base: "center", md: "right" }}
              paddingRight={{ md: "2.5em" }}
              m={{ base: "1em 0", md: "1.5em 0" }}
            >
              Já possui cadastro? {/* TODO link to sign in page */}
              <NextLink href="/" passHref>
                <Link color="purple.100">Clique aqui</Link>
              </NextLink>
            </Text>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
}
