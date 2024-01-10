// import angular from '@/images/tech/angular.png'
// import ionic from '@/images/tech/ionic.png'
// import coldfusion from '@/images/tech/coldfusion.png'
// import firebird from '@/images/tech/firebird.png'

// export type TechStacks = 'angular' | 'ionic' | 'coldfusion' | 'firebird'

// export type LogoMap = {
//   [key in TechStacks]?: string
// }

export default function TechStack({ stacks }: { stacks: string[] }) {
  // const logoMap: LogoMap = {
  //   angular: angular.src,
  //   ionic: ionic.src,
  //   coldfusion: coldfusion.src,
  //   firebird: firebird.src,
  // }

  return (
    <>
      <div className="flex flex-wrap ">
        {stacks.map((tech: string) => {
          let logo = require(`@/images/tech/${tech}.png`)
          return (
            <div className="m-2 rounded-md bg-white p-2">
              <img className="max-h-20  " src={logo.default.src} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
}
