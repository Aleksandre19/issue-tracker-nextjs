// app/auth/signin/page.tsx
import { getProviders } from 'next-auth/react';
import Signout from './Signout';

export default async function SignInPage() {
  const providers = await getProviders();

  return <Signout providers={providers} />;
}
