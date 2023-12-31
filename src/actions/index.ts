"use server";

import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";

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
  const data = await graphqlClient.request(createUserMutation, variables);
  console.log(data);
};
