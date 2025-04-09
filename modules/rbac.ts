import {ZuploContext, ZuploRequest} from "@zuplo/runtime";

type MyPolicyOptionsType = {
  role: string;
};

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  if (request.user.data.roles.includes(options.role)) {
    return request; //continue
  }

  return new Response(`Edie says go away!`, { status: 403 });
}
