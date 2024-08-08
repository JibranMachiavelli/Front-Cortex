// pages/index.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '../components/Loading/Loading';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <h1 className="text-white text-2xl font-sans ">Redirecting . . .</h1>
      <Loading />
    </div>
  );
}
