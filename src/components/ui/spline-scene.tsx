'use client'

import React, { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-6 h-6 border-2 border-zinc-500 border-t-zinc-200 rounded-full animate-spin mb-3"></div>
          <span className="text-zinc-500 text-xs tracking-widest font-mono animate-pulse">MEMUAT 3D...</span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}