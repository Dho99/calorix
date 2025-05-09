// app/auth/error/ClientErrorPage.tsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function ClientErrorPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  return <p>{message}</p>;
}
