import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<h1 className={styles.h1}>
				TRAVEL LEVEL <span>MAP</span>
			</h1>

			<main className={styles.main}>
				<a
					href="index.html"
					className={styles.home}
				>
					Home
				</a>
				<div className={styles.content}>
					We are the student that can manage your bucket list in Eastern Visayas Reg. VIII so just donate us some of your money hiy the donation button here. Thank You!
					<svg
						width="30"
						height="62"
						viewBox="0 0 30 62"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.2611 61.9545L29.2569 36.7067L0.393776 37.2099L15.2611 61.9545ZM11.698 0.999147L12.3693 39.5015L17.3685 39.4143L16.6973 0.911986L11.698 0.999147Z"
							fill="black"
						/>
					</svg>
					<button
						type="button"
						className={styles.donationBtn}
					>
						Donation
					</button>
					<section>
						<h2>My Philippines Travel Level</h2>
						<p>This simple web app helps you visualize how well-travelled you are in the Philippines.</p>

						<h2>How To Use</h2>
						<p>The map is divided into the 83* Philippine provinces. All you have to do is to click on a province and choose the appropriate level of travel. Here's what each level represents:</p>

						<ul>
							<li>
								<strong>Lived there</strong> - you spent a significant portion of your life in that area.
							</li>
							<li>
								<strong>Stayed there</strong> - you slept at least a night in that area.
							</li>
							<li>
								<strong>Visited there</strong> - you spent some hours exploring the area.
							</li>
							<li>
								<strong>Alighted there</strong> - you just dropped off for a short stopover, layover, or transfer.
							</li>
							<li>
								<strong>Passed there</strong> - you passed by that area but did not set foot.
							</li>
							<li>
								<strong>Never been there</strong> - you need to travel there soon.
							</li>
						</ul>

						<p>
							Click <a href="/map">here</a> to view the map. Enjoy!
						</p>
					</section>
					<section>
						<h2>About Us</h2>
						<p>Hello there! We are IT students showcasing our travel website. Enjoy!</p>
					</section>
				</div>
			</main>
		</>
	);
}
