'use client'

import {
  ArrowPathIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardHeader,
  Image,
} from '@nextui-org/react'
import { useState } from 'react'

import CounterProps from './types'

export default function Counter({ id, step }: CounterProps) {
  const [counter, setCounter] = useState(0)

  return (
    <Card className="max-w-[240px]" isFooterBlurred>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <div className="flex flex-col">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Contador #{id}
          </p>
          <p className="text-white font-medium text-large">
            El contador vale {counter}.
          </p>
        </div>
      </CardHeader>
      <Image
        alt="Background with a clock"
        className="z-0 w-full h-full object-cover"
        src="/images/background-clocks.jpg"
        width={640}
        height={640}
      />
      <CardFooter className="absolute z-10 bottom-0 justify-center">
        <ButtonGroup>
          <Button
            isIconOnly
            size="md"
            aria-label="Decrement counter with delay"
          >
            <ChevronDoubleLeftIcon
              className="text-gray-600 dark:text-gray-400"
              height="1.3rem"
            />
            <div className="absolute right-1 bottom-0 font-bold drop-shadow-sm">
              {step * 10}
            </div>
          </Button>
          <Button
            isIconOnly
            size="md"
            aria-label="Decrement counter"
            onClick={function decrement() {
              setCounter(counter - step)
            }}
          >
            <ChevronLeftIcon
              className="text-gray-600 dark:text-gray-400"
              height="1.3rem"
            />
          </Button>
          <Button isIconOnly size="md" aria-label="Reset counter">
            <ArrowPathIcon
              className="text-gray-600 dark:text-gray-400"
              height="1.3rem"
            />
          </Button>
          <Button
            isIconOnly
            size="md"
            aria-label="Increment counter"
            onClick={function increment() {
              setCounter(counter + step)
            }}
          >
            <ChevronRightIcon
              className="text-gray-600 dark:text-gray-400"
              height="1.3rem"
            />
          </Button>
          <Button
            isIconOnly
            size="md"
            aria-label="Increment counter with delay"
          >
            <ChevronDoubleRightIcon
              className="text-gray-600 dark:text-gray-400"
              height="1.3rem"
            />
            <div className="absolute right-1 bottom-0 font-bold">
              {step * 10}
            </div>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
