import { motion } from "framer-motion"

const Animation = () => {
    return(
        <>
    <motion.div
    className="motiondiv"
      initial={{ opacity: 10, scale: 1 }}
      whileHover={{
        scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2],
        rotate: [0, 10, -10, 10, -10,10, -10,0]}}
      transition={{ duration: 1 }}
      drag = "y"
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    />
    </>
    )
}

export default Animation