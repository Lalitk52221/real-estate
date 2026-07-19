// import Container from "@/components/layout/Container";
// import { stats } from "./stats";

// export default function Statistics() {
//   return (
//     <section className="bg-blue-700 py-24 text-white">
//       <Container>
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//           {stats.map((item) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="text-center"
//               >
//                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
//                   <Icon size={30} />
//                 </div>

//                 <h2 className="mt-6 text-5xl font-bold">
//                   {item.number}
//                 </h2>

//                 <p className="mt-2 text-white/80">
//                   {item.title}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client"
import Container from "@/components/layout/Container";
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {stats} from './stats'


function useCounter(target:number, inView:boolean, duration=1800) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t0 = performance.now()
    let raf:number
    const tick = (now:number) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setVal(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])
  return val
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const v = useCounter(value, inView)
  return <span ref={ref}>{v.toLocaleString()}{suffix}</span>
}
export default function statistics() {
  return (
    
    <section id="statistics" className="relative py-15 bg-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><defs><pattern id="g" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)" /></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-5">
          {stats.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1, duration:0.6 }}
                className="flex items-center gap-4 justify-center">
                <div className="text-yellow-500"><Icon size={40}/></div>
                <div className="">
                  <div className="text-3xl md:text-4xl font-black text-yellow-500 counter-glow">
                    <Counter value={Number(it.number)} suffix={it.suf} />
                  </div>
                  <div className="text-[20px] font-bold tracking-wider leading-tight">{it.title}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
    
  )
}
