import { GraphQLClientSingleton } from "app/graphql";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate";
import { cookies } from "next/headers";

export const createAccessToken = async (email: string, password: string) => {
  const cookieStore = cookies();

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  const { customerAccessTokenCreate } = await graphqlClient.request(
    customerAccessTokenCreateMutation,
    {
      email,
      password,
    }
  );

  /* 
    console.log(customerAccessTokenCreate);
    
    response example 👇
    customerAccessTokenCreate:  {
        customerAccessToken: {
        accessToken: 'b93c2cd81d0dc586e3f40f490eb4f019',
        expiresAt: '2024-02-11T22:51:21Z'
        }
  */

  const { accessToken, expiresAt } =
    customerAccessTokenCreate?.customerAccessToken;

  if (accessToken) {
    cookieStore.set("accessToken", accessToken, {
      path: "/",
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: "strict",
    });
    return accessToken;
  }
};
