import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Image } from '../api'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const imageUrl = (image: Image) =>
  process.env.NODE_ENV === 'production' ? image.imageUrl : `http://localhost:8080${image.imageUrl}`

export const MAX_FILE_SIZE = 10 * 1024
