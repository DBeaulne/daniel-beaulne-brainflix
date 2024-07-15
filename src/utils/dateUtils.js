// Date conversion utility
// this utility will take a date and return a styling that tells the user
// how long ago a date was, instead of displaying the actual date

export function convertDate(date) {
	const millisecondMinutes = 60000;
	const millisecondHours = 60 * millisecondMinutes;
	const millisecondDays = 24 * millisecondHours;
	const millisecondMonths = 30 * millisecondDays;
	const millisecondYears = 12 * millisecondMonths;

	const currentDate = new Date();
	const timeDateDifferential = currentDate - new Date(date); // Ensure date is converted to Date object
	if (timeDateDifferential < millisecondMinutes) {
		return "Less than a minute ago";
	} else if (timeDateDifferential < millisecondHours) {
		const minutes = Math.floor(timeDateDifferential / millisecondMinutes);
		return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	} else if (timeDateDifferential < millisecondDays) {
		const hours = Math.floor(timeDateDifferential / millisecondHours);
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else if (timeDateDifferential < millisecondMonths) {
		const days = Math.floor(timeDateDifferential / millisecondDays);
		return `${days} day${days > 1 ? "s" : ""} ago`;
	} else if (timeDateDifferential < millisecondYears) {
		const months = Math.floor(timeDateDifferential / millisecondMonths);
		return `${months} month${months > 1 ? "s" : ""} ago`;
	} else {
		const years = Math.floor(timeDateDifferential / millisecondYears);
		return `${years} year${years > 1 ? "s" : ""} ago`;
	}
}
