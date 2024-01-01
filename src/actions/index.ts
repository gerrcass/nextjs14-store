"use server";

import { redirect } from "next/navigation";
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccessToken";

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  // delete formDataObject["password_confirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const variables = {
    input: {
      email: formDataObject.email,
      firstName: formDataObject.first_name,
      lastName: formDataObject.last_name,
      phone: "+58" + formDataObject.phone,
      password: formDataObject.password,
    },
  };
  // const { customerCreate, customerUserErrors } = await graphqlClient.request(
  const { customerCreate } = await graphqlClient.request(
    createUserMutation,
    variables
  );

  const { customer } = customerCreate;

  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );
    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accesToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );
  if (accesToken) {
    redirect("/store");
  }
};
