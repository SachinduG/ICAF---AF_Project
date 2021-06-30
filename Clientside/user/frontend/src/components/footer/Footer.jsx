import React from "react";
import { Link, Redirect } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";

import FooterLogo from "url:../../assets/images/favicon.png";

const Footer = () => {
	return (
		<footer>
			<div className="footer-main-content">
				<div className="footer-content-left">
					<img src={FooterLogo} alt="footer-logo" className="footer-logo" />
					<div className="details-links">
						<Link to="/blogs">Blogs</Link>
						<Link to="/events">Events</Link>
						<Link to="/publications">Resarches</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</div>
				</div>
				<div className="footer-content-right">
					<div className="social-links">
						<Link
							to={{
								pathname: "https://facebook.com",
							}}
							target="blank"
						>
							<SiFacebook />
						</Link>
						<Link
							to={{
								pathname: "https://instagram.com",
							}}
							target="blank"
						>
							<SiInstagram />
						</Link>
						<Link
							to={{
								pathname: "https://twitter.com",
							}}
							target="blank"
						>
							<SiTwitter />
						</Link>
						<Link
							to={{
								pathname: "https://youtube.com",
							}}
							target="blank"
						>
							<SiYoutube />
						</Link>
					</div>
					<p>&copy; By INTIMIDATORS. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
