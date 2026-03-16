"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { HOME_ANIMATION } from "@/lib/animations"
import { ICON_MAP } from "@/lib/utils"
import homeData from "@/app/home/data.json"
import socialLinksData from "@/app/contact/data.json"
import { homeStyles } from "@/app/home/style"

interface SocialLink {
	icon: string
	href: string
	title: string
}

interface HomeData {
	headingPrefix: string
	name: string
	description: string
	badge: string
	avatar: string
}

function normalizeSocialLinks(data: unknown): SocialLink[] {
	if (!Array.isArray(data)) {
		return []
	}

	return data
		.map((item) => {
			const link = (item ?? {}) as Partial<SocialLink>
			return {
				icon: typeof link.icon === "string" ? link.icon : "Mail",
				href: typeof link.href === "string" ? link.href : "#",
				title: typeof link.title === "string" ? link.title : "Contact",
			}
		})
		.filter((link) => link.href.length > 0)
}

function normalizeHomeData(data: unknown): HomeData {
	const raw = (data ?? {}) as Partial<HomeData>

	return {
		headingPrefix: typeof raw.headingPrefix === "string" ? raw.headingPrefix : "I'm",
		name: typeof raw.name === "string" ? raw.name : "Your Name",
		description: typeof raw.description === "string" ? raw.description : "",
		badge: typeof raw.badge === "string" ? raw.badge : "Available for Projects",
		avatar: typeof raw.avatar === "string" ? raw.avatar : "/placeholder.svg",
	}
}

export default function HomePage() {
	const data = normalizeHomeData(homeData)
	const socialLinks = normalizeSocialLinks(socialLinksData)

	return (
		<section className={homeStyles.section}>
			<div className={homeStyles.backdrop} />
			<div className={homeStyles.container}>
				<div className={homeStyles.grid}>
					<motion.div {...HOME_ANIMATION.heading} className={homeStyles.content}>
						<div className={homeStyles.introBlock}>
							<p className={homeStyles.headingPrefix}>{data.headingPrefix}</p>
							<h1 className={homeStyles.name}>
								{data.name}
							</h1>
						</div>

						<motion.p {...HOME_ANIMATION.description} className={homeStyles.description}>
							{data.description}
						</motion.p>

						<motion.div {...HOME_ANIMATION.socials} className={homeStyles.socials}>
							{socialLinks.map((link) => {
								const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP] ?? ICON_MAP.Mail
								const isEmail = link.icon === "Mail"

								return (
									<Button
										key={link.icon}
										size="icon"
										variant="outline"
										className={homeStyles.socialButton}
										asChild
									>
										<a
											href={link.href}
											title={link.title}
											target={isEmail ? undefined : "_blank"}
											rel={isEmail ? undefined : "noopener noreferrer"}
										>
											<Icon className={homeStyles.socialIcon} />
										</a>
									</Button>
								)
							})}
						</motion.div>
					</motion.div>

					<motion.div {...HOME_ANIMATION.image} className={homeStyles.imageWrap}>
						<div className={homeStyles.imageBounds}>
							<div className={homeStyles.imageBaseGlow} />
							<div className={homeStyles.imageOuterGlow} />

							<div className={homeStyles.imageFrame}>
								<img
									src={data.avatar || "/placeholder.svg"}
									alt={data.name}
									className={homeStyles.image}
								/>
							</div>

							<motion.div {...HOME_ANIMATION.badge} className={homeStyles.badgeWrap}>
								<div className={homeStyles.badge}>
									<span className={homeStyles.badgeDot} />
									<span className={homeStyles.badgeText}>{data.badge}</span>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
