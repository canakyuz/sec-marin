import React from 'react'

interface FishPatternProps {
  className?: string
}

export const FishPattern: React.FC<FishPatternProps> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <path d="M50 25C60 25 75 30 85 40C75 50 60 55 50 55C40 55 25 50 15 40C25 30 40 25 50 25Z" />
    <circle cx="65" cy="40" r="3" />
    <path d="M50 45C55 45 60 50 60 55C55 55 50 50 50 45Z" />
  </svg>
)

