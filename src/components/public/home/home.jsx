import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ x: "105%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        duration: 0.75,
        ease: "backOut",
      }}
      className="bg-zinc-800/40 rounded-md p-2 m-4 flex flex-1"
    >
      home
    </motion.div>
  );
}
export default Home;
