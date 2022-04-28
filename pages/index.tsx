import type { NextPage } from 'next'
import { useState } from 'react'
import {
  Button,
  Form,
  Input,
  useTheme
} from 'react-daisyui'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const [value, setValue] = useState<string>('')

  return (
    <div className='w-full h-screen flex items-center justify-center gap-4'>
      <div className='p-4 flex flex-col gap-4 bg-base-200 rounded-lg'>
        <span className='text-base-content'>theme: {theme}</span>

        <div className='flex items-center justify-center gap-4'>
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="accent">accent</Button>
        </div>

        <Form className='flex flex-col gap-2'>
          <Form.Label htmlFor="theme-input">theme setter</Form.Label>
          <Input id="theme-input" value={value} onChange={(e) => setValue(e.target.value)} />
          <Button color="success" onClick={()=> setTheme(value)}>submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Home
