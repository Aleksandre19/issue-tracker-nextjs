import { getProviders } from 'next-auth/react';
import Signin from './Signin';

export default async function SignInPage() {
  const providers = await getProviders();

  return <Signin providers={providers} />;
}
