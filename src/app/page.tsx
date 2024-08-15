// pages/index.tsx
'use client';

import Loading from '@/components/Loading/Loading';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-primary-light text-primary-dark text-xl gap-4">
      Redirecting... <Loading />
    </div>
  );
}
