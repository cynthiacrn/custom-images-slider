import {useRef, useEffect, useState} from "react";
export function useHorizontalScroll(){
  const [spacing, setSpacing] = useState(0)
  const sliderRef = useRef();

  useEffect(() => {
    function resetCenter() {
      setSpacing((window.innerWidth / 2) - 200)
    }

    resetCenter()

    window.addEventListener('resize', resetCenter)
    return () => {
      window.removeEventListener('resize', resetCenter)
    }
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.style.paddingLeft = `${spacing}px`
      slider.style.paddingRight = `${spacing}px`
    }
  }, [spacing])

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault()
        slider.scrollTo({
          left: slider.scrollLeft + e.deltaY,
          behavior: "smooth"
        })
      }
      slider.addEventListener("wheel", onWheel);
      return () => slider.removeEventListener("wheel", onWheel);
    }
  }, [])
  return sliderRef
}
