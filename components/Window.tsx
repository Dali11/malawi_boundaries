"use client"
// import MalawiMap from '../components/MalawiMap'
import dynamic from "next/dynamic";

const MalawiMap = dynamic(() => import("../components/MalawiMap"), {
  ssr: false,
});

const Window = () => {
  return (
    <div>
        <MalawiMap />
    </div>
  )
}

export default Window