import { motion } from "framer-motion"

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-380%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 17 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-8">
            <span
              className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px oklch(58.5% 0.233 277.117)", // tailwind gray-400
              }}
            >
              Place Your Ads Here
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}