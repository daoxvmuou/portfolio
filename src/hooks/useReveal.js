import { useEffect, useRef } from 'react'

// 元素进入视口时添加 .in 类，触发 reveal 动画
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current ?? document
    const els = root.querySelectorAll('.reveal')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}
