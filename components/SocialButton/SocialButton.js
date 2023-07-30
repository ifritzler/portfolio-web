import { motion } from "framer-motion";

function SocialButton({ icon, link, label, download }) {
  return (
    //     <motion.div
    //   whileHover={{ scale: 1.2, rotate: 90 }}
    //   whileTap={{
    //     scale: 0.8,
    //     rotate: -90,
    //     borderRadius: "100%"
    //   }}
    // />
    <motion.a
      href={link}
      target="_blank"
      className="flex items-center justify-center py-2 px-2 gap-2 rounded-xl border border-black dark:border-white hover:border-[#9747FF] hover:bg-[#9747FF] hover:text-white transition duration-75"
      download={download}
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.8
      }}
      transition={{duration: 0.2}}
    >
      <span>{label}</span>
      {icon}
    </motion.a>
  );
}

export default SocialButton;
