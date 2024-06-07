import Link from "next/link";
import Image from "next/image";
const Foot = () => {
  return (
    <div className="mt-12 bg-gradient-to-b from-transparent from-[70%] to-secondary">
      <Image
        src="/IMG_1435.png"
        alt=""
        width={700}
        height={475}
        className="object-cover object-bottom"
      />
    </div>
  );
};

export default Foot;
