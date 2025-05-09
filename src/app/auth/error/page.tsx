// app/auth/error/page.tsx
import { Suspense } from 'react';
import ClientErrorPage from './ClientErrorPage';

export default function ErrorPage() {
  return (
    <div>
      <h1>Error</h1>
      <Suspense fallback={<p>Loading error message...</p>}>
        <ClientErrorPage />
      </Suspense>
    </div>
  );
}
