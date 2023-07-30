function SocialButton({ icon, link, label, download }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center justify-center py-2 px-2 gap-2 rounded-xl border border-black dark:border-white hover:border-[#9747FF] hover:bg-[#9747FF] hover:text-white transition duration-75"
      download={download}
    >
      <span>{label}</span>
      {icon}
    </a>
  );
}

export default SocialButton;
