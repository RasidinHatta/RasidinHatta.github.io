import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

interface DesktopSidebarLogoProps {
    open: boolean;
}

const DesktopSidebarLogo = ({ open }: DesktopSidebarLogoProps) => {
    return (
        <div className="flex h-16 items-center justify-between pl-2.5 pr-2 pt-2">
            <div className="flex-1 overflow-hidden">
                <Link
                    href="/"
                    className="flex items-center gap-2.5 cursor-target group"
                >
                    {/* Icon mark — always visible */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary p-1.5 transition-colors group-hover:bg-primary/90">
                        <Image
                            src="/rainbow-cat.gif"
                            alt="Rasidin Hatta"
                            width={28}
                            height={28}
                            unoptimized
                            className="h-7 w-7 object-contain"
                        />
                    </div>

                    {/* Full name — animate in/out with sidebar */}
                    <motion.div
                        animate={{
                            display: open ? "inline-block" : "none",
                            opacity: open ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <span className="text-xl font-black tracking-tight text-foreground whitespace-nowrap">
                            Rasidin<span className="text-primary tracking-normal font-medium">Hatta</span>
                        </span>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default DesktopSidebarLogo;
