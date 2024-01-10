import { useId } from 'react'
import ProfilePic from '@/images/profile-2.jpeg'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <div className="group block flex-shrink-0">
      <div className="flex items-center">
        <div className="relative inline-block">
          <img
            className="inline-block h-20 w-20 rounded-full md:h-28 md:w-28"
            src={ProfilePic.src}
            alt=""
          />
          <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white md:h-6 md:w-6" />
        </div>
        <div className="ml-3">
          <div className="text-md/tight font-display font-light text-white">
            Muhammad Asyraf Bin Norafandi
          </div>
          <div className="text-sky-300">DevSecOps Engineer</div>
        </div>
      </div>
    </div>
  )
}
