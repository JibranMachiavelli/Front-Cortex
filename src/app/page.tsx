// pages/index.tsx
'use client';

import Loading from '@/components/Loading/Loading';

export default function Home() {

  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <h1 className="text-white text-2xl font-sans ">Redirecting . . .</h1>
      <Loading />
    </div>
  );
}
