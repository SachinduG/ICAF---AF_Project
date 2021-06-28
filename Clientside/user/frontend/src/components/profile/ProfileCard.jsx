import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import { getUserType } from "../../auth/userAuth";

const ProfileCard = ({ profile }) => {
	return (
		<motion.div
			className="profile-card"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "tween", duration: 0.8 }}
		>
			<div className="profile-img">
				<FaUserCircle className="profile-avatar" />
			</div>
			<div className="profile-details">
				<h3>{`Hi, ${profile.firstName} ${
					profile.lastName
				} (${getUserType()})`}</h3>
				<p>{profile.email}</p>
			</div>
		</motion.div>
	);
};

export default ProfileCard;
