"use client";

import Box from '@/components/Box';

const error = () => {
  return (
    // @ts-ignore
    <Box className="h-full flex items-center justify-center">
        <div className='text-neutral-400'>
            Something went wrong
        </div>    
    </Box>
  )
}

export default error