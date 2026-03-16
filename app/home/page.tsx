"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AVATARS, SOCIAL_LINKS } from "@/lib/constants"
import { HOME_ANIMATION } from "@/lib/animations"
import { ICON_MAP } from "@/lib/utils"

export default function HomePage() {
	return (
		<section className="relative py-24 px-4 bg-background dark:bg-zinc-950 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950/90 to-zinc-950 pointer-events-none" />
			<div className="relative z-10 max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<motion.div {...HOME_ANIMATION.heading} className="text-left">
						<div className="mb-6">
							<p className="text-muted-foreground dark:text-zinc-400 text-lg mb-2">I'm</p>
							<h1 className="display-font text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground dark:text-white">
								Elijah Alonzo
							</h1>
						</div>

						<motion.p {...HOME_ANIMATION.description} className="text-muted-foreground dark:text-zinc-400 max-w-xl mb-8 leading-relaxed">
							A full stack developer and devops skilled in building scalable web applications from frontend to backend. Experienced in database design, cloud deployment, and creating responsive, user-friendly interfaces. Adept at integrating tools to streamline workflows and enhance application functionality. Open to freelance projects, collaborations, and new career opportunities.
						</motion.p>

						<motion.div {...HOME_ANIMATION.socials} className="flex gap-3">
							{SOCIAL_LINKS.map((link) => {
								const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP]
								const isEmail = link.icon === "Mail"

								return (
									<Button
										key={link.icon}
										size="icon"
										variant="outline"
										className="w-11 h-11 rounded-full border-border dark:border-zinc-800 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300"
										asChild
									>
										<a
											href={link.href}
											title={link.title}
											target={isEmail ? undefined : "_blank"}
											rel={isEmail ? undefined : "noopener noreferrer"}
										>
											<Icon className="w-5 h-5 text-foreground dark:text-zinc-300" />
										</a>
									</Button>
								)
							})}
						</motion.div>
					</motion.div>

					<motion.div {...HOME_ANIMATION.image} className="relative flex justify-center items-center">
						<div className="relative w-72 h-80 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
							<div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-black opacity-60" />
							<div className="absolute -inset-8 rounded-full bg-zinc-800/20 dark:bg-zinc-800/30 blur-2xl" />

							<div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border dark:border-zinc-800 shadow-2xl shadow-black/30">
								<img
									src={AVATARS[0] || "/placeholder.svg"}
									alt="Elijah Alonzo"
									className="w-full h-full object-cover"
								/>
							</div>

							<motion.div {...HOME_ANIMATION.badge} className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800">
									<span className="w-2 h-2 rounded-full bg-emerald-500" />
									<span className="text-xs font-medium text-muted-foreground dark:text-zinc-400">Available for Projects</span>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
