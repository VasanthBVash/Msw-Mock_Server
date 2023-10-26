import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Button, FormErrorMessage, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useHookForm ,IProps} from '../Services/useHookForm';
import { idText } from "typescript";

const schema = z.object({
  userName: z.string()
    .min(4, { message: "Minimum 4 character required" })
    .max(20, { message: "Maximum 20 character" }),
  email: z.string()
    .email({ message: "Invalid email" }),
  password: z.string()
    .min(8, { message: "minimum 8 character " })
    .max(20, { message: "Maximum 20 character" }),
})

function ReactHookForm({id} : {id:string | undefined}) {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useForm<IProps>({
    resolver: zodResolver(schema),
  });

  const {user,add,update,remove} = useHookForm({id});

  const handleFormSubmit = (data:any) => {
    add.mutate(data);
    update.mutate(data);
  };

  return (
    <>
      <h2>User Form</h2>
      <Box onSubmit={handleFormSubmit}>
        <FormControl id="userName" isRequired isInvalid={!!errors.userName}>
          <FormLabel>UserName</FormLabel>
          <Input placeholder="Enter Name" {...register("userName")} />
          <FormErrorMessage>
            {errors.userName && errors.userName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="email" isRequired isInvalid={!!errors.email}>
          <FormLabel htmlFor="Enter name">Email </FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="phoneNumber" isRequired>
          <FormLabel htmlFor="name">PhoneNumber</FormLabel>
          <Input
            type="number"
            placeholder="Enter PhoneNumber"
            {...register("phoneNumber")}
          />
        </FormControl>
        <FormControl id="passoword" isRequired isInvalid={!!errors.password}>
          <FormLabel htmlFor="name">Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </Box>
      <h4>On Submitting you get alert message</h4>
    </>
  );
}

export default ReactHookForm;

