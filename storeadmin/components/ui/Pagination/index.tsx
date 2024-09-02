import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { usePagination } from './usePagination'
import { cn } from '@/lib/utils'

type Props = {
  totalCount?: number
  currentPage?: number
  totalPages?: number
  pageSize?: number
  siblingCount?: number
}

export const Pagination = ({
  totalCount = 1,
  siblingCount = 1,
  currentPage = 1,
  pageSize = 1,
  totalPages = 1,
}: Props) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const setPage = (value: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', value.toString())
    replace(`${pathname}?${params.toString()}`)
  }

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || !paginationRange || paginationRange?.length < 2) {
    return null
  }

  const onNext = () => {
    setPage(currentPage + 1)
  }

  const onPrevious = () => {
    setPage(currentPage - 1)
  }

  const startNumber = () => {
    if (currentPage === 1) return 1
    console.log('🚀 ~ startNumber ~ currentPage:', currentPage)
    return (currentPage - 1) * pageSize + 1
  }

  const endNumber = () => {
    if (currentPage === 1) return pageSize
    if (currentPage === totalPages) return totalCount
    return (currentPage - 1) * pageSize + pageSize
  }

  return (
    <nav className='flex' aria-label='Pagination'>
      {currentPage > 1 && (
        <a
          className='ml-auto relative inline-flex items-center px-2 py-2 text-sm font-medium text-primary cursor-pointer hover:bg-gray-50'
          onClick={onPrevious}
        >
          <span className='sr-only'>Previous</span>
          <svg
            className='w-5 h-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      )}

      {/* {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <span
              className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-outline1'
              key={`pageNumber-${pageNumber}`}
            >
              ...
            </span>
          )
        }

        return (
          <a
            key={pageNumber}
            className={cn(
              `relative block items-center px-4 py-2 text-sm font-medium cursor-pointer`,
              pageNumber === currentPage ? 'text-outline1 z-10 ' : 'underline text-primary',
              currentPage == 1 && pageNumber === 1 && 'ml-auto',
            )}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </a>
        )
      })} */}

      <span className={cn('flex items-center text-sm', currentPage === 1 && 'ml-auto')}>
        {startNumber()} ~ {endNumber()}
      </span>
      <span className='flex items-center text-sm mx-2'>/</span>
      <span className='flex items-center text-sm'>{totalCount}</span>

      {currentPage < totalPages && (
        <a
          className={`relative inline-flex items-center px-2 py-2 text-sm font-medium text-primary cursor-pointer
						`}
          onClick={onNext}
        >
          <span className='sr-only'>Next</span>
          <svg
            className='w-5 h-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      )}
    </nav>
  )
}
